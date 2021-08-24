# Shared ESLint configs

To create a new release of this shared repo, simply run `yarn version` on master after merging your PR with changes. Push the commit with a new version.
Then push a new tag by running `git push origin v{new_version}`. This should create a new release.

Consumers of the repo will have to opt-in to the new version by updating their `package.json` file.
