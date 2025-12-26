# Vibe Coding Prompts Collection

> A curated collection of agentic AI prompts for "Vibe Coding" workflows.

This repository shares the reusable **Vibe Coding Prompts** that were originally used to build [Prompthive](https://github.com/jovd83/prompthive). 

These prompts are designed to act as specialized "personas" or "agents" that handle specific aspects of the software development lifecycle—from starting a project and implementing features to rigorous testing and technical reviews. They enforce best practices, consistency, and a high standard of quality ("Vibe") across the codebase.

## 📂 Prompt Collection

The prompts are located in the `prompts/` directory.

| Prompt Name | Description | Version |
| :--- | :--- | :--- |
| **[Start a Vibe Coding Project](prompts/start-a-vibe-coding-project_v2.md)** | **The Genesis Prompt.** defines variables for the vision and features.  Use this to kickstart a new project with a mature, production-ready structure (Design System, Tests, Docs) from day one. | v2 |
| **[Implement New Features](prompts/implement-new-features_v3.md)** | A holistic workflow for adding features. Ensures every feature includes analysis, wireframes, technical docs, code, tests, and user manuals. | v3 |
| **[Change Request Implementation](prompts/change-request-implementation_v2.md)** | **For mature projects.** A controlled process for modifying existing functionality without breaking backward compatibility or traceability. | v2 |
| **[Bug Fix Flow](prompts/bug-fix-flow_v2.md)** | A rigorous Triage → Reproduce → Fix → Verify loop. Focuses on root cause analysis and preventing regressions with test gap analysis. | v2 |
| **[Technical Review](prompts/technical-review_v2.md)** | Acts as a "Ruthless Principal Engineer." Audits code for architectural smells, security risks, and "God Components." Perfect for reviewing AI-generated code. | v2 |
| **[Auto-Refactor Code](prompts/auto-refactor-code_v3.md)** | companion to the Technical Review. Takes the review report and implements the fixes in a single, batched pass focused on DRY and SOLID principles. | v3 |
| **[Unit Testing](prompts/unit-testing_v4.md)** | A "Lead SDET" agent that executes a "Fix-and-Verify" cycle to boost test coverage to >80%, specifically targeting logic-heavy files. | v4 |
| **[Self-Healing Frontend Tests](prompts/selfhealing-frontend-tests_v2.md)** | An autonomous agent that reads Playwright failure reports and attempts to self-heal broken selectors or timeout issues. | v2 |
| **[Usability & A11y Testing](prompts/usability-a11y-testing_v2.md)** | Runs Lighthouse audits to generate detailed HTML reports for Accessibility, SEO, and Best Practices. | v2 |
| **[Update Functional Analysis](prompts/update-functional-analysis_v2.md)** | Reverse-engineers the current codebase to synchronize the `docs/functional analysis/` folder with reality. Good for drift detection. | v2 |
| **[Technical Documentation Suite](prompts/technical-single-source-of-truth-documentation-suite_v3.md)** | Creates a "Single Source of Truth" documentation suite (Architecture, Schemas, Auth flows) with versioned Markdown and Mermaid diagrams. | v3 |

## 🚀 How to Use

1.  **Select a Prompt:** Choose the prompt that matches your current task (e.g., are you starting a project? debugging? refactoring?).
2.  **Copy Content:** Copy the raw markdown content of the prompt.
3.  **Paste & Run:** Paste it into your LLM chat (ChatGPT, Claude, etc.) or Agentic IDE (Cursor, Windsurf).
4.  **Follow Instructions:** Most prompts require you to fill in a placeholder (like `{{User-submitted bug}}` or `[[Features]]`) or run a specific command.

## 🔗 Original Project

These prompts were refined during the development of **Prompthive**. Check it out here:
👉 **[https://github.com/jovd83/prompthive](https://github.com/jovd83/prompthive)**
