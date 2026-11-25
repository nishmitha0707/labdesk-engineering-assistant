// Tool name: labdesk_ohms_calculator
// Input schema: voltage (number, optional), current (number, optional), resistance (number, optional), target (string, required)
// Units: voltage=V, current=A, resistance=ohms. Supply exactly two known values.
const targetRaw = String($target || '').trim().toUpperCase();
const targetAliases = { VOLTAGE: 'V', CURRENT: 'I', RESISTANCE: 'R', POWER: 'P', V: 'V', I: 'I', R: 'R', P: 'P' };
const target = targetAliases[targetRaw];
if (!target) return 'Error: target must be V/voltage, I/current, R/resistance, or P/power.';
const supplied = { V: $voltage, I: $current, R: $resistance };
const vals = {};
for (const [key, raw] of Object.entries(supplied)) {
  if (raw === undefined || raw === null || raw === '') continue;
  const value = Number(raw);
  if (!Number.isFinite(value)) return `Error: ${key} must be a finite number.`;
  if (value < 0) return `Error: ${key} cannot be negative.`;
  if (key === 'R' && value === 0) return 'Error: resistance must be greater than zero.';
  vals[key] = value;
}
if (Object.keys(vals).length !== 2) return 'Error: provide exactly two known values among voltage (V), current (I), and resistance (R).';
if (Object.prototype.hasOwnProperty.call(vals, target)) return `Error: ${target} is already supplied; choose a different target.`;
const V=vals.V, I=vals.I, R=vals.R;
let result, formula;
if (target==='V' && I!==undefined && R!==undefined) { result=I*R; formula='V = I × R'; }
else if (target==='I' && V!==undefined && R!==undefined) { result=V/R; formula='I = V / R'; }
else if (target==='R' && V!==undefined && I!==undefined) { if(I===0) return 'Error: current must be non-zero to calculate resistance from V/I.'; result=V/I; formula='R = V / I'; }
else if (target==='P' && V!==undefined && I!==undefined) { result=V*I; formula='P = V × I'; }
else if (target==='P' && V!==undefined && R!==undefined) { result=V*V/R; formula='P = V² / R'; }
else if (target==='P' && I!==undefined && R!==undefined) { result=I*I*R; formula='P = I² × R'; }
else return 'Error: the supplied values do not determine the requested quantity.';
if (!Number.isFinite(result)) return 'Error: calculation produced a non-finite result.';
const unit={V:'V',I:'A',R:'Ω',P:'W'}[target];
return `Result: ${target} = ${Number(result.toPrecision(8))} ${unit}. Formula: ${formula}. Inputs: ${Object.entries(vals).map(([k,v])=>`${k}=${v}`).join(', ')}.`;