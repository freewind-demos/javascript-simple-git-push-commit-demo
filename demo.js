const workingDirPath = './local-repo'
const simpleGit = require('simple-git')(workingDirPath)
const fs = require('fs')

console.log('---- clone -----')
simpleGit.clone('git@github.com:freewind-demos/javascript-simple-git-push-commit-demo.git', 'demo-project', () => console.log('------ git clone --------'))
    .exec(() => {
        fs.appendFileSync('local-repo/demo-project/README.md', '\n- Modified at: ' + new Date())
    })
    .add('./*', () => console.log('----- git add . -----'))
    .commit('modified by simplegit', () => console.log('------ git commit ------'))
    .push('origin', 'master', () => console.log('-------- git push --------'))
    .catch((err) => console.error(err))
