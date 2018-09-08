const workingDirPath = './local-repo'
const simpleGit = require('simple-git')(workingDirPath)
const fs = require('fs')

console.log('---- clone -----')
simpleGit.clone('git@github.com:freewind-demos/javascript-simple-git-push-commit-demo.git', 'demo-project', () => console.log('------ git clone --------'))
    .exec(function () {
        console.log('--- modify ---')
        fs.appendFileSync('README.md', '\n- Modified at: ' + new Date())
    })
    .add('./*', () => console.log('----- git add . -----'))
    .commit('modified by simplegit', () => console.log('------ git commit ------'))
    .push('origin', 'master', () => console.log('-------- git push --------'))
