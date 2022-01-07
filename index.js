const fs = require('fs')
  , path = require('path')
  , core = require('@actions/core')
  , io = require('@actions/io')
  , json2csv = require('json2csv')
;

async function main() {
    try {
        const token = getRequiredInput('token')
        const organizationinp = getRequiredInput('organization')
        console.log(organizationinp);
    }catch (error) {
        core.setFailed(error.message)
    }
}
