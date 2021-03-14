#!/usr/bin/env node
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const { overwatch, addReporter, slackReporter, datadogReporter } = require('ui-overwatch');

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
    }, async ({ testCases, projects, env, slackWebhook, datadogApiKey }) => {
        slackWebhook && addReporter(slackReporter(slackWebhook));
        datadogUri && addReporter(datadogReporter(datadogUri));
        await overwatch(env?.split(','), projects, testCases);
    })
    .option('slack-webhook', {
        alias: 's',
        type: 'string',
        description: 'Report results to a slack webhook',
    })
    .option('datadog-api-key', {
        alias: 'd',
        type: 'string',
        description: 'Report results to datadog',
    })
    .help()
    .argv
