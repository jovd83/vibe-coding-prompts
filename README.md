# Vibe Coding Prompts Collection

[![Version](https://img.shields.io/badge/version-1.2.0-blue.svg)](https://github.com/jovd83/vibe-coding-prompts)
[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=flat&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/jovd83)

> A curated collection of agentic AI prompts for "Vibe Coding" workflows.

This repository shares the reusable **Vibe Coding Prompts** that were originally used to build [Prompthive](https://github.com/jovd83/prompthive). 

These prompts are designed to act as specialized "personas" or "agents" that handle specific aspects of the software development lifecycle—from starting a project and implementing features to rigorous testing and technical reviews. They enforce best practices, consistency, and a high standard of quality ("Vibe") across the codebase.

## 📂 Prompt Collection

The prompts are located in the `prompts/` directory.

### Project Initialization
| Prompt Name | Description | Version |
| :--- | :--- | :--- |
| **[Start a vibe coding project](prompts/start-a-vibe-coding-project_v2.md)** | Start a vibe codign project from scratch by defining what its features | v2 |
| **[Start a Vibe Reverse Engineering Project](prompts/start-a-vibe-reverse-engineering-project_v1.md)** | A structured framework for transforming legacy codebases into modern software through forensic analysis, rigorous auditing, and "before and after" visualization.  It enforces a production-grade workflow that reverse-engineers business logic and refactors code while strictly preserving the original intent through safety-net testing | v1 |

### Development & Changes
| Prompt Name | Description | Version |
| :--- | :--- | :--- |
| **[Bug fix flow](prompts/bug-fix-flow_v4.md)** | Let the agent fix a bug | v4 |
| **[Change Request Implementation](prompts/change-request-implementation_v3.md)** | This prompt is designed for implementing change requests in mature software projects where the primary goal is adapting existing behavior rather than introducing new functionality.  It guides the AI through a controlled, impact-driven workflow that starts with functional and technical impact analysis and continues through analysis updates, documentation alignment, code modifications, and reinforced testing. The prompt emphasizes minimal, intentional change, backward compatibility where required, and full lifecycle traceability from change request to implementation.  Unlike new-feature prompts, this template focuses on:  Updating existing epics, user stories, and acceptance criteria rather than creating new ones  Identifying what remains unchanged versus what must be adapted or deprecated  Adjusting documentation, diagrams, and wireframes only when genuinely impacted  Strengthening test coverage to prevent regression and explain why previous tests failed or missed the issue  Keeping repository changes clean, justified, and auditable  The result is a well-documented, test-protected change that integrates seamlessly into an established codebase while preserving architectural integrity, functional intent, and long-term maintainability. | v3 |
| **[Implement new features](prompts/implement-new-features_v5.md)** | Vibe code one or more new features into an existing project | v5 |

### QA & Testing
| Prompt Name | Description | Version |
| :--- | :--- | :--- |
| **[Autonomous Frontend Coverage, Discovery & Initialization Agent](prompts/autonomous-frontend-coverage-discovery-initialization-agent_v3.md)** | This prompt directs an AI agent to dynamically discover a project's source and test folders to map out existing implementation versus test coverage. It identifies missing tests and autonomously writes them, using a user-specified library if no suite currently exists. Finally, the agent diagnoses and fixes encountered bugs in both the tests and source code, providing a detailed executive report of all healing actions taken. | v3 |
| **[Run & heal existing frontend-tests](prompts/run-heal-existing-frontend-tests_v4.md)** | Exceute existing frontend tests & fix problems | v4 |
| **[Run, examine & improve existing unit tests](prompts/run-examine-improve-existing-unit-tests_v5.md)** | examine existing unit tests, add missing, execute and calculate coverage | v5 |
| **[Unit Test Execution & Reporting](prompts/unit-test-execution-reporting_v1.md)** | auto-detect unit-test-framework, search all test files, execute full suite, and report with prioritized actions | v1 |
| **[Usability & a11y testing](prompts/usability-a11y-testing_v2.md)** |  | v2 |

### Review & Refactoring
| Prompt Name | Description | Version |
| :--- | :--- | :--- |
| **[Auto-refactor code](prompts/auto-refactor-code_v3.md)** | A pormpt for regfactoring code based on a technical review | v3 |
| **[Gap Analysis & Functional Extension](prompts/gap-analysis-functional-extension_v1.md)** | Analyse functional analysis of a project and propose extra features | v1 |
| **[Performance & Robustness Audit](prompts/performance-robustness-audit_v1.md)** | This technical review prompt acts as a deep-tissue diagnostic tool designed to transition a "vibe-coded" prototype into a high-scale, resilient system. It systematically hunts for "invisible debt"—such as memory leaks, race conditions, and cascading failures—that standard functional testing often misses. The resulting "Bottleneck Table" provides a prioritized roadmap to ensure the application remains performant and stable under real-world production stress. | v1 |
| **[Security & Hardening Audit](prompts/security-hardening-audit_v1.md)** | This technical review prompt functions as an automated security auditor designed to identify critical vulnerabilities before they are exploited in production. It meticulously scans for "Zero Trust" violations, ranging from hardcoded secrets and injection flaws to broken authentication patterns. The final report delivers a prioritized "Vulnerability Table" that maps specific code risks to actionable remediation steps for a battle-hardened system. | v1 |
| **[Technical review](prompts/technical-review_v4.md)** | Do a technical review of a code-project | v4 |
| **[UX/UI Design & Wireframe designer](prompts/uxui-design-wireframe-designer_v1.md)** | Design UX/UI & wireframes for a given project | v1 |

### Documentation
| Prompt Name | Description | Version |
| :--- | :--- | :--- |
| **[Technical "Single Source of Truth" documentation suite](prompts/technical-single-source-of-truth-documentation-suite_v3.md)** | Create a "Single Source of Truth" documentation suite. All files must be versioned, dated, and stored in a structured `docs/` directory. | v3 |
| **[Update functional analysis](prompts/update-functional-analysis_v2.md)** |  | v2 |
| **[Video to documentation prompt](prompts/video-to-documentation-prompt_v1.md)** | Use the multimodal capabilities to transform a video into written documentation | v1 |

### Release & Deployment
| Prompt Name | Description | Version |
| :--- | :--- | :--- |
| **[Commit/Push to github](prompts/commitpush-to-github_v1.md)** | Safely verify changelog status, commit changes, push to GitHub, and prepare the next release cycle. | v1 |
| **[Release Cycle Finalizer (Merge & Tag)](prompts/release-cycle-finalizer-merge-tag_v1.md)** | Safely closes the release loop by merging the temporary "Major Release" branch back into the main codebase. | v1 |
| **[Split from master (new branch)](prompts/split-from-master-new-branch_v3.md)** | This prompt acts as an autonomous Release Manager for "Vibe Coding" projects. It automates the transition from one major version to the next: 1. Determine Version Numbers 2. Git Operations (Freeze & Branch) 3. Apply Updates (On the new branch) | v3 |

### Skill management
| Prompt Name | Description | Version |
| :--- | :--- | :--- |
| **[AgentSkills.io Scaffold Prompt](prompts/agentskillsio-scaffold-prompt_v4.md)** | Generates standard-compliant AI agent skills (SKILL.md, references, scripts, assets). Uses Chain-of-Thought to research best practices before generating context-optimized, deterministic agent instructions. | v4 |
| **[Audit & Refactor Agent Skills](prompts/audit-refactor-agent-skills_v1.md)** | Use this prompt to review an existing agent skill. It forces the LLM to search for the latest architectural and topic-specific anti-patterns, grading your skill and providing a list of isolated enhancements you can immediately execute in a Chain-of-Thought session. | v1 |
| **[Harness Engineering Analysis](prompts/harness-engineering-analysis_v2.md)** | Generate a comprehensive Harness Engineering Analysis report for my agent ecosystem. | v2 |
| **[Let Codex improve Agentskills](prompts/let-codex-improve-agentskills_v6.md)** | Let Codex improve the Agentskills defenitions | v6 |

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
