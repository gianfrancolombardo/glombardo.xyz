import { test, expect } from '@playwright/test';

test.describe('Portfolio Visual Regression', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        // Wait for the hero text to animate in
        await page.waitForTimeout(2000);
    });

    test('Hero Section Snapshot', async ({ page }) => {
        const hero = page.locator('#hero');
        await expect(hero).toBeVisible();
        await expect(page).toHaveScreenshot('hero-section.png', {
            mask: [page.locator('.animate-blob')], // Mask dynamic/random elements if needed
        });
    });

    test('Expertise Section Snapshot', async ({ page }) => {
        const section = page.locator('#expertise');
        await section.scrollIntoViewIfNeeded();
        await page.waitForTimeout(500); // Allow scroll to settle
        await expect(section).toBeVisible();
        await expect(page).toHaveScreenshot('expertise-section.png');
    });

    test('Work Section Snapshot', async ({ page }) => {
        const section = page.locator('#work');
        await section.scrollIntoViewIfNeeded();
        await page.waitForTimeout(500);
        await expect(section).toBeVisible();
        await expect(page).toHaveScreenshot('work-section.png');
    });

    test('Experience Section Snapshot', async ({ page }) => {
        const section = page.locator('#experience');
        await section.scrollIntoViewIfNeeded();
        await page.waitForTimeout(500);
        await expect(section).toBeVisible();
        await expect(page).toHaveScreenshot('experience-section.png');
    });

    test('Posts Section Snapshot', async ({ page }) => {
        const section = page.locator('#posts');
        await section.scrollIntoViewIfNeeded();
        await page.waitForTimeout(500);
        await expect(section).toBeVisible();
        await expect(page).toHaveScreenshot('posts-section.png');
    });

    test('Footer Section Snapshot', async ({ page }) => {
        const section = page.locator('#contact');
        await section.scrollIntoViewIfNeeded();
        await page.waitForTimeout(500);
        await expect(section).toBeVisible();
        await expect(page).toHaveScreenshot('footer-section.png');
    });
});
