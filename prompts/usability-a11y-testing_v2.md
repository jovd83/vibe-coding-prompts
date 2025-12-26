# Usability & a11y testing

> No description provided.

**Version:** 2 | **Date:** 2025-12-23 | **Author:** jochim
**Tags:** None

---

## Prompt Content
```text
> "Act as a **Lead Accessibility (A11y) & QA Engineer**. I need you to perform a comprehensive audit of my Next.js application using **Lighthouse (via npx)**.
>
> **The Goal**
> Generate detailed HTML reports for Usability (Best Practices, SEO) and Accessibility.
>
> **The Context**
>
>   * **Target:** Localhost (Assumed port 3000).
>   * **Tools:** `npx lighthouse` (Do not install globally, use npx).
>   * **Output Location:** A folder named `usability a11y report`.
>
> **Phase 1: Setup & Safety**
>
> 1.  **Check Directory:** Ensure the folder `usability a11y report` exists. If not, create it.
> 2.  **Route Discovery:** Scan my `app/` folder to identify the 3 most critical pages (e.g., Landing Page, Login, and one Dashboard/Feature page).
> 3.  **Server Check:**
>       * *Instruction:* Check if `localhost:3000` is responding.
>       * *Contingency:* If the server is NOT running, **stop and ask me** to run `npm run dev` or `npm start` in a separate terminal. Do not try to start it yourself (it blocks your process).
>
> **Phase 2: Execution (The Audit)**
> Once you confirm the server is up, run `npx lighthouse` for each identified route. Use the following naming convention and flags:
>
>   * **Command Logic:**
>     ```bash
>     npx lighthouse <URL> --output html --output-path "./usability a11y report/<PageName>_<Timestamp>.html" --view --only-categories=accessibility,best-practices,seo
>     ```
>   * *Note:* Replace `<PageName>` with the route name (e.g., `Dashboard`) and `<Timestamp>` with the current time.
>   * *Note:* The `--view` flag might try to open a browser window. If you are running in a headless environment (like Cursor), remove the `--view` flag.
>
> **Phase 3: Static Code Analysis (Axe)**
> While the dynamic audit runs, perform a static check on the code itself:
>
> 1.  Scan my `components/` folder for common A11y anti-patterns:
>       * `onClick` events on `div` or `span` elements (should be `<button>`).
>       * Images missing `alt` tags.
>       * Inputs missing `aria-label` or associated `<label>`.
>
> **Phase 4: The Summary Report**
> After generating the HTML files, create a summary markdown file in the same folder named `Audit_Summary_Log.md`.
>
> **Content:**
>
>   * **Routes Audited:** [List of URLs]
>   * **Report Location:** [Path to HTML files]
>   * **Static Analysis Findings:** List any "code smells" you found in Phase 3 (e.g., "Found non-interactive div with click handler in `Sidebar.tsx`").
>
> **Start by identifying the routes you plan to test and checking if the output folder exists.**"

```

## Metadata
*   **Collection:** Vibe coding
*   **Source:** None
