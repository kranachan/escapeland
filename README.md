![icon](https://image.nostr.build/c532f96c619c28959a00aad34f82f2ed4882912844e09ef3bdfbec625c6d261e.jpg)

## Development

### Prerequisites

- Bun >= 1.1.4 (for [`--filter`](https://bun.sh/blog/bun-v1.1.4#bun-filter-runs-workspace-scripts-in-parallel) flag support)
- A modern web browser
- Sanity project ID and dataset

### Environment variables (~/.env)

```Shell
  # app
  SECRET_PROJECT_ID="<YOUR_SANITY_PROJECT_ID>"
  SECRET_DATASET="<YOUR_SANITY_DATASET>"
  SECRET_DEPLOY_URL="<YOUR_DEPLOY_URL>"

  # studio
  SANITY_STUDIO_PROJECT_ID="<YOUR_SANITY_PROJECT_ID>"
  SANITY_STUDIO_DATASET="<YOUR_SANITY_DATASET>"
```
