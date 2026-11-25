# Digital Logic Design Lab Manual

University source: Dayananda Sagar University, School of Engineering, Department of Computer Science and Engineering.
Use the page markers below when citing this source. Page numbers refer to the PDF page number in the supplied manual.


---

## SOURCE PAGE 1

DAYANANDA SAGAR UNIVERSITY 
Devarahaggalahalli, Harohalli, Kanakapura Main Road,  
Bengaluru South Dt. – 562 112 
 
Department of Computer Science and 
Engineering 
 
Digital Logic Design 
Lab Manual 
(Course Code: 24CS2303) 
 
 
Prepared By 
 
Prof. Benaka Santhosha 
Dept of CSE  
 
Prof. Jeeva S  
Dept of CSE

---

## SOURCE PAGE 2

Vision 
To be recognized as a department of eminence in Computer Science and Engineering 
focusing on sustainability, inclusive technologies and societal needs. 
Mission 
M1: Impart quality technical education by designing and delivering contemporary 
Computer Science Engineering curricula while emphasizing leadership, ethics, values and 
integrity. 
M2: Transform professionals into technically competent through industry-academia 
collaboration and innovation ecosystem. 
M3: Prepare Computer Science and Engineering graduates to meet ever-growing societal 
needs. 
Program Educational Objectives (PEO) - UG 
PEO1.Apply appropriate theory, practices and tools in the design, implementation, 
maintenance and evaluation of computing in the work place or in higher education. 
PEO2.Exhibit professional skills in solving challenging problems in their career and 
advance to leadership roles. 
PEO3.Become effective innovator, researcher, and entrepreneur to provide technical 
solutions for socio-economic challenges. 
Program Specific Outcome (PSOs) - UG 
PSO1.Design and Integrate software and hardware systems by following standard software 
engineering principles in the areas related to IOT, Cloud, Networks, Security, Embedded 
Systems, and Artificial Intelligence of varying complexity. 
 
PSO2.Design and Implement application software systems by applying the concepts of 
Programming languages, Machine Learning, Mobile Computing, and Data Science that 
meet the automation requirements of society and Industry.

---

## SOURCE PAGE 3

