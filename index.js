const robots = {
    selenium: require('./robots/selenium-webdrive.js'),
    robots: require('./robots/robot.js'),
};

async function start() {
    const size = await robots.selenium();
    robots.robots(size);
}

start();