# Casa Horizon

## Getting Started

1. `git clone` this repo
2. `npm install`

To run in dev mode:

3. Run `gulp`

### Deploy commands

When deploying, change the following files in public/index.html:

<link rel="stylesheet" type="text/css" href="./styles/style.css">
<script src="./scripts/app.js"></script>

Deploy to staging site 1:
`firebase deploy --only staging-site`

Deploy to staging site 2:
`firebase deploy --only hosting:staging-site-2`

Deploy to production site:
`firebase deploy --only production`
