# API Template

This is a template repository for API:s. The idea is to copy this repository when creating new API:s.

## NodeJS

Code is generated from OpenAPI spec using [openapi-node-client-generator-cli](https://github.com/Forsakringskassan/openapi-node-client-generator-cli).

This template also contains [mocks](/src/mock) that are on the format used by [apimock-express](https://github.com/Forsakringskassan/apimock-express).

Output is a fully working, type safe, Fetch-client and type safe mocks. Packaged as an NPM package.

### Try it

You can try it by cloning this repository and do:

```sh
npx @forsakringskassan/openapi-node-client-generator-cli@latest \
 --package-name $(basename "$PWD") \
 --package-version $(npx git-changelog-command-line --print-next-version) \
 && npm install \
 && npm run build
```

And cleanup with `npm run git:clean`.

## Gradle

This repository also has the `se.fk.gradle.bundle-openapi` plugin from [gradle-conventions](https://github.com/Forsakringskassan/gradle-conventions).

It creates a JAR with the openapi specification in it. So that it can be published to a repository and used for code generation on the consumer side. See more in [gradle-conventions](https://github.com/Forsakringskassan/gradle-conventions).

## Release

Release is triggered by Gradle, it will push a tag that triggers the NPM release: <https://github.com/Forsakringskassan/template-api/actions/workflows/gradle-release.yaml>

The release will publish:

- Maven artefact: <https://github.com/orgs/Forsakringskassan/packages?repo_name=template-api>
- NPM package: <https://www.npmjs.com/package/@forsakringskassan/template-api>
