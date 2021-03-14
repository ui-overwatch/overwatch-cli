/**
 * @type {import('ui-overwatch').TestCase}
 */
module.exports = {
    name: 'is-online',
    environments: ['prod'],
    requireAuth: false,
    headless: true,
    async exec(project, page) {
        await page.goto(project.url);
    },
}
