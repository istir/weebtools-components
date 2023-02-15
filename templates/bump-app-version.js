/* eslint-disable no-undef */
import { exec, execSync } from 'child_process'
import { readFileSync, writeFileSync } from 'fs'


function getNextVersion () {
    return new Promise((resolve, reject) => {
        if (process.argv[2]) {
            resolve(process.argv[2])
            return
        }
        exec('git branch --show-current', (error, stdout) => {
            const version = stdout.replace(/chore\/bump-app-version-to-([0-9]\.[0-9]+\.[0-9])/, '$1')
            if (version.match(/([0-9]\.[0-9]+\.[0-9])/g).length) {
                resolve({ branch: stdout, version: version.trim().replaceAll(/\r?\n/g, '') })
            } else {
                reject()
            }
        })

    })
    // let [main, sub, review] = currentVersion.split('.')
    // main = parseInt(main, 10)
    // sub = parseInt(sub, 10)
    // review = parseInt(review, 10)

    // if (sub >= (main > 0 ? 99 : 9)) {
    //     main += 1
    //     sub = 0
    // } else {
    //     sub += 1
    // }
    // review = 0;
    // return [main, sub, review].join('.')
}

; (async () => {
    const PACKAGE_JSON = 'package.json'
    const TAURI_CONF_JSON = 'src-tauri/tauri.conf.json'

    const packagejson = JSON.parse(readFileSync(PACKAGE_JSON, 'utf8'))
    const data = await getNextVersion()
    const version = data.version
    const branch = data.branch
    if (!version) { console.error('Wrong version'); return }
    writeFileSync(PACKAGE_JSON, JSON.stringify({ ...packagejson, version }, null, 2))

    const tauriconfjson = JSON.parse(readFileSync(TAURI_CONF_JSON, 'utf8'))

    writeFileSync(TAURI_CONF_JSON, JSON.stringify(({ ...tauriconfjson, package: { ...tauriconfjson.package, version } }), null, 2))

    execSync('yarn upgrade', { stdio: 'inherit' })
    execSync(`git commit -am "Bump app version to ${version}" && git push --set-upstream origin ${branch} && git push`, { stdio: 'inherit' })
})()
