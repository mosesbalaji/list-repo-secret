const fs = require('fs')
  , path = require('path')
  , core = require('@actions/core')
  , io = require('@actions/io')
  , json2csv = require('json2csv')
;

const organizationinp = getRequiredInput('organization');
const my_token = getRequiredInput('token');

console.log(organizationinp)
