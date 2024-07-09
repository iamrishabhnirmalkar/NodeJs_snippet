# Node Js Backend - Production Setup

- [Node Project](#node-project)
- [Git & Github](#git--github)
- [Husky](#husky)
- [TypeScript](#typescript)
- [Folder Structure](#folder-structure)
- [Commit Lint](#commit-lint)
- [ES Lint](#es-lint)
- [Prettier](#prettier)
- [Project Environment](#project-environment)
- [Express Js](#express-js)
- [Global Error Handler](#global-error-handler)
- [404 Handler](#404-handler)
- [Logger](#logger)
- [Source Map]
- [Colorful Terminal]
- [MongoDB]
- [Database Log Storage]
- [Database Migration]
- [Health Endpoint]
- [Security - Helmet JS]
- [Security - CORS]
- [Security - Rate Limiting]
- [Dependency Updates]
- [Docker]

## Node Project

Initialize a Node.js project:

```bash
npm init -y
```

After that, the package.json file will be created. Replace the test script with start so that you can easily run the server.js file with _npm start_.

```json
   "test": "echo \"Error: no test specified\" && exit 1"
  "start": "node server.js"
```

## Git & Github

Run the following command to initialize Git:

```bash
git init
```

This will create the .git folder in your project. Next, add and commit your files:

```bash
git add .
git commit -am 'feat: Node project setup'
```

Create a repository on GitHub and push your code:

```bash
git remote add origin https://github.com/your-username/your-repo.git
git push origin master
```

Create a .gitignore file to exclude files from being pushed to GitHub:

```sh
node_modules
dist
.env
```
