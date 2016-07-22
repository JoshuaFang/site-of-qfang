
const ghpages = require('gh-pages')
const path = require('path');

ghpages.publish(path.join(__dirname, '_book'), {
    repo: 'git@github.com:JoshuaFang/joshuafang.github.io.git',
    branch: 'gh-pages',
    remote: 'origin',
    logger: (msg) => { console.log(msg) }
}, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('publsh success!')
    }
})