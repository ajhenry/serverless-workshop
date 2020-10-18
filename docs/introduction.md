# Introduction

This project is meant to be a teaching workshop for college students at _any_ level (though students that have taken Data Structures will probably have an easier time digesting some of the graph concepts introduced with GraphQL)

## Features

This project has everything you need to run a serverless graphQL endpoint and deploy it to a cloud service

Includes

- TypeScript
- Logging via [winston](https://github.com/winstonjs/winston)
- Cloud deployment via [serverless](https://www.serverless.com/)
- Local development via [serverless-offline](https://github.com/dherault/serverless-offline)
- Browser-based GraphQL playground
- Prettier and ESLint configs
- Example data sets with recipes

## Goals

What this workshop hopes to accomplish

1. Introduce students to Serverless architectures

   - What serverless is and isn't
   - How it's different than SaaS and IaaS
   - Show examples with diagrams

2. Introduce students to GraphQL

   - Explain what GraphQL is and why its useful
   - Demonstrate how to use it effectively with graph data
   - Show the differences between it and REST

3. Introduce students to deploying code to a cloud service

   - AWS & GCP

## Environment Setup

This course encourages you to follow along and run the code for yourself.

### TL;DR

If you already have node setup

```sh
yarn && yarn start
```

### Node

This workshop makes extensive use of Node so that is a requirement for running any of the code in this workshop

We use [_nvm_](https://github.com/nvm-sh/nvm), it will make your life easier too

#### Mac Setup

Quick Setup

```bash
## Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.36.0/install.sh | bash

## Setup your profile
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

#### Windows Setup

Quick Setup

Download and install the following package

[Installer](https://github.com/coreybutler/nvm-windows/releases/download/1.1.7/nvm-setup.zip)

#### Set your nvm version

```bash
nvm install 12.18.2
nvm use default 12.18.2
```

Now you should be good to go on setup

### Install Dependencies

yarn or npm works

```bash
yarn
# or
npm i
```

### Start the Project Locally

We use serverless offline to mimic the environment of a lambda locally

```bash
yarn start
```
