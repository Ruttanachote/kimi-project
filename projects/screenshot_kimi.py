from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page(viewport={'width': 1440, 'height': 900})
    page.goto('https://www.kimi.com/')
    page.wait_for_timeout(5000)
    page.screenshot(path='kimi_screenshot.png', full_page=True)
    browser.close()
    print('Screenshot saved!')
