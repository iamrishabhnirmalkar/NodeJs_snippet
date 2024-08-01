/*        eslint-disable no-console     */
const { exec } = require('child_process')

// Command line Argument
const command = process.argv[2]
const migrationName = process.argv[3]

//  Migration Commands
const validCommands = ['create', 'up', 'down', 'list', 'prune']
if (!validCommands.includes(command)) {
    console.error(`Invalid command:command must be one of ${validCommands}`)
    process.exit(0)
}

const commandWithoutMigrationNameRequired = ['list', 'prune']
if (!commandWithoutMigrationNameRequired.includes(command)) {
    if (!migrationName) {
        console.error(`migration name is required`)
        process.exit(0)
    }
}

function runNpmScript() {
    return new Promise((resolve, reject) => {
        let execCommand = ``
        if (commandWithoutMigrationNameRequired.includes(command)) {
            execCommand = `migrate ${command}`
        } else {
            execCommand = `migrate ${command} ${migrationName}`
        }

        const childProcess = exec(execCommand, (error, stdout) => {
            if (error) {
                reject(`Error runnig script: ${error}`)
            } else {
                resolve(stdout)
            }
        })
        childProcess.stderr.on('data', (data) => {
            console.error(data)
        })
    })
}

// Example Usage:
runNpmScript()
    .then((output) => {
        console.info(output)
    })
    .catch((error) => {
        console.info('Error:', error)
    })
