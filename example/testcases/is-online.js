/**
 * @type {import('ui-overwatch').TestCase}
 */
module.exports = {
    name: 'is-online',
    environments: ['prod'],
    requireAuth: false,
    headless: true,
    exec: async (project, page) => {
        await page.goto(project.url);
    },
}