Program Outcomes (PO's) 
 
PO1. Engineering Knowledge: Apply the knowledge of mathematics, science, 
engineering fundamentals, and an engineering specialization to the solution of complex 
engineering problems. 
PO2. Problem Analysis: Identify, formulate, review research literature, and analyze 
complex engineering problems reaching substantiated conclusions using first principles of 
mathematics, natural sciences, and engineering sciences. 
PO3. Design/Development of Solutions: Design solutions for complex engineering 
problems and design system components or processes that meet the specified needs with 
appropriate consideration for the public health and safety, and the cultural, societal, and 
environmental considerations. 
PO4. Conduct Investigations of Complex Problems: Use research-based knowledge and 
research methods including design of experiments, analysis and interpretation of data, and 
synthesis of the information to provide valid conclusions. 
PO5. Modern Tool Usage: Create, select, and apply appropriate techniques, resources, 
and modern engineering and IT tools including prediction and modeling to complex 
engineering activities with an understanding of the limitations. 
PO6. The Engineer and Society: Apply reasoning informed by the contextual knowledge 
to assess societal, health, safety, legal and cultural issues and the consequent 
responsibilities relevant to the professional engineering practice. 
PO7. Environment and Sustainability: Understand the impact of the professional 
engineering solutions in societal and environmental contexts, and demonstrate the 
knowledge of, and need for sustainable development. 
PO8. Ethics: Apply ethical principles and commit to professional ethics and 
responsibilities and norms of the engineering practice. 
PO9. Individual and Team Work: Function effectively as an individual, and as a 
member or leader in diverse teams, and in multidisciplinary settings. 
PO10. Communication: Communicate effectively on complex engineering activities with 
the engineering community and with society at large, such as, being able to comprehend 
and write effective reports and design documentation, make effective presentations, and 
give and receive clear instructions. 
PO11. Project Management and Finance: Demonstrate knowledge and understanding of 
the engineering and management principles and apply these to one’s own work, as a 
member and leader in a team, to manage projects and in multidisciplinary environments. 
PO12. Life-long Learning: Recognize the need for, and have the preparation and ability 
to engage in independent and life-long learning in the broadest context of technological 
change.

---

## SOURCE PAGE 4

COURSE OBJECTIVES: 
• To translate the elements of digital logic functions to digital system abstractions using 
Verilog. 
• To illustrate simplification of Boolean expressions using Karnaugh. 
• To model combinational logic circuits for arithmetic operations and logical operations. 
• To characterise, analyse and model bi-stable elements such as latches and flip-flops. 
• To outline the concept of Mealy Model, Moore Model and apply FSM for digital design. 
 
COURSE OUTCOMES: 
Course 
Outcome 
Description 
Bloom’s 
Taxonomy 
Level 
At the end of the course the student will be able to: 
1 
Interpretation of Boolean Expressions of digital design in simplified 
form 
L2 
2 
Build the various elements of digital logic system with Verilog 
L3 
3 
Construct Combinational and Sequential logic circuits 
L3 
4 
Analyse the hardware model of a digital system at different levels of 
abstraction in Verilog 
L4 
5 
Evaluate the functionality of digital design by implementing on FPGA 
kits 
L5 
6 
Modeling of digital systems using FSM 
L3 
 
 
 
 
List of Laboratory/Practical Experiments activities to be conducted: 
Experiments can be conducted using Verilog tool /Kits 
1.  Introduction to Xilinx tool, FPGA flow 
2.  Adder – HA, FA using data flow and behaviour modelling styles 
3.  Adder – HA, FA using structural modelling style 
4. Combinational designs – I (blocking and non-blocking/looping examples) 
a. Multiplexer: 4:1, 8:1 MUX. 
b. De Multiplexer: 1:4, 1:8 DEMUX. 
5. Combinational designs – II (different types of case statements) 
c. Encoder with and without Priority: 8:3 and 4:2. 
d. Decoder: 3:8 and 2:4. 
6.  Design of 4-bit ALU 
7.  Flip Flop: D FF, T FF, JK FF 
8.  Design of Mod – n Up/Down Counter with Synchronous reset 
9.  Design of Mod – n Up/Down Counter with Asynchronous reset. 
10. Design of Universal shift Register using FSM 
11. Open Ended Experiments

---

## SOURCE PAGE 5

Course Description 
This comprehensive course is a thorough introduction to the VHDL language. The emphasis is on writing 
solid synthesizable code and enough simulation code to write a viable test bench. Structural, Register 
Transfer Level (RTL), and behavioral coding styles are covered. This class addresses targeting Xilinx 
devices specifically and FPGA devices in general. The information gained can be applied to any digital 
design by using a top-down synthesis design approach. This course combines insightful lectures with 
practical lab exercises to reinforce key concepts. You will also learn best coding practices that will increase 
your overall VHDL proficiency and prepare you for the Advanced VLSI course. 
 
Digital Design Using Verilog: 
This course prepares students to implement Verilog modeling of digital logic. Students learn Verilog 
constructs and hardware modeling techniques. The course covers Verilog language elements and data types. 
Students tackle key challenges and learn structural, dataflow and behavioral modeling in Verilog, including 
common constructs and coding considerations. Instruction in the coding and testing of digital logic includes 
examples of combinational circuits (gates, mux/demux, encoders/decoders, and Boolean expression), 
sequential circuits (latches, flip-flops, shift registers, counters, RAMs and ROMs), and complex logic 
(flavors of ALU and FSM) 
 
Designing Xilinx FPGAs: 
This course is a practical introduction to programmable logic designs with Xilinx FPGAs Using several 
examples and design techniques, students will be taken through a complete PLD design. Upon completion 
of the course, students should be able to complete a design with Xilinx FPGAs, and understand the design 
and timing reports. Topics include a logic design process review, design software, Xilinx CPLDs and 
FPGAs architecture, design techniques and optimizing. 
 
Lab Descriptions 
The labs for this course provide a practical foundation for creating synthesizable RTL code. All aspects of 
the design flow are covered in the labs. You will write, synthesize, simulate, and implement all the labs. 
The focus of the labs is to write code that will optimally infer reliable and high-performance circuits. 
 
Introduction to Field Programmable Gate Arrays (FPGAs) 
A FPGA is a Field Programmable Gate Array; basically an array of generic gates to perform any logic 
function. Many FPGAs simply use small blocks of memory, called CLBs (Combinational Logic Blocks), 
to look up the answer to equations of 4 or 5 variables. In the past, AND and OR gates would be 
interconnected to solve equations; but this has been replaced with CLB's as they are more flexible and can

---

## SOURCE PAGE 6

be used as memory blocks. As not all equations have as little as 4 variables; typical designs will be spread 
over several CLBs; requiring signals to be routed between the CLBs. Just how much circuitry there is, and 
how fast it will run, in a particular FPGA, depends upon the speed of CLBs, the amount of resources for 
routing signals between CLBs, and how well a design can be "laid out" or optimized. Newer FPGAs are 
tailored for specific circuits. The Cyclone II FPGA, which is in our labs, has hardware multipliers and 
adders, which run at 250MHz, allowing ultra-signal processing circuits to be built. Configurable 
interconnects are provided between the chip resources (CLBs, hardware multipliers and memory blocks for 
the Cyclone II FPGA). The logic, circuitry, and interconnects in the architecture are configured by 
uploading a programming file to the FPGA chip. This property makes the FPGA chip very flexible since it 
is able to realize different digital circuits by uploading a different programming file. FPGAs are different 
that microprocessors or microcontrollers because the designer is able to change the hardware realized by 
the chip by programming it. Since hardware is always faster than software FPGAs allow hardware to be 
built with nearly the speed of software development. 
 
FPGA design steps 
1. Writing an HDL description ("design entry"). HDL is a class of high-level languages which 
is used to define how the device should work. It can be thought about as a programming 
language, though significantly different from the conventional programming languages. The 
most frequently used hardware description languages are VHDL and Verilog. 
2. Writing a test environment. It is almost impossible to create a fully correct HDL design at 
once. Therefore, it should be tested for possible errors. Whereas in the area of software 
development a program can be tested by simply running it, testing FPGA design involves 
writing a dedicated test environment. Test environment can be written in HDL 
(VHDL/Verilog), or in SystemC (SystemC is a special class library for C++ with the support 
for hardware signal simulation). A test environment usually includes a behavioral model, 
which is a higher-level, non-synthesizable device description used to verify HDL design 
correctness. 
3. Behavioral simulation is used to verify the HDL description against the corresponding 
behavioral model (using test environment). Most design errors are fixed at this stage. 
4. Synthesis is an automated process of converting a high-level HDL description to a machine- 
readable circuit description (a so-called netlist). Although synthesis of a correctly written 
HDL code shouldn't be a problem, some errors uncaught by behavioral simulation can 
appear at this stage. 
5. Implementation is a process of converting netlist to an FPGA configuration bit stream 
(tailored for specific FPGA device).

---

## SOURCE PAGE 7

6. Post-implementation simulation is used to verify the implemented design (taking switching 
and propagation delays into account) against the behavioral model. This step can be omitted 
for simple designs. 
7. Testing a produced bit stream in hardware. 
FPGA design is impossible without specialized vendor-specific EDA (electronic design automation) tools: 
 
 
• Xilinx ISE (Integrated Software Environment) for Xilinx FPGAs, 
• Quartus II for Altera devices, 
• Libero for Actel devices. 
Tool Overview 
Getting Started with Vivado Design Suite for Spartan 7 FPGA kit 
This tutorial explains the step-by-step procedure to create a Vivado project, create source files, synthesize 
the design, Implement the design and finally verify the functionality in FPGA using the Spartan 7 board.

---

## SOURCE PAGE 8

[No selectable text on this page. Consult the original page image.]

---

## SOURCE PAGE 9

[No selectable text on this page. Consult the original page image.]

---

## SOURCE PAGE 10

Step 7: Now the Vivado tool opens with Flow Navigator on left and Project Manager on right. Flow 
Navigator display the list of process involved from HDL input creation to bit file output generation. Project 
manager consist of Source, Workspace and Report Window. 
 
 
Source Window displays Design Sources (VHDL, Verilog), Constraints (XDC) and Simulation sources. 
Workspace Window is used to create and view HDL/XDC files. Report Window consist of TCL console, 
Messages, Logs, Reports and Design Rules

---

## SOURCE PAGE 11

[No selectable text on this page. Consult the original page image.]

---

## SOURCE PAGE 12

[No selectable text on this page. Consult the original page image.]

---

## SOURCE PAGE 13

[No selectable text on this page. Consult the original page image.]

---

## SOURCE PAGE 14

[No selectable text on this page. Consult the original page image.]

---

## SOURCE PAGE 15

[No selectable text on this page. Consult the original page image.]

---

## SOURCE PAGE 16

Step 21: Once the Program Succeeds, Done LED light up on Spartan 7 FPGA kit. Observe the output by 
varying the different combination of inputs.

---

## SOURCE PAGE 17

Experiment -1 
 
Adder – Half Adder using data flow, Structural and behaviour modelling styles 
AIM: To design half adder using dataflow modeling, Gate level Modelling and Behavioral Modelling style 
and verify the functionalities along with their synthesis and simulation results and also implement of FPGA 
kits. 
 
Design and Circuit diagram: 
HALF ADDER 
 
VERILOG CODE USING DATA FLOW MODELLING 
module half_adder ( 
input a, 
input b, 
output sum, 
output carry); 
assign sum = a ^ b; 
assign carry = a & b; 
endmodule 
 
VERILOG CODE USING GATE LEVEL MODELLING 
 
module HA_gate(a, b, sum, carry); 
input a, b; 
output sum, carry; 
xor (sum, a, b); 
and (carry, a, b); 
endmodule 
 
VERILOG CODE USING BEHAVIORAL MODELLING 
 
module half_adder_behave (input a, 
input b, 
output sum, 
output carry);

---

## SOURCE PAGE 18

reg sum, carry; 
always @ (a or b) 
begin 
sum = a ^ b; 
carry = a & b; 
end 
 
endmodule 
 
HALF ADDER TESTBENCH FOR ALL 3 MODELLING STYLES 
 
module HA_Test( ); 
reg a, b; 
wire sum, carry; 
half_adder g1(a,b, sum,carry); 
initial 
begin 
#0 a=1'b0; b=1'b0; 
#30 a=1'b0; b=1'b1; 
#30 a=1'b1; b=1'b0; 
#30 a=1'b1; b=1'b1; 
end 
initial 
$monitor ( $time, "a = %b, b = %b, sum = %b, carry = %b", a, b, sum, carry); 
 
initial 
#100 $finish; 
endmodule 
 
SIMULATION RESULTS:

---

## SOURCE PAGE 19

SYNTHESIS RESULTS: 
 
 
 
 
Conclusion: The half adder has been implemented in different modelling styles and verified on FPGA kit

---

## SOURCE PAGE 20

Experiment -1 
 
Adder – Full Adder using data flow, Structural and behaviour modelling styles 
AIM: To design full adder using dataflow modeling, Gate level Modelling and Behavioral Modelling style 
and verify the functionalities along with their synthesis and simulation results and also implement of FPGA 
kits. 
 
Design and Circuit diagram:

---

## SOURCE PAGE 21

VERILOG CODE USING DATA FLOW MODELLING 
 
module FA_Data(a, b, cin, sum, carry); 
input a, b, cin; 
output sum, carry; 
assign sum = a^b^cin; 
assign carry = (a&b)|(b&cin)|(a&cin); 
endmodule 
 
SIMULATION RESULTS: 
 
 
SYNTHESIS RESULTS:

---

## SOURCE PAGE 22

VERILOG CODE USING GATE LEVEL MODELLING FOR FULL ADDER USING 2 HALF 
ADDERS 
 
module FA_gate(a, b, cin, sum, carry); 
input a,b,cin; 
output sum, carry; 
wire s,t,u; 
xor (s, a, b); 
and (t,a,b); 
xor (sum, s, cin); 
and (u,s,cin); 
or (carry,u,t); 
endmodule 
 
VERILOG CODE USING BEHAVIORAL 
module FA_behavioral(a,b,cin,s,c); 
input a,b,cin; 
output reg s,c; 
always @(a or b or cin) 
begin 
if(a==0 & b==0 & cin==0) 
begin 
s=0; 
c=0; 
end 
else if(a==0 & b==0 & cin==1) 
begin 
s=1; 
c=0; 
end 
else if(a==0 & b==1 & cin==0) 
begin 
s=1; 
c=0; 
end 
else if(a==0 & b==1 & cin==1) 
begin

---

## SOURCE PAGE 23

s=0; 
c=1; 
end 
else if(a==1 & b==0 & cin==0) 
begin 
s=1; 
c=0; 
end 
else if(a==1 & b==0 & cin==1) 
begin 
s=0; 
c=1; 
end 
else if(a==1 & b==1 & cin==0) 
begin 
s=0; 
c=1; 
end 
else if(a==1 & b==1 & cin==1) 
begin 
s=1; 
c=1; 
end 
end 
endmodule 
 
VERILOG CODE FOR FULL ADDER TESTBENCH FOR ALL 3 MODELLING STYLES 
 
module FA_Test( ); 
reg a, b, cin; 
wire sum, carry; 
FA_behave g1(a,b,cin, sum,carry); 
initial 
begin 
#0 a=1'b0; b=1'b0; cin=1’b0; 
#10 a=1'b0; b=1'b0; cin=1’b1; 
#10 a=1'b0; b=1'b1; cin=1’b0; 
#10 a=1'b0; b=1'b1; cin=1’b1; 
#10 a=1'b1; b=1'b0; cin=1’b0; 
#10 a=1'b1; b=1'b0; cin=1’b1; 
#10 a=1'b1; b=1'b1; cin=1’b0; 
#10 a=1'b1; b=1'b1; cin=1’b1; 
end 
initial 
$monitor ( $time, "a = %b, b = %b, cin=%b, sum = %b, carry = %b", a, b, cin, sum, carry); 
initial 
#100 $finish; 
endmodule 
Conclusion: The Verilog code for different modelling styles’ has been simulated and implemented on 
FPGA Kits

---

## SOURCE PAGE 24

Experiment -3 
 
Combinational designs – I 
a. Multiplexer: 4:1, 8:1 MUX. 
b. De Multiplexer: 1:4, 1:8 DEMUX. 
AIM: To design Mux and Demux using if else and case statements and verify the functionalities along with 
their synthesis and simulation results and also implement of FPGA kits. 
 
2:1 Mux (NOT IN SYLLABUS but can spend 20 mins on this if time is available for better 
understanding of Conditional operator) 
 
 
 
 
 
 
 
Out=(in1*select) + (in2*~select) 
VERILOG CODE USING CONDITIONAL OPERATOR 
module mux2to1(in1, in2, sel, out); 
input in1, in2, sel; 
output reg out; 
always @ (in1, in2, sel) 
out=sel? in2: in1; 
endmodule

---

## SOURCE PAGE 25

TESTBENCH FOR 2:1 MUX 
module mux2to1_tb( ); 
reg in1,in2,sel; 
wire out; 
mux2to1 g1(in1, in2, sel, out); 
initial 
begin 
#0 sel=1’b0; in1=1’b1; in2=1’b1; 
#10 sel=1’b1; in1=1’b1; in2=1’b1; 
end 
 
initial 
$monitor ( $time, "in1 = %b, in2 = %b, sel=%b, out=%b", in1, in2, sel, out); 
 
initial 
#100 $finish; 
endmodule 
 
 
SIMULATION RESULTS: 
 
 
SYNTHESIS RESULTS:

---

## SOURCE PAGE 26

4:1 MUX 
 
VERILOG CODE USING IF ELSE STATEMENT 
module mux4to1(i, s, y); 
input [3:0] i; 
input [1:0] s; 
output reg y; 
always @ (*) 
if (s==0) 
y=i[0]; 
else if (s==1) 
y=i[1]; 
else if (s==2) 
y=i[2]; 
else 
y=i[3]; 
endmodule 
 
TESTBENCH FOR 4:1 MUX 
module mux4to1_tb( ); 
reg [3:0] i; 
reg [1:0] s; 
wire y; 
mux4to1 g1(i, s, y); 
initial 
begin 
#0 s=2’b00; i=4’b0001; 
#10 s=2’b01; i=4’b0001; 
#10 s=2’b10; i=4’b0101; 
#10 s=2’b11; i=4’b1001; 
end 
initial 
$monitor ($time, "i = %b, s=%b, y=%b", i, s, y); 
initial 
#100 $finish; endmodule

---

## SOURCE PAGE 27

SIMULATION RESULTS: 
 
 
SYNTHESIS RESULTS:

---

## SOURCE PAGE 28

8:1 MUX

---

## SOURCE PAGE 29

VERILOG CODE USING CASE STATEMENT 
module mu8to1(i, s, y); 
input [7:0] i; 
input [2:0] s; 
output reg y; 
always @ (*) 
begin 
case (s) 
3’b000: y=i[0]; 
3’b001: y=i[1]; 
3’b010: y=i[2]; 
3’b011: y=i[3]; 
3’b100: y=i[4]; 
3’b101: y=i[5]; 
3’b110: y=i[6]; 
3’b111: y=i[7]; 
default: y=8’b00000000; 
endcase 
end 
endmodule 
 
 
TESTBENCH FOR 8:1 MUX 
module mux8to1_tb( ); 
reg [7:0] i; 
reg [2:0] s; 
wire y; 
mux8to1 g1(i, s, y); 
initial 
begin 
#0 s=3’b000; i=8’b10101010; 
#10 s=3’b001; i=8’b10101010; 
#10 s=3’b010; i=8’b10101010; 
#10 s=3’b011; i=8’b10101010; 
#10 s=3’b100; i=8’b10101010; 
#10 s=3’b101; i=8’b10101010; 
#10 s=3’b110; i=8’b10101010; 
#10 s=3’b111; i=8’b10101010; 
end 
initial 
$monitor ($time, "i = %b, s=%b, y=%b", i, s, y); 
initial 
#100 $finish; 
endmodule

---

## SOURCE PAGE 30

SIMULATION RESULTS: 
 
 
SYNTHESIS RESULTS:

---

## SOURCE PAGE 31

1:4 DEMUX 
 
 
 
VERILOG CODE 1:4 DEMUX USING CASE STATEMENT 
 
module demux1to4 (d, s, y); 
input d; 
input [1:0] s; 
output reg [0:3] y; 
always @ (*) 
begin 
case(s) 
0: y ={d,3'b000}; 
1: y ={1'b0,d,2'b00}; 
2: y ={2'b00,d,1'b0}; 
3: y ={3'b000,d}; 
default: y=4'b0000; 
endcase 
end 
endmodule

---

## SOURCE PAGE 32

TESTBENCH FOR 1:4 DEMUX 
module demux1to4_tb( ); 
reg d; 
reg [1:0] s; 
wire [0:3] y; 
demux1to4 g1(d,s,y); 
initial 
begin 
#0 d=1’b0; 
#10 d=1’b1; s=2’b00; 
#10 s=2’b01; 
#10 s=2’b10; 
#10 s=2’b11; 
End 
initial 
$monitor ($time, "d = %b, s=%b, y=%b", d, s, y); 
initial 
#100 $finish; 
endmodule 
 
 
SIMULATION RESULTS:

---

## SOURCE PAGE 33

SYNTHESIS RESULTS: 
 
1:8 DEMUX 
 
Boolean Expression for 1:8 Demultiplexer 
Y0 = A (S2)'(S1)'(S0)’ 
Y1 = A (S2)'(S1)'(S0) 
Y2 = A (S2)'(S1)(S0)’ 
Y3 = A (S2)'(S1)(S0) 
Y4 = A (S2)(S1)'(S0)’ 
Y5 = A (S2)(S1)'(S0) 
Y6 = A (S2)(S1)(S0)’ 
Y7 = A (S2)(S1)(S0)

---

## SOURCE PAGE 34

VERILOG CODE FOR 1:8 DEMUX USING CASE STATEMENT 
module demux1to8(y,s,a); 
output reg [0:7]y; 
input [2:0]s; 
input a; 
always @(*) 
begin 
case(s) 
0: y ={a,7'b0000000}; 
1: y ={1'b0,a,6'b000000}; 
2: y ={2'b00,a,5'b00000}; 
3: y ={3'b000,a,4'b0000}; 
4: y={4'b0000,a,3'b000}; 
5: y={5'b00000,a,2'b00}; 
6: y={6'b000000,a,1'b0}; 
7: y={7'b0000000,a}; 
default: y=8'b00000000; 
endcase 
end 
endmodule 
 
TESTBENCH FOR 1:8 DEMUX 
module demux1to8_tb( ); 
reg a; 
reg [2:0] s; 
wire [0:7] y; 
demux1to8 g1(y,s,a); 
initial 
begin 
#0 a=1’b1; s=3’d0; 
#10 s=3’d1; 
#10 s=3’d2; 
#10 s=3’d3; 
#10 s=3’d4; 
#10 s=3’d5; 
#10 s=3’d6; 
#10 s=3’d7; 
End 
initial 
$monitor ($time, "a = %b, s=%b, y=%b", a, s, y); 
initial 
#100 $finish; 
endmodule

---

## SOURCE PAGE 35

SIMULATION RESULTS: 
 
 
 
 
 
SYNTHESIS RESULTS:

---

## SOURCE PAGE 36

Experiment -4 
Combinational designs – II (different types of case statements) 
c. Encoder with and without Priority: 8:3 and 4:2. 
d. Decoder: 3:8 and 2:4. 
 
AIM: To design encoder with and without priority and decoder using Behavioral Modelling style with 
different case statements and verify the functionalities along with their synthesis and simulation results and 
also implement of FPGA kits. 
ENCODER WITH OUT PRIORITY 8:3

---

## SOURCE PAGE 37

VERILOG CODE FOR 8:3 ENCODER WITHOUT PRIORITY 
module encwtoutprio(a,en,y); 
input [7:0] a; 
input en; 
output reg [2:0] y; 
always@(a or en) 
begin 
if(!en) 
y=3'bzzz; 
else 
case(a) 
8'b00000001:y=3'b000; 
8'b00000010:y=3'b001; 
8'b00000100:y=3'b010; 
8'b00001000:y=3'b011; 
8'b00010000:y=3'b100; 
8'b00100000:y=3'b101; 
8'b01000000:y=3'b110; 
8'b10000000:y=3'b111; 
endcase 
end 
endmodule 
 
 
TESTBENCH FOR 8:3 ENCODER WITHOUT PRIORITY 
module enc_tb( ); 
reg [7:0] a; 
reg en; 
wire [2:0] y; 
 
encwtoutprio u1 (a,en,y); 
initial 
begin 
#0 
en=1'b0; 
a= 8'b00000001; 
#30 a=8'b00000010; 
#30 a=8'b00000100;

---

## SOURCE PAGE 38

#30 a=8'b00001000; 
#30 a=8'b00010000; 
#30 a=8'b00100000; 
#30 a=8'b01000000; 
#30 a=8'b10000000; 
 
#30 en=1'b1; 
a= 8'b00000001; 
#30 a=8'b00000010; 
#30 a=8'b00000100; 
#30 a=8'b00001000; 
#30 a=8'b00010000; 
#30 a=8'b00100000; 
#30 a=8'b01000000; 
#30 a=8'b10000000; 
end 
initial 
$monitor ( $time, "a= %b, en= %b, y = %b", a, en,y); 
 
initial 
#1000 $finish; 
endmodule 
 
SIMULATION RESULTS:

---

## SOURCE PAGE 39

SYNTHESIS RESULTS: 
VERILOG CODE FOR 8:3 PRIORITY ENCODER 
 
module encwtprio(a,en,y); 
input [7:0] a; 
input en; 
output reg [2:0] y; 
always@(a, en) 
begin 
if(en==1) 
y=3'bzzz; 
else 
casex(a) 
8'b00000001:y=3'b000; 
8'b0000001x:y=3'b001; 
8'b000001xx:y=3'b010; 
8'b00001xxx:y=3'b011; 
8'b0001xxxx:y=3'b100; 
8'b001xxxxx:y=3'b101; 
8'b01xxxxxx:y=3'b110; 
8'b1xxxxxxx:y=3'b111; 
endcase 
end 
endmodule

---

## SOURCE PAGE 40

TESTBENCH FOR 8:3 PRIORITY ENCODER 
module prienc_tb( ); 
reg [7:0] a; 
reg en; 
wire [2:0] y; 
 
encwtprio u1 (a,en,y); 
initial 
begin 
 
#0 
en=1'b0; 
a= 8'b00000001; 
#30 a=8'b10000010; 
#30 a=8'b00000101; 
#30 a=8'b00001011; 
#30 a=8'b0001xxxx; 
#30 a=8'b00101000; 
#30 a=8'b01001000; 
#30 a=8'b10001011; 
 
#30 en=1'b1; 
a= 8'b00000001; 
#30 a=8'b00000010; 
#30 a=8'b00000101; 
#30 a=8'b00001011; 
#30 a=8'b0001xxxx; 
#30 a=8'b0010xxxx; 
#30 a=8'b01001000; 
#30 a=8'b10001011; 
end 
initial 
$monitor ( $time, "a= %b, en= %b, y = %b", a, en, y); 
 
initial 
#1000 $finish; 
endmodule

---

## SOURCE PAGE 41

SIMULATION RESULTS:

---

## SOURCE PAGE 42

SYNTHESIS RESULTS: 
 
VERILOG CODE FOR ENCODER 4:2 
module enc4_2(din, dout ); 
input [3:0] din; 
output [1:0] dout; 
reg [1:0] dout; 
always @ (din) 
 
case (din) 
1 : dout[0] = 0; 
2 : dout[1] = 1; 
4 : dout[2] = 2; 
8 : dout[3] = 3; 
default : dout = 2’bxx; 
endcase 
endmodule 
TEST BENCH FOR ENCODER 4:2 
 
module enc4_2_tb( ); 
reg [3:0] din; 
wire [1:0] dout; 
enc4_2 g1 (din, dout); 
initial 
begin 
din = 0; 
#10; din=1; 
#10; din=2; 
#10; din=4; 
#10; din=8; 
end 
initial 
begin 
$monitor($time, “din=%b, dout=%b”, din, dout); 
end 
initial 
#150 $finish;

---

## SOURCE PAGE 43

endmodule 
 
 
SIMULATION RESULTS: 
 
 
 
SYNTHESIS RESULTS:

---

## SOURCE PAGE 44

VERILOG CODE FOR 4:2 PRIORITY ENCODER 
module priority_encoderbehave(A, Y); 
input [3:0]Y; 
output reg [1:0]A; 
always@(Y) 
begin 
casex(Y) 
4'b0001:A = 2'b00; 
4'b001x:A = 2'b01; 
4'b01xx:A = 2'b10; 
4'b1xxx:A = 2'b11; 
default:$display("Error!"); 
endcase 
end 
endmodule 
TESTBENCH FOR 4:2 PRIORITY ENCODER 
 
module PriorityEncoder_Test ( ) ; 
reg [3:0] Y; 
wire [1:0] A; 
priority_encoderbehave g1 (.Y(Y), .A(A)); 
initial 
begin 
 
#0 Y = 0; 
#10 Y = 4'b0000; 
#10 Y = 4'b1000; 
#10 Y = 4'b0100; 
#10 Y = 4'b0010; 
#10 Y = 4'b0001; 
#10 Y = 4'b1010; 
#10 Y = 4'b1111; 
end 
initial 
begin 
$monitor("time=",$time, "A=%b : Y=%b",A,Y); 
end 
initial 
#100 $finish; 
endmodule

---

## SOURCE PAGE 45

SIMULATION RESULTS: 
 
 
SYNTHESIS RESULTS:

---

## SOURCE PAGE 46

VERILOG CODE FOR DECODER 2:4 
module dec2to4(din, dout); 
input [1:0] din; 
output reg [3:0] dout; 
always @ (din) 
case (din) 
2'b00 : dout = 4'b0001; 
2'b01 : dout = 4'b0010; 
2'b10 : dout = 4'b0100; 
2'b11 : dout = 4'b1000; 
default : dout = 4’bxxxx; 
endcase 
endmodule 
 
TEST BENCH FOR DECODER 2:4 
module dec2to4_tb( ); 
reg [1:0] din; 
wire [3:0] dout; 
dec2to4 g1 (din, dout); 
initial 
begin 
#0 din = 0; 
#10; din=0; 
#10; din=1; 
#10; din=2; 
#10; din=3; 
end 
initial 
begin 
$monitor($time, “din=%b, dout=%b”, din, dout); 
end 
initial 
#100 $finish; 
endmodule

---

## SOURCE PAGE 47

SIMULATION RESULTS: 
 
 
 
SYNTHESIS RESULTS:

---

## SOURCE PAGE 48

VERILOG CODE FOR DECODER 3: 8 
module decoder3to8(Data_in, Data_out ); 
input [2:0] Data_in; 
output [7:0] Data_out; 
reg [7:0] Data_out; 
 
always @(Data_in) 
case (Data_in) 
3'b000 : Data_out = 8'b00000001; 
3'b001 : Data_out = 8'b00000010; 
3'b010 : Data_out = 8'b00000100; 
3'b011 : Data_out = 8'b00001000; 
3'b100 : Data_out = 8'b00010000; 
3'b101 : Data_out = 8'b00100000; 
3'b110 : Data_out = 8'b01000000; 
3'b111 : Data_out = 8'b10000000; 
default : Data_out = 8'b00000000; 
endcase 
endmodule 
 
TEST BENCH FOR DECODER 3:8 
module tb_decoder ( ); 
reg [2:0] Data_in; 
wire [7:0] Data_out; 
decoder3to8 g1 (Data_in, Data_out ); 
initial 
begin 
#0 Data_in = 3'b000; 
#10 Data_in = 3'b001; 
#10 Data_in = 3'b010; 
#10 Data_in = 3'b011; 
#10 Data_in = 3'b100; 
#10 Data_in = 3'b101; 
#10 Data_in = 3'b110; 
#10 Data_in = 3'b111; 
end 
initial 
begin 
$monitor($time, “Data_in=%b, Data_out=%b”, Data_in, Data_out); 
end 
initial 
#100 $finish; 
endmodule

---

## SOURCE PAGE 49

SIMULATION RESULTS: 
 
 
SYNTHESIS RESULTS:

---

## SOURCE PAGE 50

Experiment-5 
Design of 4 bit ALU 
 
Aim: To design the 4 bit ALU for the following functions and verify its functationality with test bench and 
implement on FPGA kit. 
 
 
VERILOG CODE FOR 4 BIT ALU 
 
module alu (S, A, B, F); 
input [2:0] S; 
input [3:0] A, B; 
output reg [3:0] F; 
always @ (S, A, B) 
case (S) 
0: F = 4’b0000; 
1: F = B – A; 
2: F = A – B; 
3: F = A + B; 
4: F = A ^ B; 
5: F = A | B; 
6: F = A& B; 
7: F = 4’b1111; 
endcase 
endmodule 
TEST BENCH FOR ALU 
module alu_tb ( ); 
reg [2:0] S; 
reg [3:0] A,B; 
wire [3:0] F; 
alu g1 (S,A,B, F); 
initial 
begin

---

## SOURCE PAGE 51

#0 A=4'b0101; B=4'b1001; S=3'b000; 
#10 S=3'b001; 
#10 S=3'b010; 
#10 S=3'b011; 
#10 S=3'b100; 
#10 S=3'b101; 
#10 S=3'b110; 
#10 S=3'b111; 
 
#30 A=4'b0100; B=4'b0010; S=3'b000; 
#10 S=3'b001; 
#10 S=3'b010; 
#10 S=3'b011; 
#10 S=3'b100; 
#10 S=3'b101; 
#10 S=3'b110; 
#10 S=3'b111; 
end 
initial 
begin 
$monitor ($time, "S=%b, A=%b, B=%b, F=%b", S,A,B,F); 
end 
initial 
#220 $finish; 
Endmodule 
SIMULATION RESULTS:

---

## SOURCE PAGE 52

SYNTHESIS RESULTS:

---

## SOURCE PAGE 53

Experiment: 6 
 
Flip Flop: D FF, T FF, JK FF 
 
Aim: To design different flipflop such as DFF, TFF and JK FF with various combinations of Reset and 
verify its functionality with testbench and implement on FPGA kit. 
D Filp flop 
 
 
VERILOG CODE FOR D FILP FLOP WITH OUT RESET 
module dff (D, Clock, Q); 
input D, Clock; 
output reg Q; 
always @(posedge Clock) 
Q = D; 
endmodule 
TESTBENCH FOR D FLIP FLOP 
module dff_tb (); 
reg D,Clock; 
wire Q; 
dff g1 (D,Clock, Q); 
initial 
begin 
Clock=1'b0; 
forever #20 Clock=~Clock; 
end

---

## SOURCE PAGE 54

initial 
begin 
#0 D=1'b1; 
#50 D=1'b0; 
#40 D=1'b1; 
end 
initial 
begin 
$monitor($time, "Clock=%b, D=%b, Q=%b", Clock, D, Q); 
end 
initial 
#200 $finish; 
endmodule 
SIMULATION RESULTS: 
 
 
 
SYNTHESIS RESULTS:

---

## SOURCE PAGE 55

J K Flip Flop 
 
 
 
 
 
Synchronous resets are triggered on active edge of a clock

---

## SOURCE PAGE 56

VERILOG CODE FOR J K FLIP FLOP WITH SYNCHRONOUS RESET 
 
module jk_flipflop (clk, rst_n, j,k, q, q_bar ); 
input clk, rst_n, j,k; 
output reg q, q_bar; 
 
always@(posedge clk) 
begin // for synchronous reset 
if(!rst_n) 
{q,q_bar} <= {1'b0,1'b1}; 
else 
begin 
case({j,k}) 
2'b00: {q,q_bar} <= {q,q_bar}; // No change 
2'b01: {q,q_bar} <= {1'b0,1'b1}; // reset 
2'b10: {q,q_bar} <= {1'b1,1'b0}; // set 
2'b11: {q,q_bar} <= {q_bar,q}; // Toggle 
endcase 
end 
end 
endmodule 
TESTBENCH FOR J K FLIP FLOP 
module jkff_tb (); 
reg clk, rst_n, j,k; 
wire q,q_bar; 
jk_flipflop g1 (clk, rst_n, j,k, q, q_bar ); 
 
initial 
begin 
clk=1'b0; 
forever #5 clk=~clk; 
end 
 
initial 
begin 
#0 rst_n =0; 
#20 j=0; k=0; 
#20 j=0; k=1; 
#20 j=1;k=0; 
#20 j=1;k=1; 
#20 rst_n =1; 
#20 j=0; k=0; 
#20 j=0; k=1; 
#20 j=1;k=0; 
#20 j=1;k=1; 
end 
initial 
begin 
$monitor($time, "clk=%b, rst_n=%b, j=%b, k=%b, q=%b, q_bar=%b", clk, rst_n,j,k,q,q_bar); 
end 
initial

---

## SOURCE PAGE 57

#200 $finish; 
endmodule 
SIMULATION RESULTS: 
 
 
SYNTHESIS RESULTS:

---

## SOURCE PAGE 58

T Flip Flop 
 
 
 
 
VERILOG CODE FOR T FLIP FLOP WITH ASYNCHRONOUS RESET 
module tff (clk, rstn, t, q); 
input clk,rstn,t; 
output reg q; 
always @ (posedge clk or negedge rstn) 
begin 
if (!rstn) 
q <= 0; 
else 
if (t) 
q <= ~q; 
else 
q <= q; 
end 
endmodule

---

## SOURCE PAGE 59

TEST BENCH FOR T FLIP FLOP 
module tff_tb ( ); 
reg clk; 
reg rstn; 
reg t; 
wire q; 
tff g1 (clk, rstn, t,q); 
initial 
begin 
clk=1'b0; 
forever #20 clk=~clk; 
end 
 
initial 
begin 
#0 rstn =0; t=0; 
#30 t=1; 
#30 rstn=1; t=0; 
#30 t=1; 
end 
initial 
begin 
$monitor($time “clk=%b, rstnt=%b, t=%b, q=%b”, clk, rstn,t,q); 
end 
initial 
#500 $finish; 
endmodule 
 
SIMULATION RESULTS:

---

## SOURCE PAGE 60

SYNTHESIS RESULTS:

---

## SOURCE PAGE 61

Experiment 8 
Design of Mod – n Up/Down Counter with Synchronous reset 
Aim : Design of mod n counter using FSM with synchronous reset and implementing on FPGA kit 
 
 
The “parameter N=5 and width =3” can be changed for different value of modulus

---

## SOURCE PAGE 62

VERILOG CODE MOD 5 UPDOWN COUNTER SYNCHRONOUS RESET 
 
module counter_syn(clk,reset,up_down,count); 
parameter N=5; 
parameter width=3; 
input clk,reset,up_down; 
output reg [width-1:0]count; 
 
always @(posedge clk) 
begin 
if (reset) 
count<=0; 
else if (up_down) 
begin 
if(count==(N-1)) 
count<=0; 
else 
count<=count+1; 
end 
else 
begin 
count<=count-1; 
if(count==0) 
count<=(N-1); 
end 
end 
endmodule 
TESTBENCH FOR MOD 5 UPDOWN COUNTER SYNCHRONOUS RESET 
 
module counter_tb(); 
parameter N=5,width=3; 
reg clk,reset,up_down; 
wire [width-1:0]count; 
counter_syn G1(clk,reset,up_down,count); 
initial 
begin 
clk=1'b0; 
forever #10 clk=~clk; 
end 
 
initial 
begin 
#0 clk=0;reset=1; 
#100 reset=0;up_down=1; 
#430 up_down=0; 
end 
initial

---

## SOURCE PAGE 63

#1000 $finish; 
endmodule 
 
SIMULATION RESULTS: 
Simulation result for mod 5 counter 
 
Simulation result for mod 10 counter

---

## SOURCE PAGE 64

SYNTHESIS RESULTS:

---

## SOURCE PAGE 65

Experiment 9 
Design of Mod – n Up/Down Counter with asynchronous reset 
Aim : Design of mod n counter using FSM with asynchronous reset and implementing on FPGA kit 
VERILOG CODE MOD 5 UPDOWN COUNTER AYNCHRONOUS RESET 
 
module counter_asyn(clk,reset,up_down,count); 
parameter N=5; 
parameter width=3; 
input clk,reset,up_down; 
output reg [width-1:0]count; 
 
always @(posedge clk or negedge reset) 
begin 
if (reset) 
count<=0; 
else if (up_down) 
begin 
if(count==(N-1)) 
count<=0; 
else 
count<=count+1; 
end 
else 
begin 
count<=count-1; 
if(count==0) 
count<=(N-1); 
end 
end 
endmodule 
TESTBENCH FOR MOD 5 UPDOWN COUNTER ASYNCHRONOUS RESET 
 
module counter_tb(); 
parameter N=5,width=3; 
reg clk,reset,up_down; 
wire [width-1:0]count; 
counter_asyn G1(clk,reset,up_down,count); 
initial 
begin 
clk=1'b0; 
forever #10 clk=~clk; 
end 
initial 
begin

---

## SOURCE PAGE 66

#0 clk=0;reset=1; 
#100 reset=0;up_down=1; 
#430 up_down=0; 
end 
initial 
#1000 $finish; 
endmodule 
 
SIMULATION RESULTS: 
Simulation result for mod 5 counter 
 
Simulation result for mod 10 counter

---

## SOURCE PAGE 67

SYNTHESIS RESULTS:

---

## SOURCE PAGE 68

Open Ended Experiment List (Any 1 out of 4) 
 
1. Design and implement 7-segment display. 
2. Design and implement 3-stage pipeline. 
3. Design and implement Vending machine 
4. Design and implement a digital clock to display HH:MM:SS using Verilog

---

## SOURCE PAGE 69

Sample VIVA Question 
1. What does wire refer to? 
It is a physical connection between structural elements that enable Verilog to function. A continuous 
assignment or gate output denotes its value. A wire cannot store value when there is no connection 
between a and b. The Default value of a wire is Z. 
 
2. What is reg in Verilog? 
The reg represents the abstract data storage element. It is also called a register type integer, real and 
real-time. Its value is assigned within an always or an initial statement. The default value of reg is 
X. 
 
3. What are Blocking and non-blocking in Verilog? 
The blocking assignment completes the entire statement before the control goes to the following 
statement. It behaves similarly to older programming languages. It is symbolized as =. 
A non-blocking assignment evaluates the right-hand side for the current time unit and the left-hand 
side later at the end of the time unit. It is symbolized as <=. 
 
4. What is Verilog used for? 
Uses of Verilog 
To model electronic systems 
Designing and verifying digital circuits 
Verification of analog circuits and mixed-signal circuits 
Designing genetic circuits 
 
5. What are the data types in Verilog? 
Data types are used to represent the data storage and transmission elements that are found in digital 
hardware. These are of 2 types NETS and REGISTERS. 
 
6. What is Verilog? 
Verilog is a Hardware Description Language (HDL) used for describing a digital system such as a 
network switch, a microprocessor, a memory, or a flip-flop. Verilog is mainly used to verify analog 
circuits, mixed-signal circuits, and the design of genetic circuits. It is also used in the design and 
verification of digital circuits at the register-transfer level of abstraction.

---

## SOURCE PAGE 70

7. Who is the founder of the Verilog programming language? 
Verilog was introduced by Prabhu Goel, Phil Moorby, Chi-Lai Huang, and Douglas Warmke 
between late 1983 and early 1984. 
8. What is the difference between == and === in Verilog? 
 
 
9. What is the difference between $monitor and $display? 
 
10. What are the main differences between Wire and Reg? 
 
11. What is sensitivity list? 
The sensitivity list indicates that when a change occurs to any one of elements in the list change, 
begin…end statement inside that always block will get executed. 
 
12. What are casex and casez statements used for in Verilog? 
Casez allows matching one case item to multiple case expressions by not taking into consideration 
the Z bit. It is written as Z or ?. 
For a case expression 2’1b0, 2’1b1, 2’1bX, or 2’1bZ will be matched to an item2’1bZ

---

## SOURCE PAGE 71

Whenever comparing the case item and case expression, the don’t care bit (represented by Z or ?) 
will be ignored completely irrespective of its value. 
Casex is absolutely similar to casez with the addition of ‘X’ to the don’t care bit. So here in casex 
‘Z’, ‘?’ and ‘X’ bits are ignored in case item and/or case expression while comparing. 
 
13. What is the difference between Latch And Flip-flop? 
The difference between latches and Flip-flop is that the latches are level triggered and flip-flops are 
edge triggered. In latches level triggered means that the output of the latches changes as we change 
the input and edge triggered means that control signal only changes its state when goes from low to 
high or high to low. 
 
14. Explain the difference between Sequential and Combinational circuits. 
 
 
15. What is the difference between Synchronous and Asynchronous Counters?
