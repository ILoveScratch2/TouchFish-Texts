const { expect, test } = require('@playwright/test')
const { launchElectron } = require('./helpers')

test.describe('Check Launch TouchFish Texts', async () => {
  let app = null
  let page = null

  test.beforeAll(async () => {
    const { app: electronApp, page: firstPage } = await launchElectron()
    app = electronApp
    page = firstPage
  })

  test.afterAll(async () => {
    await app.close()
  })

  test('Empty TouchFish Texts', async () => {
    const title = await page.title()
    expect(/^TouchFish Texts|Untitled-1 - TouchFish Texts$/.test(title)).toBeTruthy()
  })
})
