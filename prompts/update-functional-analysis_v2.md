# Update functional analysis

> No description provided.

**Version:** 2 | **Date:** 2025-12-23 | **Author:** jochim
**Tags:** None

---

## Prompt Content
```text
> "Act as a **Senior Product Owner & Business Analyst**. I need you to synchronize my `functional analysis` folder with the current state of my codebase (`app/`, `components/`, `prisma/schema.prisma`).
>
> **The Goal**
> Reverse-engineer the code into updated documentation. The documentation must reflect the *exact* reality of the fields, options, and validation rules in the code.
>
> **The Rules**
>
> 1.  **Source of Truth:** The Code (Prisma Schema + React Components).
> 2.  **Versioning:** Move obsolete analysis files to `functional analysis/obsolete/` with a timestamped name (e.g., `Login_Epic_ARCHIVED_2024-12-10.md`).
> 3.  **Wireframes:** The wireframes are PNGs created in 'Nano Banana Pro'. You cannot generate these. Instead, you must **define the specification** for the wireframe and insert a standard image placeholder.
>
> **Phase 1: The Purge (Version Control)**
>
> 1.  Scan the current `functional analysis` folder.
> 2.  Compare the documented features against the actual `app/` routes.
> 3.  If a feature has changed significantly or no longer exists, move the old `.md` file to the `obsolete` folder before creating the new one.
>
> **Phase 2: Content Generation (The Analysis)**
> Create or Update the Markdown file for each Epic (e.g., `Epic_Prompt_Management.md`). Use the following **Strict Template**:
>
> ```markdown
> ---
> title: [Epic Name]
> version: [x.y]
> last_updated: [YYYY-MM-DD]
> status: [Draft/Live]
> ---
> ```

> # Epic: [Name]

> ## User Story: [Story Title]
>
> **As a** [Role]
> **I want to** [Action]
> **So that** [Benefit]

> ### 1\. Description
>
> [Natural Language Paragraph]: Explain the purpose of this story in plain English. Describe the user flow, the "why", and the context.

> ### 2\. Technical Scope & Fields
>
> *Derived from Code:*
>
>   * **Field Name**: [Type] - [Constraints (e.g., "Required, Max 50 chars")]
>   * **Dropdown Options**: [List exact options found in code]
>   * **Default Values**: [Value]

> ### 3\. Acceptance Criteria (AC)
>
> *Derived from Zod Schemas & Logic:*
>
>   * [ ] Verify that [Field X] triggers an error if [Condition].
>   * [ ] Verify that clicking [Button Y] calls [Server Action Z].
>   * [ ] Verify that the user is redirected to [Route] on success.

> ### 4\. UI Wireframe Specification
>
> **Image Source:** `assets/wireframes/[naming_convention].png`

> **[MISSING IMAGE PLACEHOLDER]**
> *If the image above does not exist, create it in Nano Banana Pro with these requirements:*
>
>   * **Layout:** [e.g., Two-column layout, Sidebar on left]
>   * **Key Elements:** [List buttons/inputs that MUST be visible]
>   * **State:** [e.g., "Show the form in the 'Loading' state"]
>
> <!-- end list -->
>
> ```
> 
> **Phase 3: Execution Steps**

> 1.  Analyze `schema.prisma` to get the data structure.
> 2.  Analyze `app/[route]/page.tsx` and related components to get the UI fields and Validation errors.
> 3.  Perform the file moves (Obsolete).
> 4.  Generate the new Analysis files.

> **Phase 4: Final Report**
> Create a summary named `Analysis_Sync_Log.md`:

>   * **Updated Epics:** [List]
>   * **Archived Files:** [List]
>   * **Missing Wireframes:** List the file paths of PNGs that need to be created in Nano Banana Pro based on your new specifications.

> **Start by scanning the `app` folder to identify the current features.**"
> ```
```

## Metadata
*   **Collection:** Vibe coding
*   **Source:** None
