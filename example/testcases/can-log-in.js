/**
 * @type {import('ui-overwatch').TestCase}
 */
const assert = require('assert');
module.exports = {
    name: 'can-log-in',
    environments: ['prod'],
    requireAuth: true,
    headless: true,
    exec(project, page) {
        return Promise.reject(new Error('Custom error message'));
    },
}
