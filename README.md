# Escapeland

A portfolio-template powered by Astro and Sanity

## Main Features

- Blog
- Artworks
- Contacts
- Sanity Studio
- Human Unreadable　(＞＜)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You will need to have the following software installed on your machine:

- Bun >= 0.7.0
- A modern web browser
- Sanity's project id and dataset

### Installation

1. Clone the repository to your local machine

```
  git clone https://github.com/miyakoochi/escapeland.git
```

2. Navigate to the project directory

```
  cd escapeland
```

3. Install the necessary packages

```
  bun install
```

4. Create `.env` file in the root directory.

```
  # Application
  SECRET_PROJECT_ID=<YOUR_SANITY_PROJECT_ID>
  SECRET_DATASET=<YOUR_SANITY_DATASET>

  # Sanity Studio
  SANITY_STUDIO_PROJECT_ID=<YOUR_SANITY_PROJECT_ID>
  SANITY_STUDIO_DATASET=<YOUR_SANITY_DATASET>
```

4. Start the development server

```
  bun run dev
```

5. Visit the site in your web browser at:

```
  http://localhost:4321 # Application
  http://localhost:3333 # Sanity Studio
```
