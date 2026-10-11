# Contributing

Contributions are welcome. Open an issue first for anything larger than a small fix so we can agree on the approach.

- Use pnpm only.
- Backend changes follow DTO >> Controller >> Service >> Repository.
- Run the type-checks before opening a pull request: `npx tsc --noEmit -p apps/frontend/tsconfig.json` and `npx tsc --noEmit -p apps/backend/tsconfig.json`.
- Every pull request description needs a `# QA` section with numbered steps a reviewer can follow.

By contributing you agree that your contribution is licensed under the AGPL-3.0, the same license as the project. There is no contributor license agreement.
