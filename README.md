# Vibe Coding Prompts Collection

> A curated collection of agentic AI prompts for "Vibe Coding" workflows.

This repository shares the reusable **Vibe Coding Prompts** that were originally used to build [Prompthive](https://github.com/jovd83/prompthive). 

These prompts are designed to act as specialized "personas" or "agents" that handle specific aspects of the software development lifecycle—from starting a project and implementing features to rigorous testing and technical reviews. They enforce best practices, consistency, and a high standard of quality ("Vibe") across the codebase.

## 📂 Prompt Collection

The prompts are located in the `prompts/` directory.

### Project Initialization
| Prompt Name | Description | Version |
| :--- | :--- | :--- |
| **[Start a Vibe Coding Project](prompts/start-a-vibe-coding-project_v2.md)** | **The Genesis Prompt.** defines variables for the vision and features.  Use this to kickstart a new project with a mature, production-ready structure (Design System, Tests, Docs) from day one. | v2 |
| **[Start a Vibe Reverse Engineering Project](prompts/start-a-vibe-reverse-engineering-project_v1.md)** | **Legacy Code Modernization.** A structured framework for transforming legacy codebases through forensic analysis, rigorous auditing, and "before and after" visualization. | v1 |

### Development & Changes
| Prompt Name | Description | Version |
| :--- | :--- | :--- |
| **[Implement New Features](prompts/implement-new-features_v4.md)** | A holistic workflow for adding features. Ensures every feature includes analysis, wireframes, technical docs, code, tests, and user manuals. | v4 |
| **[Change Request Implementation](prompts/change-request-implementation_v3.md)** | **For mature projects.** A controlled process for modifying existing functionality without breaking backward compatibility or traceability. | v3 |
| **[Bug Fix Flow](prompts/bug-fix-flow_v3.md)** | A rigorous Triage → Reproduce → Fix → Verify loop. Focuses on root cause analysis and preventing regressions with test gap analysis. | v3 |

### QA & Testing
| Prompt Name | Description | Version |
| :--- | :--- | :--- |
| **[Unit Testing](prompts/unit-testing_v4.md)** | A "Lead SDET" agent that executes a "Fix-and-Verify" cycle to boost test coverage to >80%, specifically targeting logic-heavy files. | v4 |
| **[Self-Healing Frontend Tests](prompts/selfhealing-frontend-tests_v2.md)** | An autonomous agent that reads Playwright failure reports and attempts to self-heal broken selectors or timeout issues. | v2 |
| **[Usability & A11y Testing](prompts/usability-a11y-testing_v2.md)** | Runs Lighthouse audits to generate detailed HTML reports for Accessibility, SEO, and Best Practices. | v2 |

### Review & Refactoring
| Prompt Name | Description | Version |
| :--- | :--- | :--- |
| **[Technical Review](prompts/technical-review_v3.md)** | Acts as a "Ruthless Principal Engineer." Audits code for architectural smells, security risks, and "God Components." Perfect for reviewing AI-generated code. | v3 |
| **[Auto-Refactor Code](prompts/auto-refactor-code_v3.md)** | companion to the Technical Review. Takes the review report and implements the fixes in a single, batched pass focused on DRY and SOLID principles. | v3 |

### Documentation
| Prompt Name | Description | Version |
| :--- | :--- | :--- |
| **[Technical Documentation Suite](prompts/technical-single-source-of-truth-documentation-suite_v3.md)** | Creates a "Single Source of Truth" documentation suite (Architecture, Schemas, Auth flows) with versioned Markdown and Mermaid diagrams. | v3 |
| **[Update Functional Analysis](prompts/update-functional-analysis_v2.md)** | Reverse-engineers the current codebase to synchronize the `docs/functional analysis/` folder with reality. Good for drift detection. | v2 |

## Release & Deployment
| Prompt Name | Description | Version |
| :--- | :--- | :--- |
| **[Commit & Push to GitHub](prompts/commit-push-to-github_v1.md)** | Safely verify changelog status, commit changes, push to GitHub, and prepare the next release cycle. | v1 |
| **[Smart Major Release Orchestrator](prompts/smart-major-release-orchestrator-split-from-master_v2.md)** | **Release Manager.** Automates the transition from one major version to the next: Determine Version, Git Operations, Apply Updates. | v2 |
| **[Release Cycle Finalizer](prompts/release-cycle-finalizer-merge-tag_v1.md)** | **Merge & Tag.** Safely closes the release loop by merging the temporary "Major Release" branch back into the main codebase. | v1 |

## 🚀 How to Use

1.  **Select a Prompt:** Choose the prompt that matches your current task (e.g., are you starting a project? debugging? refactoring?).
2.  **Copy Content:** Copy the raw markdown content of the prompt.
3.  **Paste & Run:** Paste it into your LLM chat (ChatGPT, Claude, etc.) or Agentic IDE (Cursor, Windsurf).
4.  **Follow Instructions:** Most prompts require you to fill in a placeholder (like `{{User-submitted bug}}` or `[[Features]]`) or run a specific command.

## 📦 JSON Import (Prompthive)

You can also import the full prompt collection directly into [Prompthive](https://github.com/jovd83/prompthive) using the JSON export file:

*   **File:** [`prompthive_json/vibe_coding_backup.json`](prompthive_json/vibe_coding_backup.json)
*   **Usage:** Go to your Prompthive settings/import area and upload this file to restore all prompts, collections, and tags instantly.

## 🔗 Original Project

These prompts were refined during the development of **Prompthive**. Check it out here:
👉 **[https://github.com/jovd83/prompthive](https://github.com/jovd83/prompthive)**
