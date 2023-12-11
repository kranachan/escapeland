![banner](https://image.nostr.build/92213e12db9c24231c14f930e43938e8b6a8d05440670973348fa30125a9e074.jpg)

<div>
<img width="40%" align="right" src="https://image.nostr.build/cb44f85f5eee528f8b033b049483ea1e5b3a200a3039b4b830db560168403161.png" alt="Illustration" />

# Escapeland

A CRT-style portfolio template powered by Sanity.

## Main features

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

## One-click deployment

<div style="display: flex; gap: 4px;">
  <a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fmiyakoochi%2Fescapeland&root-directory=app&env=SECRET_PROJECT_ID,SECRET_DATASET,SECRET_DEPLOY_URL&envDescription=Fill%20in%20the%20Sanity%20projectId%2C%20dataset%2C%20and%20deployment%20URL.&envLink=https%3A%2F%2Fgithub.com%2Fmiyakoochi%2Fescapeland%23environment-variables&project-name=escapeland-app&repository-name=escapeland">
    <img src="https://vercel.com/button" alt="Deploy with Vercel"/>
  </a>

  <a href="https://minakami.land/post/escapeland-deployment-guide">
    <img height="32" src="https://image.nostr.build/8ff7f8073238f867f2f06b678d76c2960d84ffd12fe2144a64e060bf4180ab5c.png" alt="Deployment Guide" />
  </a>
</div>

## Development

### Prerequisites

- Bun >= 0.7.0
- A modern web browser
- Sanity's project id and dataset

### Environment variables

```Shell
  # /app/.env
  SECRET_PROJECT_ID="<YOUR_SANITY_PROJECT_ID>"
  SECRET_DATASET="<YOUR_SANITY_DATASET>"
  SECRET_DEPLOY_URL="<YOUR_DEPLOY_URL>"

  # /studio/.env
  SANITY_STUDIO_PROJECT_ID="<YOUR_SANITY_PROJECT_ID>"
  SANITY_STUDIO_DATASET="<YOUR_SANITY_DATASET>"
```

### Screenshots

<table>
 <tr>
    <td>
      <img src="https://image.nostr.build/b0547028847c627b90580d7fa49f814f2dbc2012eac7ab5fd281bd8d078abbce.jpg" alt="application-dark-preview" />
    </td>
    <td>
      <img src="https://image.nostr.build/470a4102b5a298db445c9bd24c8cbcf7d8d1f887385cbff28a33a52a77361d8a.jpg" alt="application-light-preview" />
    </td>
    <td>
      <img src="https://image.nostr.build/128b9e6cf53cffcea8da6ae43492b954af786d16a335effc363f49a0b7ec9121.jpg" alt="studio-preview" />
    </td>
 </tr>
</table>
