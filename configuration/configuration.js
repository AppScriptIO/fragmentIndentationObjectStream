const path = require('path')
const resolvedModule = {
    get deploymentScript() { return path.dirname( require.resolve(`@dependency/deploymentScript/package.json`) )  },
}

const ownConfiguration = { // own project's configuration
    directory: {
        root: path.resolve(`${__dirname}/..`),
    },    
    script: [
        {
            type: 'directory',
            path: `${resolvedModule.deploymentScript}/script`,
        }, 
        {
            type: 'directory',
            path: './script/'
        }
    ],
}

module.exports = Object.assign(
    ownConfiguration,
)
