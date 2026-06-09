import { chromium } from "playwright";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "public", "projects");

const targets = [
  {
    file: "premium-barber.png",
    url: "https://premium-barbershop-red.vercel.app/",
  },
  {
    file: "iron-blade.png",
    url: "https://barber-site-mocha.vercel.app/",
  },
  {
    file: "iron-body-gym.png",
    url: "https://iron-body-gym-iota.vercel.app/",
  },
];

const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: { width: 1920, height: 1080 },
  deviceScaleFactor: 2,
});
const page = await context.newPage();

for (const { file, url } of targets) {
  console.log(`Capturing ${file} from ${url}`);
  await page.goto(url, { waitUntil: "load", timeout: 120000 });
  await page.waitForTimeout(4000);
  await page.screenshot({
    path: path.join(outDir, file),
    type: "png",
    fullPage: false,
    animations: "disabled",
  });
}

await browser.close();
console.log("Done — 1920×1080 @2x PNG previews saved.");
