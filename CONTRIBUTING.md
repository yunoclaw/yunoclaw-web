# Contributing to YunoClaw

Thanks for your interest in contributing. This is a private project — contributions are currently limited to the core team.

---

## Getting Started

1. Make sure you have access to the repo (contact [team@yunoclaw.tech](mailto:team@yunoclaw.tech))
2. Clone and set up locally — see [README.md](./README.md#local-development)
3. Create a branch from `main`

```bash
git checkout -b feat/your-feature-name
```

---

## Branch Naming

| Type | Pattern | Example |
|------|---------|---------|
| Feature | `feat/...` | `feat/turnstile-captcha` |
| Bug fix | `fix/...` | `fix/waitlist-validation` |
| Docs | `docs/...` | `docs/update-readme` |
| Chore | `chore/...` | `chore/update-deps` |

---

## Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org):

```
feat: add Turnstile CAPTCHA to waitlist form
fix: correct email sanitization in API route
docs: update README with new features
chore: upgrade Next.js to 14.3
```

---

## Pull Requests

- Keep PRs focused — one feature or fix per PR
- Write a clear description of what changed and why
- Make sure `npm run build` passes before opening a PR
- Request review from at least one team member

---

## Code Style

- TypeScript strict mode — no `any`
- Tailwind for all styling — no inline styles in components
- Components go in `src/components/`, pages in `src/app/`
- Keep components small and focused

---

## Questions?

Reach out at [team@yunoclaw.tech](mailto:team@yunoclaw.tech)
