#!/usr/bin/env node
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')

yargs(hideBin(process.argv))
    .command('run [testCases] [projects] [env]', 'Run test cases', (yargs) => {
        yargs
            .positional('testCases', {
                describe: 'Glob pattern for test cases',
                default: './test/testcases/**/*.js',
            })

        yargs
            .positional('projects', {
                describe: 'Glob pattern for projects',
                default: './test/projects/**/*.js',
            })

        yargs
            .positional('env', {
                describe: 'Comma seperated list of environments',
                default: null,
            })
    }, async (argv) => {
        console.log('run', argv);
    })
    .help()
    .argv
