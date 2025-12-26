# Technical "Single Source of Truth" documentation suite

> Create a "Single Source of Truth" documentation suite. All files must be versioned, dated, and stored in a structured `docs/` directory.

**Version:** 3 | **Date:** 2025-12-26 | **Author:** jochim
**Tags:** #vibe_coding

---

## Prompt Content
```text
 "Act as a **Staff Technical Writer & Systems Architect**. I need you to generate and synchronize the project documentation with the current codebase (`app/`, `components/`, `prisma/schema.prisma`).

 **The Goal**
 Create a "Single Source of Truth" documentation suite. All files must be versioned, dated, and stored in a structured `docs/` directory.

 **Directory Structure**
 Ensure this structure exists:

   * `README.md` (Project Root)
   * `docs/technical/` (Technical Reference & Architecture)
   * `docs/schemas/` (Database & Data Flow)
   * `docs/diagrams/src/` (Mermaid source files `.mmd`)
   * `docs/diagrams/img/` (Rendered images)
   * `docs/archive/` (Old versions)

 **The Rules (Versioning)**
 Every Markdown file must start with this YAML Frontmatter:

 ```yaml
 ---
 title: [Title]
 version: [x.y.z]
 last_updated: [YYYY-MM-DD]
 author: AI Agent
 ---
 ```

 *If a file already exists, move the old one to `docs/archive/` renamed as `[Name]_v[OldVer]_[Date].md` before writing the new one.*

 **Phase 1: The README (Project Root)**

   * **Action:** Update/Create `README.md`.
   * **Content:**
       * **Badges:** (License, Status).
       * **Project Overview:** High-level summary of what the app does.
       * **Tech Stack:** Next.js, Prisma, SQLite, etc.
       * **Getting Started:** Commands to run dev, build, and test.
       * **Project Structure:** A tree view of key folders.

 **Phase 2: Technical Reference (`docs/technical/Reference.md`)**

   * **Action:** Analyze `app/actions`, `lib/`, and `middleware.ts`.
   * **Content:**
       * **Architecture:** Explain the Server Actions + Service Layer pattern.
       * **Authentication:** Explain the NextAuth flow and session handling.
       * **Key Algorithms:** Explain complex logic (e.g., your recursive Collection tree, or JSON parsing logic).
       * **Security:** Document auth guards, input validation (Zod), and safe practices used.

 **Phase 3: Schema Dictionary (`docs/schemas/Data_Models.md`)**

   * **Action:** Analyze `prisma/schema.prisma` and Zod schemas in `lib/`.
   * **Content:**
       * **ER Diagram:** (See Phase 4).
       * **Model Definitions:** For every Model (User, Prompt, Collection):
           * **Field Table:** Name | Type | Description | Constraints.
           * **Business Logic:** Explain *why* relations exist (e.g., "A Collection references itself to allow infinite nesting").
           * **Zod Validation:** Explain the validation rules applied to this model in the application layer.

 **Phase 4: High-Fidelity Diagrams (The Visuals)**
 Generate Mermaid diagrams for: **1. System Architecture**, **2. Database ERD**, **3. Authentication Flow**.

 **Constraint A: Metadata "Burn-in"**
 You cannot edit pixels, so you must add the metadata inside the Mermaid syntax so it renders as part of the image.

   * *Instruction:* At the top of every `.mmd` file, use a subgraph or title class to display: `Title: [Name] | Ver: [x.y] | Date: [YYYY-MM-DD]`.
   * *Example:*
     ```mermaid
     graph TD
       subgraph Metadata ["Project: Prompt Library | Ver: 1.2 | Date: 2024-12-10"]
         direction TB
         style Metadata fill:#fff,stroke:#000,stroke-width:2px,font-size:16px
       end
       User --> Login
     ```

 **Constraint B: The Rendering Script**
 Create a shell script `docs/render_diagrams.sh` that I can run to generate the images.

   * The command **MUST** produce a white background.
   * The command **MUST** use a scale factor of 4 (for 400% zoom capability/Retina quality).
   * *Script Content:*
     ```bash
     # Install CLI if missing: npm install -g @mermaid-js/mermaid-cli
     # Render commands:
     mmdc -i docs/diagrams/src/architecture.mmd -o docs/diagrams/img/architecture.png -b white -s 4
     mmdc -i docs/diagrams/src/schema.mmd -o docs/diagrams/img/schema.png -b white -s 4
     # (Add lines for all other diagrams you created)
     ```

 **Phase 5: Execution**

 1.  Move old docs to archive.
 2.  Write the Markdown files.
 3.  Write the `.mmd` source files with the "Burn-in" metadata.
 4.  Write the `render_diagrams.sh` script.
-----

### 💡 Pro Tip for Phase 4 (Rendering Images)

The prompt above instructs the AI to create a **Script** (`render_diagrams.sh`) for you. To actually get the PNG images, you will need the Mermaid CLI tool installed on your machine.

Run this once in your terminal:
`npm install -g @mermaid-js/mermaid-cli`

Then, whenever the AI updates your docs, just run:
`sh docs/render_diagrams.sh`

This gives you the best of both worlds: editable text-based diagrams (Mermaid) and distinct image files for reports/presentations.
```

## Metadata
*   **Collection:** Vibe coding
*   **Source:** None
