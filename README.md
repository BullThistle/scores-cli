# Scores

## Description

Scores is a command line scores calculator. It takes a .txt file with a list
of games as input and outputs a ranking of the top teams based on game wins.

A win is 3 points.
A tie is 1 point.
A loss is 0 points.

## Example
**Input**
```bash
Sounders 5, Chelsea 4
Liverpool 11, Barcelona 8
Real Salt Lake 3, Barcelona 2
D.C. United 3, Manchester 2
D.C. United 1, Sounders 2
Real Salt Lake 2, Chelsea 2
Sounders 3, Chelsea 3
```

**Output**
```bash
1. Sounders, 7 pts
2. Real Salt Lake, 4 pts
3. D.C. United, 3 pts
4. Liverpool, 3 pts
5. Chelsea, 2 pts
6. Barcelona, 0 pts
7. Manchester, 0 pts
```

## Run Without Install

_In scores directory:_

Install dependencies:

```bash
yarn
```

Generate scores from file:

```bash
node scores sample-inputs/sample-input.txt
```

or

```bash
./scores.js sample-inputs/sample-input.txt
```

## Install

_In scores directory:_

Install dependencies:

```bash
yarn
```

Install scores globally:

```bash
npm i -g
```

## Usage

Generate scores from file:

```bash
scores my-dir/my-file.txt
```

Generate scores from one of the sample inputs:

_In scores directory:_

```bash
scores sample-inputs/sample-input.txt
```

Generate scores in reverse order:

```bash
scores -r sample-inputs/sample-input.txt
```

**Other options:**
-v, --version output the version number
-h, --help output usage information

## Uninstall

```bash
npm uninstall -g scores
```

## Test

_In scores directory:_

```bash
jest
```

## Contributors

| [<img alt="Rafa" src="https://avatars0.githubusercontent.com/u/13779974?s=460&v=4" width="117">](https://github.com/bullthistle) |
|:---:|
|[Rafa](https://github.com/bullthistle)

### License

Copyright (c) 2018 **Rafael Furry**

*This software is licensed under the MIT license.*