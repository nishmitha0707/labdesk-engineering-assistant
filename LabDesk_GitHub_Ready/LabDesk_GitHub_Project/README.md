# LabDesk — Engineering Lab & Programming Assistant

LabDesk is a Flowise Agentflow project for engineering students. It routes student questions to focused helpers for lab experiments, programming, viva/revision, and safety/scope. It also includes a retrieval path for the DLD, DSA, and DBMS lab manuals and a validated Ohm's-law calculator tool.

## Repository contents

- `flowise/LabDesk_Agentflow.json` — exported Flowise Agentflow JSON.
- `knowledge-base/*.md` — Markdown knowledge-base documents for ingestion into a Flowise Document Store.
- `knowledge-base/source-manuals/` — original lab manuals supplied as source material.
- `custom-tool/` — JavaScript calculator and its input schema.
- `evaluation/test_cases.csv` — 30 test prompts for evaluation.

## Import and configure

1. Start your Flowise instance and open **Agentflows**.
2. Import `flowise/LabDesk_Agentflow.json`.
3. Re-select your own Gemini credentials on the relevant LLM and embedding nodes. Credentials and API keys are intentionally not included in this repository.
4. Create a Document Store named `LabDesk-KB`.
5. Add the three `.md` files from `knowledge-base/` using the Text File loader and a Recursive Character Text Splitter.
6. Configure an embedding provider and vector store. Use the same embedding model and vector dimensions for ingestion and retrieval. Upsert only after confirming the embedding provider returns non-empty vectors.
7. Configure the retriever node to use the populated Document Store.
8. Register the custom calculator separately in Flowise Tools if your Flowise version does not import custom tools with the Agentflow. Use `custom-tool/tool_schema.json` and `custom-tool/ohms_calculator.js`.
9. Run the cases in `evaluation/test_cases.csv` and record observed results before presenting the project.

## Important configuration notes

- The exported JSON does not contain API keys. Add your own credentials after importing.
- The vector database itself is not included. Configure your own Qdrant instance or another supported vector store.
- Flowise node availability and import behavior can vary by version. Verify node credentials, Document Store selection, and tool registration in your local instance.
- The CSV contains suggested evaluation prompts; it is not evidence that all tests have passed.

## Suggested demo flow

1. Ask for a DLD experiment procedure.
2. Ask a C or Python debugging question.
3. Ask for DBMS SQL help based on the uploaded manual.
4. Ask a viva question and request a short quiz.
5. Test the Ohm's-law calculator with two known values and a requested target.

## Security

Never commit API keys, credentials, `.env` files, database files, or private Flowise exports containing secrets. Review the exported JSON before publishing it.
