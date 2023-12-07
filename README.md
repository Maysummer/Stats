# Information Analysis

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
- [Available Script](#available-scripts)

## Overview

Load data into the application and work on it.

### The challenge

Users should be able to:
- Take data from any source
- Load data into application
- Parse, analyse and generate report from analysis

## My process

- Create project dir
- Create package.json
- Create ts config file
- Create src and build folders
- Configure ts config file to correctly direct outDir and rootDir
- Install nodemon and concurrently
- Configure scripts in package.json to accomodate nodemon and concurrently

### Built with

- Typescript

### What I learned

Create package.json
```shell
npm init -y
```

Create ts config file
```shell
tsc --init
```

Generic types (passing types like arguments)
```ts
//T is arbitrary
class HoldAnything<T> {
  data: T;
}
const holdNumber = new HoldAnything<number>();
holdNumber.data = 123;
const holdString = new HoldAnything<string>();
holdNumber.data = 'abcd';
```

Type assertions/casting (tells the TypeScript compiler to treat an expression as a different type than it would normally infer)
```ts
//MatchResult is an enum previously defined
row[5] as MatchResult;
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Logs info in the terminal.
The page will reload when you make changes.\
You may also see any lint errors in the console.
