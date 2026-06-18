## Quick node tips

- node // put you in javascript env
- .exit // exit node env or ctrl + d
- .help // get help
- .clear // clear the console or cmd + k

# NPM - node package manager

Use to manage all the packages and dependencies for your project. It is installed with node.js.

### Type of installs

The 2 types of package you can install are:

- simple dependency: npm install <package-name>
- dev dependency: npm install <package-name> --save-dev
  usually tools for development like testing, linters, etc. Not needed in production.
  Package are added in the package.json file under devDependencies.
  //nodemon is a dev dependency because it is only used in development to automatically restart the server when file changes are detected.
