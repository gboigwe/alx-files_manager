# 0x04. Files Manager

## Concept
This project involves building a file manager platform that allows users to upload, view, and manage files. It integrates various back-end technologies to provide a robust and efficient system.

## Purpose
- **Authentication**: Secure user authentication using tokens.
- **File Management**: Enable users to list, upload, view, and change permissions of files.
- **Efficiency**: Utilize background processing and pagination for better performance.
- **Learning**: Assemble different back-end components to build a complete product.

## Technologies
- **JavaScript (ES6)**
- **NodeJS**
- **ExpressJS**
- **MongoDB**
- **Redis**
- **Kue**

## Features
- **User Authentication**: Secure login and token-based authentication.
- **File Operations**: List all files, upload new files, change file permissions, and view files.
- **Thumbnails**: Generate thumbnails for image files.
- **Background Processing**: Use Kue for handling background tasks.
- **Pagination**: Efficiently handle large sets of data.

## Project Details
- **Team**: Gbolahan Akande
- **Duration**: Sep 26, 2024 - Oct 3, 2024
- **Manual QA Review**: Request upon completion
- **Auto Review**: Launched at the deadline

## Learning Objectives
By the end of this project, you should be able to:
- Create an API with Express
- Authenticate users
- Store data in MongoDB
- Store temporary data in Redis
- Set up and use a background worker

## Requirements
- **Editors**: vi, vim, emacs, Visual Studio Code
- **Environment**: Ubuntu 18.04 LTS, Node (version 12.x.x)
- **File Format**: All files should end with a new line and use the `.js` extension
- **Linting**: Code will be verified using ESLint
- **README**: A README.md file at the root of the project is mandatory

## Setup
1. Clone the repository.
2. Run `$ npm install` to install dependencies.

## Provided Files
- `package.json`
- `.eslintrc.js`
- `babel.config.js`

## Tasks
### 0. Redis Utils
Create a `redis.js` file in the `utils` folder with the `RedisClient` class to handle Redis operations.

### 1. MongoDB Utils
Create a `db.js` file in the `utils` folder with the `DBClient` class to handle MongoDB operations.

## Resources
- Node JS getting started
- Process API doc
- Express getting started
- Mocha documentation
- Nodemon documentation
- MongoDB
- Bull
- Image thumbnail
- Mime-Types
- Redis
