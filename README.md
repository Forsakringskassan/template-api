# OpenAPI Node Client Template

This is a template repository to show how to generate code from OpenAPI spec using [openapi-node-client-generator-cli](https://github.com/Forsakringskassan/openapi-node-client-generator-cli).

## Try it

You can try it by cloning this repository and do:

```sh
npx @forsakringskassan/openapi-node-client-generator-cli@latest \
 --package-name X \
 --package-version $(npx git-changelog-command-line --print-next-version)
```

This is typically done by a CI pipeline where the generated NPM package is also published.
