const webdriver = require('selenium-webdriver');
const By = webdriver.By;

const dateTime = new Date;
const dt = `[${dateTime.getHours()+1}:${dateTime.getMinutes()+1}:${dateTime.getSeconds()+1}]`;

const driver = new webdriver.Builder().forBrowser('chrome').build();

driver.manage().window().maximize();
driver.manage().deleteAllCookies();

async function start() {
    driver.get('chrome://dino');
    
    await driver.sleep('5000');

    const width = await driver.executeScript('return document.body.parentNode.scrollWidth');
    const height = await driver.executeScript('return document.body.parentNode.scrollHeight');

    const size = {
        "width": width,
        "height": height,
    }

    console.log(`${dt}  width: ${width}`);
    console.log(`${dt}  height: ${height}`);

    return size;
}

module.exports = start;