#!/usr/bin/env node
'use strict';

//-----------------------------------------------------------------------------
// 3rd-party
//-----------------------------------------------------------------------------
const cli = require('commander');

//-----------------------------------------------------------------------------
// internal
//-----------------------------------------------------------------------------
const pkg = require('../package');


//-----------------------------------------------------------------------------
//
// Usage
//
//-----------------------------------------------------------------------------
cli.version(pkg.version)
.usage('<command> [options]')
.command('init', 'generate a new project from a template')
.parse(process.argv)
