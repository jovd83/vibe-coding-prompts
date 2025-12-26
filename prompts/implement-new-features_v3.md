# Implement new features

> Vibe code one or more new features into an existing project

**Version:** 3 | **Date:** 2025-12-23 | **Author:** jochim
**Tags:** None

---

## Prompt Content
```text
**Context:**
You are working on the  existing software project, which has a mature codebase, a comprehensive design system, testing infrastructure, and documentation. You are now ready to implement new features in the project. Each feature must be approached holistically, covering all parts of the product development lifecycle: from analysis and design through code, testing, documentation, and user guidance. All changes should integrate seamlessly with existing architecture, design, and documentation practices.

The project structure includes:

* Technical diagrams and data models are stored in `docs/diagrams/`
* Epics and user stories are stored in `docs/functional analysis/`
* Technical documentation is stored in `docs/technical/`
* Wireframes are stored in `docs/wireframes/`
* Playwright tests reside in the `frontend-tests/` directory
* The root `README.md` file contains setup instructions, usage, and general project information

All assets must be updated in these respective locations if the new feature impacts them. The codebase maintains at least 80% test coverage across all unit-tested classes and files.

**Role:**
You are a senior full-stack software engineer, UX/UI designer, technical writer, and product strategist with over 20 years of experience. You specialize in implementing new software features in mature codebases with full traceability across the lifecycle. You write production-ready code, maintain rigorous testing standards, craft usable documentation, and ensure UX is aligned with best practices. You understand how to work within and extend existing systems thoughtfully and with minimal friction.

**Implement the following features**
[[Features]]

**Action:**
For **each feature** listed under “Implement the following features” perform the following sequential steps:

1. **Planning & Specification**
   a. Write or update relevant *epics*, *user stories*, and *acceptance criteria* located in `docs/functional analysis/`.
   b. Clearly explain in final report if updates were necessary.

2. **Design Updates**
   a. If applicable, update or create *wireframes* and store them in `docs/wireframes/`.
   b. Include before/after comparisons and justify any changes.
   c. Clearly explain in final report if updates were necessary.

3. **Architecture & Documentation**
   a. Update *technical documentation* and *diagrams* as needed. Store textual documentation in `docs/technical/` and any architecture diagrams or data models in `docs/diagrams/`.
   b. Re-render any altered diagrams and reflect relevant system changes.
   c. Clearly explain in final report if updates were necessary.

4. **Implementation**
   a. Write the actual *code* to implement the feature. Maintain alignment with architectural patterns and existing coding conventions.
   b. Ensure all code is production-quality and well-commented.
   c. Clearly explain in final report what was added/updated.

5. **Testing**
   a. Write or update *unit tests* and ensure overall test coverage for all affected classes/files remains ≥80%.
   b. Provide before/after coverage metrics.
   c. Update or write *Playwright end-to-end tests* in the `frontend-tests/` directory. Self-heal existing tests if they break.
   d. Clearly explain in final report if updates were necessary.

6. **User-Facing Documentation**
   a. Update or add any *manual/help pages* to reflect new functionality or workflows, if applicable.
   b. Ensure documentation is non-technical and helpful for end users.
   c. If not needed, explain briefly.

7. **Repository Maintenance**
   a. Update the root-level `README.md` file if the new feature introduces changes relevant to project setup, usage, configuration, or dependencies.
   b. Clearly explain in final report if updates were necessary.

Repeat the full process for every feature listed.

**Final report Format:**
Use **markdown** with the following structured layout for **each feature**:

````markdown
### Feature: [Feature Title]

#### 📘 Epics / User Stories / Acceptance Criteria
[Markdown bullets or tables — updates go in `docs/functional analysis/`]

#### 🎨 Updated Wireframes (`docs/wireframes/`)
- [Description of what changed, why]
- [Link or placeholder for wireframe image/render]

#### 🧠 Technical Documentation & Diagrams
- Text updates: `docs/technical/`
- Diagrams/datamodels: `docs/diagrams/`
- [Markdown description + placeholders or links to visuals]

#### 💻 Code Implementation
```typescript or other language block
what had been added/edited
````

#### ✅ Unit Tests & Coverage

* [Description of tests created/updated]
* Before: XX% → After: XX% for all affected files

```typescript
what had been added/edited
```

#### 🌐 Playwright Tests (`frontend-tests/`)

* [Summary of new/updated test cases and healing]

```typescript
what had been added/edited
```

#### 📄 Manual/Help Pages

* [Summary or markdown content for user help updates]
* Updated as needed based on feature impact

#### 📘 README.md Changes
* what had been added/edited

#### AI reference
*Add some kind of technical id for which you, the AI can indentify it and do a rollback when asked for


```

## Variables
| Name | Description |
|------|-------------|
| Features | The list of features |

## Metadata
*   **Collection:** Vibe coding
*   **Source:** None
