# Sky Starter Kit

[![NPM Version](https://badge.fury.io/js/sky-starter-kit.svg)](https://www.npmjs.com/package/sky-starter-kit)
[![Build Status](https://travis-ci.org/lob/sky-starter-kit.svg)](https://travis-ci.org/lob/sky-starter-kit)
[![Coverage Status](https://coveralls.io/repos/lob/sky-starter-kit/badge.svg?branch=master&service=github)](https://coveralls.io/github/lob/sky-starter-kit?branch=master)
[![Dependency Status](https://david-dm.org/lob/sky-starter-kit.svg)](https://david-dm.org/lob/sky-starter-kit)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)
[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg)](https://github.com/RichardLitt/standard-readme)

> This project provides a starter-kit for every possible Front-End project using Gulp and Express.js.

* Express.js provide a strong structure for routing
* Gulp 4 (actually in alpha) is used as task manager
* Pug compilation to HTML
* PostCSS is used to compile the CSS (PreCSS, CSSNano and CSSNext are ready)
* Automatic Linter for PostCSS, JavaScript and Pug
* JavaScript Unit testing with Mocha with few examples

## Features



## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#license)

## Install

To get you started you can simply clone the angular-seed repository and install the dependencies:

* git clone --depth 1 http://www.github.com/thedaviddias/sky-starter-kit/t (--depth 1 removes all but one .git commit history)

### Update your Gulp globally

```
npm uninstall -g gulp
```

```
npm install -g gulp-cli
```

### Running the Application with Docker

1. Install Docker Toolbox ([http://docker.com/toolbox](http://docker.com/toolbox))
2. Start the Docker QuickStart Terminal
3. Navigate to this application's root folder in the terminal window
4. Run docker-compose build to build the images
5. Run docker-compose up to run the containers
6. Navigate to http://192.168.99.100:3000 in a browser

## Usage

### Tasks

...

## Contribute

See [the contribute file](contribute.md)!

PRs accepted.

Small note: If editing the Readme, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

### Git branching model

This repo branching model is inspired by Git Flow. Currently we have these types of branches:

* master - Latest release, stable
* develop - Main development, unstable
* release/ - Release archive
* feature/ - Specific features development
* example/ - Helpful examples
* hotfix/ - Emergency fixes for latest release

Read the Git [Flow reference](http://nvie.com/posts/a-successful-git-branching-model/). This repo uses [Semantic Versioning](http://semver.org/).

## License

[MIT © David Dias.](../LICENSE)
