# Start a vibe coding project

> Start a vibe codign project from scratch by defining what its features

**Version:** 2 | **Date:** 2025-12-26 | **Author:** jochim
**Tags:** #vibe_coding

---

## Prompt Content
```text
**Context:**
You are starting a **brand new software project** from the ground up. This project will be built with a mature, production-ready mindset from day one, including a comprehensive design system, testing infrastructure, documentation, and architecture. You will create the foundational structure and implement the initial features holistically, covering all parts of the product development lifecycle: from analysis and design through code, testing, documentation, and user guidance.

The project structure will include:

* Technical diagrams and data models stored in `docs/diagrams/` (as both source code and rendered images)
* Epics and user stories stored in `docs/functional analysis/`
* Technical documentation stored in `docs/technical/`
* Wireframes stored in `docs/wireframes/` (as both source code and rendered images)
* Playwright tests in the `frontend-tests/` directory
* A root `README.md` file containing setup instructions, usage, and general project information

All assets must be created in these respective locations. The codebase will maintain at least 80% test coverage across all unit-tested classes and files from the start.

---

**Role:**
You are a senior full-stack software engineer, UX/UI designer, technical writer, and product strategist with over 20 years of experience. You specialize in creating production-ready software projects from scratch with full traceability across the lifecycle. You write clean, maintainable code, maintain rigorous testing standards, craft usable documentation, and ensure UX is aligned with best practices.

---

**Project Vision & Features**
[[Describe the project vision, core purpose, and initial feature set here]]

---

**Action:**
For **the entire project** and **each feature** listed under "Project Vision & Features," perform the following sequential steps:

### 0. **Project Foundation & Setup**
   a. Define the *tech stack* (frontend, backend, database, testing tools, etc.).
   b. Create the *project folder structure* following the layout described above.
   c. Initialize configuration files (e.g., `package.json`, `tsconfig.json`, `.env.example`, etc.).
   d. Set up *CI/CD pipeline basics* (GitHub Actions, linting, formatting).
   e. Create a *design system foundation* (colors, typography, spacing, component library structure).
   f. Document all decisions in `docs/technical/project-setup.md`.

### 1. **Planning & Specification**
   a. Write *epics*, *user stories*, and *acceptance criteria* for all initial features in `docs/functional analysis/`.
   b. Clearly explain the rationale behind each epic and story.

### 2. **Design Creation**
   a. Create *wireframes* for all major user flows using HTML/SVG and store source code in `docs/wireframes/`.
   b. **Render each wireframe as an image** (PNG/SVG format) with the naming convention:
      - `wireframe-[feature-name]-[screen-name]-YYYYMMDD-HHMMSS.png`
      - Example: `wireframe-user-login-main-screen-20250126-143022.png`
   c. Include a timestamp watermark on each rendered image (bottom-right corner).
   d. Document design decisions, user flows, and information architecture.
   e. Include accessibility and responsive design considerations.

### 3. **Architecture & Documentation**
   a. Write comprehensive *technical documentation* in `docs/technical/` covering:
      - System architecture
      - Data models
      - API design (if applicable)
      - Security considerations
      - Deployment strategy
   b. Create *architecture diagrams* and *data models* in `docs/diagrams/` using Mermaid, PlantUML, or similar.
   c. **Render each diagram as an image** (PNG/SVG format) with the naming convention:
      - `diagram-[diagram-type]-[description]-YYYYMMDD-HHMMSS.png`
      - Example: `diagram-architecture-system-overview-20250126-143022.png`
      - Example: `diagram-datamodel-user-entity-20250126-143530.png`
   d. Include a timestamp watermark on each rendered image (bottom-right corner).
   e. Store both the source code (`.mmd`, `.puml`, etc.) and rendered images in `docs/diagrams/`.

### 4. **Implementation**
   a. Write the actual *code* to implement each feature. Follow best practices and establish coding conventions.
   b. Ensure all code is production-quality, well-commented, and modular.
   c. Implement the design system and reusable components.
   d. Set up database schemas, migrations, and seed data if applicable.

### 5. **Testing**
   a. Write *unit tests* for all classes/functions and ensure ≥80% test coverage from the start.
   b. Provide coverage metrics for each module.
   c. Write *Playwright end-to-end tests* in the `frontend-tests/` directory covering critical user flows.
   d. Document testing strategy in `docs/technical/testing-strategy.md`.

### 6. **User-Facing Documentation**
   a. Create *user manual/help pages* explaining how to use the application.
   b. Write onboarding guides and FAQs if applicable.
   c. Ensure documentation is non-technical and helpful for end users.

### 7. **Repository Maintenance**
   a. Write a comprehensive root-level `README.md` file including:
      - Project overview and purpose
      - Prerequisites and dependencies
      - Installation and setup instructions
      - Usage examples
      - Contributing guidelines
      - License information
   b. Add a `CHANGELOG.md` to track project versions.
   c. Include a `CONTRIBUTING.md` if the project is open-source.

---

**Final Report Format:**
Use **markdown** with the following structured layout:

````markdown
## 🚀 Project: [Project Name]

### 📋 Project Overview
[Brief description of the project vision, goals, and target users]

---

### 🏗️ Project Foundation & Setup

#### Tech Stack
- **Frontend:** [e.g., React, Vue, Svelte]
- **Backend:** [e.g., Node.js, Python, Go]
- **Database:** [e.g., PostgreSQL, MongoDB]
- **Testing:** [e.g., Jest, Playwright, Vitest]
- **Deployment:** [e.g., Vercel, AWS, Docker]

#### Folder Structure
```plaintext
project-root/
├── docs/
│   ├── diagrams/           # Source files (.mmd, .puml) + rendered images (.png, .svg)
│   ├── functional analysis/
│   ├── technical/
│   └── wireframes/         # Source files (HTML/SVG) + rendered images (.png, .svg)
├── frontend-tests/
├── src/
├── README.md
└── ...
```

#### Design System Foundation
- [Colors, typography, spacing, component patterns]

---

### Feature: [Feature Title]

#### 📘 Epics / User Stories / Acceptance Criteria
[Markdown bullets or tables — created in `docs/functional analysis/`]

#### 🎨 Wireframes (`docs/wireframes/`)
- **Source:** `wireframe-[feature]-[screen]-source.html`
- **Rendered:** `wireframe-[feature]-[screen]-YYYYMMDD-HHMMSS.png`
- [Description of screens/flows created]

**Rendered Wireframe:**
![Wireframe Name](docs/wireframes/wireframe-[feature]-[screen]-YYYYMMDD-HHMMSS.png)

```html
<!-- Wireframe source code -->
```

#### 🧠 Technical Documentation & Diagrams

**Architecture Diagram:**
- **Source:** `diagram-architecture-[name]-source.mmd`
- **Rendered:** `diagram-architecture-[name]-YYYYMMDD-HHMMSS.png`

![Architecture Diagram](docs/diagrams/diagram-architecture-[name]-YYYYMMDD-HHMMSS.png)

```mermaid
<!-- Diagram source code -->
```

**Data Model:**
- **Source:** `diagram-datamodel-[name]-source.mmd`
- **Rendered:** `diagram-datamodel-[name]-YYYYMMDD-HHMMSS.png`

![Data Model](docs/diagrams/diagram-datamodel-[name]-YYYYMMDD-HHMMSS.png)

```mermaid
<!-- Data model source code -->
```

#### 💻 Code Implementation
```typescript
// Code blocks showing what was created
```

#### ✅ Unit Tests & Coverage

* [Description of tests created]
* Coverage: XX% for all files

```typescript
// Test code
```

#### 🌐 Playwright Tests (`frontend-tests/`)

* [Summary of test cases created]

```typescript
// E2E test code
```

#### 📄 User Manual/Help Pages

* [Summary or markdown content for user help]

#### 📘 README.md Content
```markdown
# Project Name
[Full README content]
```

#### 🔖 AI Reference ID
`PROJECT_INIT_[TIMESTAMP]_[FEATURE_SLUG]`

---

[Repeat for each feature]

---

### 🎯 Next Steps
[Optional: Suggested follow-up features, improvements, or technical debt to address]
````

---

**Image Rendering Requirements:**

1. **Wireframes:**
   - Create interactive HTML/SVG wireframes as source
   - Render to PNG/SVG with timestamp watermark (bottom-right)
   - Naming: `wireframe-[feature-name]-[screen-name]-YYYYMMDD-HHMMSS.png`
   - Store both source and rendered versions in `docs/wireframes/`

2. **Diagrams:**
   - Create diagrams using Mermaid, PlantUML, or similar
   - Render to PNG/SVG with timestamp watermark (bottom-right)
   - Naming: `diagram-[type]-[description]-YYYYMMDD-HHMMSS.png`
   - Store both source (.mmd, .puml) and rendered versions in `docs/diagrams/`

3. **Timestamp Format:**
   - Use ISO-like format: `YYYYMMDD-HHMMSS`
   - Include on image as watermark for traceability

4. **Version Control:**
   - Keep previous versions when updating
   - New timestamps create new files (no overwriting)
   - This maintains a visual history of design evolution

---

**Notes:**
- Start with the **simplest viable version** of each feature and iterate.
- Prioritize **user experience** and **maintainability** from day one.
- Ensure all documentation is kept **up to date** as the project evolves.
- Use **semantic versioning** and maintain a changelog.
- **All wireframes and diagrams must be rendered as images** with proper naming and timestamps.
```

## Variables
| Name | Description |
|------|-------------|
| Describe the project vision, core purpose, and initial feature set here |  |

## Metadata
*   **Collection:** Vibe coding
*   **Source:** None
