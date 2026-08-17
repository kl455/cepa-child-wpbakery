# CEPA WPBakery Redesign Guidance

This repository is the production-intended CEPA WordPress redesign using TheGem + WPBakery.

## Project Scope

- Active repository root: `C:\Users\klyakov.ISG-INC\Local Sites\cepa-dev-wpbakery\app\public\wp-content\themes\thegem-child`.
- Theme folder must remain `thegem-child`.
- Parent theme is TheGem; keep `Template: thegem` intact in `style.css`.
- Never edit the TheGem parent theme.
- Preserve existing working functionality.

## Archived Elementor Track

- The prior Elementor implementation is archived and must never be modified.
- Do not use the archived Elementor implementation as the implementation architecture for this WPBakery rebuild.

## Design Source

- `prototypes/concept-2-5-approved` is the client-approved visual/design source of truth for this WPBakery rebuild.
- The prototype snapshot is a reference artifact and should not be modified unless explicitly instructed.
- Older prototypes are not approved design sources.

## Implementation Rules

- Prefer native TheGem/WPBakery components where practical.
- Keep custom PHP/CSS/JS targeted, scoped, and maintainable.
- Do not modify generated TheGem CSS files unless a task explicitly requires it.
- Make surgical, task-scoped changes only; do not perform unrelated cleanup or refactoring.
- Work one clearly defined task or homepage section at a time.

## Workflow Rules

- Before substantive implementation, inspect first and explain the intended changes.
- After changes, report exactly which files changed and provide `git status --short`.
- Never commit or push unless explicitly instructed.
