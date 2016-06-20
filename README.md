simple-ls
---------

> Limited UNIX command 'ls' functionality for node.

## Installation

`$ npm install simple-ls`

`$ .\node_modules\.bin\simple-ls`

Or, you can install it globally.

`$ npm install -g simple-ls`

`$ simple-ls`

## Options

    -h, --help ......... display usage information in prompt
    -r, --recursive .... recursively list files and directories

## Usage Examples

Assume structure:

    My Documents
    ├── Work
    ├── Personal
    │   └── credentials.txt
    └── HandWave.FBX

`$ simple-ls`

    Work
    Personal
    HandWave.FBX

`$ simple-ls -r`

    Work
    Personal
    Personal\credentials.txt
    HandWave.FBX

`$ simple-ls Personal`

    Personal\credentials.txt

`$ cd Personal && simple-ls`

    credentials.txt

## TODO

- [x] standard "ls [path]"
- [ ] support for wildcards/globs
- [ ] -e --exclude <path/glob>
- [x] -r --recursive
- [ ] -a --all
