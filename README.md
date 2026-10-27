<div align="center"> 
<br> 
<br>
<img src="./src/assets/icons/ic-logo-badge.svg" height="140" />
<h3> Slash Admin </h3>
  <p>
    <p style="font-size: 14px">
      Slash Admin is a modern admin dashboard template built with React 19, Vite, shadcn/ui, and TypeScript. It is designed to help developers quickly create powerful admin management systems.
    </p>
    <br />
    <br />
    <a href="https://admin.slashspaces.com/">Preview</a>
    ·
    <a href="https://discord.gg/fXemAXVNDa">Discord</a>
    ·
    <a href="https://docs-admin.slashspaces.com/">Document</a>
    <br />
    <br />
    <a href="https://trendshift.io/repositories/6387" target="_blank"><img src="https://trendshift.io/api/badge/repositories/6387" alt="d3george%2Fslash-admin | Trendshift" style="width: 250px; height: 55px;" width="250" height="55"/></a>
</div>

**English** | [中文](./README.zh-CN.md)

## Sponsor

<div style="display: flex; gap: 50px"> 
  <img style="width:300px" src="https://d3george.github.io/github-static/pay/weixin.jpg" >
  <img style="width:300px" src="https://d3george.github.io/github-static/pay/buymeacoffee.png" />
</div>

## Preview

- https://admin.slashspaces.com/

| ![login.png](https://d3george.github.io/github-static/slash-admin/sa-web-light.jpeg)       | ![login_dark.png](https://d3george.github.io/github-static/slash-admin/sa-web-dark.jpeg)   |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| ![analysis.png](https://d3george.github.io/github-static/slash-admin/sa-mobile-light.jpeg) | ![workbench.png](https://d3george.github.io/github-static/slash-admin/sa-mobile-dark.jpeg) |
|                                                                                            |

## Features

- Built using React 19 hooks.
- Powered by Vite for rapid development and hot module replacement.
- Integrates shadcn/ui, providing a rich set of UI components and design patterns.
- Written in TypeScript, offering type safety and an improved development experience.
- Responsive design, adapting to various screen sizes and devices.
- Flexible routing configuration, supporting nested routes.
- Integrated access control based on user roles.
- Supports internationalization for easy language switching.
- Includes common admin features like user management, role management, and permission management.
- Customizable themes and styles to meet your branding needs.
- Mocking solution based on MSW and Faker.js.
- State management using Zustand.
- Data fetching using React-Query.

## Quick Start

Requires Node.js **22.18.0 or later** and pnpm **10.8.0**. TypeScript lint configuration requires native Node.js type stripping.

### Get the Project Code

```bash
git clone https://github.com/d3george/slash-admin.git
```

### Install Dependencies

In the project's root directory, run the following command to install project dependencies:

```bash
pnpm install
```

### Start the Development Server

Run the following command to start the development server:

```bash
pnpm dev
```

Visit [http://localhost:3001](http://localhost:3001) to view your application.

### Build for Production

Run the following command to build the production version:

```bash
pnpm build
```

## Code Quality

Oxfmt and Oxlint use `oxfmt.config.ts` and `oxlint.config.ts`, with type inference from each package's `defineConfig`. Both configuration files are included in `pnpm typecheck`.

| Command             | Purpose                                         |
| ------------------- | ----------------------------------------------- |
| `pnpm format`       | Format supported project files and sort imports |
| `pnpm format:check` | Check formatting without writing files          |
| `pnpm lint`         | Run the default Oxlint rules                    |
| `pnpm lint:fix`     | Apply safe automatic lint fixes                 |
| `pnpm typecheck`    | Run TypeScript without emitting files           |
| `pnpm check`        | Run formatting, lint, and type checks in order  |

Formatting uses tabs (width 2), 120 columns, double quotes, semicolons, and LF. Import sorting preserves side-effect imports and does not add blank lines between groups. `package.json` field sorting is disabled. Both tools respect `.gitignore` and exclude `public`, `.vscode`, and `src/ui`.

Lefthook formats staged files, stages formatting fixes, then runs lint and type checks sequentially. Install the recommended **Oxc** VS Code extension (`oxc.oxc-vscode`) for formatting and safe lint fixes on save.

### Check Coverage

Oxlint uses its default rules and severities, with no additional plugins, type-aware rules, or individual rule overrides. Oxfmt formats CSS, JSON, and GraphQL without linting them. `pnpm typecheck` runs TypeScript type checks.

## Git Contribution submission specification

- `feat` new features
- `fix` fix the
- `docs` documentation or comments
- `style` code format (changes that do not affect code execution)
- `refactor` refactor
- `perf` performance optimization
- `revert` revert commit
- `test` test related
- `chore` changes in the construction process or auxiliary tools
- `ci` modify CI configuration and scripts
- `types` type definition file changes
- `wip` in development
