![banner](https://image.nostr.build/92213e12db9c24231c14f930e43938e8b6a8d05440670973348fa30125a9e074.jpg)

<div>
<img width="300" align="right" src="https://image.nostr.build/cb44f85f5eee528f8b033b049483ea1e5b3a200a3039b4b830db560168403161.png" alt="Illustration" />

# Escapeland

a CRT-style portfolio template powered by Sanity.

## Main Features

- Blog (Posts)
- Artworks (Gallery)
- Engineering (Showcase projects)
- Contacts (Email and social links)
- Sanity Studio as the CMS
- Human unreadable CRT style (＞＜)
</div>

## Next steps

- [ ] Preview post
- [ ] URL parser
- [ ] Share
- [ ] Pagination
- [ ] TOC
- [ ] Posts directory

## Deploy

<div style="display: flex; gap: 4px;">
  <a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fmiyakoochi%2Fescapeland&env=SECRET_PROJECT_ID,SECRET_DATASET,SECRET_DEPLOY_URL,SANITY_STUDIO_PROJECT_ID,SANITY_STUDIO_DATASET&envDescription=Fill%20in%20the%20Sanity%20projectId%2C%20dataset%2C%20and%20deployment%20URL.&envLink=https%3A%2F%2Fgithub.com%2Fmiyakoochi%2Fescapeland%23environment-variables&project-name=escapeland&repository-name=escapeland"><img src="https://vercel.com/button" alt="Deploy with Vercel"/></a>

  <a href="https://minakami.land/post/escapeland-deploy-guide">
    <img width="92" src="https://image.nostr.build/87a059648e1eabb2ffadd2204ba65e2156e0a6b4613930be5d2b41126de9c992.png" alt="Deploy Guide" />
  </a>
</div>

## Development

### Prerequisites

You will need to have the following software installed on your machine:

- Bun >= 0.7.0
- A modern web browser
- Sanity's project id and dataset

### Environment variables

```
  # /app/.env
  SECRET_PROJECT_ID="<YOUR_SANITY_PROJECT_ID>"
  SECRET_DATASET="<YOUR_SANITY_DATASET>"
  SECRET_DEPLOY_URL="<YOUR_DEPLOY_URL>"

  # /studio/.env
  SANITY_STUDIO_PROJECT_ID="<YOUR_SANITY_PROJECT_ID>"
  SANITY_STUDIO_DATASET="<YOUR_SANITY_DATASET>"
```

### Preview

<table>
 <tr>
    <td>
      <img src="https://image.nostr.build/bdd306e048082f9c9b3c5bd86a9ed61de3238ceacd74823ede0d505d69cb8e64.png" alt="application-preview" />
    </td>
    <td>
      <img src="https://image.nostr.build/59d67d523cd9523df58e1e1de2ec3ec007a28656359f3ff8b605d52b6b63d6a5.png" alt="studio-preview" />
    </td>
 </tr>
</table>
