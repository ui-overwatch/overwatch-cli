/**
 * @type {import('ui-overwatch').TestCase}
 */
module.exports = {
    name: 'can-log-in',
    environments: ['dev'],
    requireAuth: true,
    headless: true,
    async exec(project, page) {
        await page.goto(project.url);
    },
}
