const fs = require('fs')
  , path = require('path')
  , core = require('@actions/core')
  , io = require('@actions/io')
  , json2csv = require('json2csv')
;

async function run() {
    const token = getRequiredInput('token')
      , organizationinp = getRequiredInput('organization')
    ;
    core.setOutput('usercount', organizationinp);
}
