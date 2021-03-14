# ui-overwatch-cli
![npm](https://img.shields.io/npm/v/ui-overwatch-cli?style=for-the-badge)

About
CLI for the [ui-overwatch](https://github.com/ui-overwatch/overwatch) library. Execute e2e tests for defined projects.

## Install

    npm i -g ui-overwatch-cli


## Run

    ui-overwatch run "./testcases/**/*.js" "./projects/**/*.js"

CLI Output

    ui-overwatch run "./example/testcases/**/*.js" "./example/projects/**/*.js"

    [14/03/2021 01:53:58] [INFO]    | Add reporter Console Reporter
    [14/03/2021 01:53:58] [INFO]    | Running 2 test case(s) on 1 project(s)
    [14/03/2021 01:53:58] [INFO]    | ⚠ TestCase can-log-in skipped on 'Demo'
    [14/03/2021 01:53:59] [INFO]    | ✔ TestCase is-online succeeded on 'Demo'
    [14/03/2021 01:53:59] [INFO]    | Test cases completed. Totals: 1 projects, 2 test cases, 1s

## Log Levels

In order to customize the output set the ENV variable `LOG_LEVEL` to a number between 0 and 4
    
    LOG_LEVEL=4 ui-overwatch run "./testcases/**/*.js" "./projects/**/*.js"
    
    [14/03/2021 01:53:58] [INFO]    | Use loglevel DEBUG
    [14/03/2021 01:53:58] [INFO]    | Add reporter Console Reporter
    [14/03/2021 01:53:58] [DEBUG]   | Load files from /Users/cx/Work/ui-overwatch-cli/example/testcases/**/*.js
    [14/03/2021 01:53:58] [DEBUG]   | Load files from /Users/cx/Work/ui-overwatch-cli/example/projects/**/*.js
    [14/03/2021 01:53:58] [INFO]    | Running 2 test case(s) on 1 project(s)
    [14/03/2021 01:53:58] [INFO]    | ⚠ TestCase can-log-in skipped on 'Demo'
    [14/03/2021 01:53:59] [INFO]    | ✔ TestCase is-online succeeded on 'Demo'
    [14/03/2021 01:53:59] [INFO]    | Test cases completed. Totals: 1 projects, 2 test cases, 1s


Name | Number | Description
---|---|---
ERROR | `0` | Only shows error
WARNING | `1` | Only shows warnings and the above (`default`)
INFO | `2` | Shows infos and the above
VERBOSE | `3` | Shows more verbose output and the above
DEBUG | `4` | Print all debug statements and the above

## Reporters

### Slack
In order to send the results of the testcases to a slack webhook, pass the webhook URI via the `slack-webhook` option.

Check out the [Doc](https://api.slack.com/messaging/webhooks) to see, how to enable webhooks for your slack instance.

    ui-overwatch run "./testcases/**/*.js" "./projects/**/*.js" --slack-webhook=SLACK_WEBHOOK_URI

Slack message

![Slack Message](https://github.com/ui-overwatch/overwatch/raw/master/assets/slack-output.png)

### DataDog
To send the results to a datadog logging instance, pass the API Key via the `datadog-api-key` option.

See [here](https://docs.datadoghq.com/account_management/api-app-keys/) to create an API key

    ui-overwatch run ./testcases/**/*.js ./projects/**/*.js --datadog-api-key=DATADOG_API_KEY
