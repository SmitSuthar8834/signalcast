# Changes in this fork

Signalcast is a fork of [Postiz](https://github.com/gitroomhq/postiz-app) by Gitroom,
licensed under AGPL-3.0. The original license and copyright notices are kept in `LICENSE`.
As required by AGPL-3.0 section 5(a), this file lists the modifications made in this fork.

| Date | Change |
| --- | --- |
| 2026-10-11 | Forked from gitroomhq/postiz-app `main`. |
| 2026-10-11 | Renamed the product from Postiz to Signalcast in all user-facing strings: frontend components, email templates, MCP server names, agent tool descriptions, API error messages and the translation files for every locale. Lowercase identifiers (env var names, the `postiz` CLI package, `postiz://` deep links) are unchanged. |
| 2026-10-11 | Replaced the logo, wordmark and favicons (`apps/frontend/public/*.svg`, `favicon.*`, `new-layout/logo.tsx`, `ui/logo-text.component.tsx`). |
| 2026-10-11 | Removed the Postiz user count claim and the Postiz customer testimonials from the sign-in page and replaced them with a product description. |
| 2026-10-11 | Pointed the open-source link in the billing FAQ at this fork's repository. |

Source for this fork: https://github.com/SmitSuthar8834/signalcast
| 2026-10-11 | Removed the remaining ties to Postiz and Gitroom services: links to postiz.com terms and privacy (replaced by local `/terms` and `/privacy` pages), the Postiz tutorial video embeds, the affiliate program menu item, Chrome Web Store links to the Postiz extension, docs.postiz.com links, analytics domains, synthetic `@postiz.com` e-mail addresses, agency e-mails addressed to postiz.com, Postiz user agents and CLI references in agent tool text. |
| 2026-10-11 | Deleted the Postiz customer testimonials and avatar photos, the Gitroom contributor license agreements (CCLA, ICLA), Jenkins and SonarQube configuration, the ChatGPT app submission and the CI workflows that publish to Postiz's registries. Rewrote README, CONTRIBUTING, SECURITY and the code of conduct contact; added NOTICE. |

Source for this fork: https://github.com/SmitSuthar8834/signalcast
