const fs = require('fs')
  , path = require('path')
  , core = require('@actions/core')
  , io = require('@actions/io')
  , json2csv = require('json2csv')
;

const organizationinp = getInput('organization');
const my_token = getInput('token');

console.log(organizationinp)
