#!/usr/bin/env node

const execSync = require('./execSync.cjs');

const argv = require('yargs')
    .options({
        '--fix': {
            description: 'Eslint --fix flag',
            type: 'boolean'
        }
    })
    .strict()
    .argv;

const fix = argv.fix ? '--fix' : '';

execSync(`yarn axia-core-exec-tsc --noEmit && axia-core-exec-eslint . --ext ts ${fix}`);
