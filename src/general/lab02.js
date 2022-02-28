const puppeteer = require("puppeteer");
const fs = require("fs");

async function main() {
  const browser = await puppeteer.launch({
    defaultViewport: null,
    args: ["--start-maximized"],
  });
  const page = await browser.newPage();
  await page.goto("https://en.wikipedia.org/wiki/Node.js");

  const extractedText = await page.$eval("*", (el) => el.innerText);
  fs.writeFileSync("./content.txt", extractedText, { encoding: "utf8" });
  await browser.close();
}

main();
