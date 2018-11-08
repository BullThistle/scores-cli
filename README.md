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
