import asyncio
from playwright.async_api import async_playwright
import os

async def clone_google():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()
        
        print('กำลังโหลด Google...')
        await page.goto('https://www.google.com', wait_until='networkidle')
        await page.wait_for_timeout(3000)
        
        output_dir = '/root/.openclaw/workspace/projects/google-clone'
        os.makedirs(output_dir, exist_ok=True)
        
        # บันทึกหน้าเว็บแบบเต็มรูปแบบ
        html = await page.content()
        
        # แก้ไขให้ search ทำงานได้
        html = html.replace('action="/search"', 'action="https://www.google.com/search"')
        html = html.replace("action='/search'", "action='https://www.google.com/search'")
        
        # เพิ่ม base URL
        html = html.replace('<head>', '<head><base href="https://www.google.com/">')
        
        with open(os.path.join(output_dir, 'index.html'), 'w', encoding='utf-8') as f:
            f.write(html)
        
        # บันทึก screenshot
        await page.screenshot(path=os.path.join(output_dir, 'preview.png'), full_page=True)
        
        await browser.close()
        print(f'✅ Clone เสร็จแล้ว!')
        print(f'📁 อยู่ที่: {output_dir}')
        print('🌐 เปิด index.html ใน browser ได้เลย')

asyncio.run(clone_google())
