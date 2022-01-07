const fs = require('fs')
  , path = require('path')
  , core = require('@actions/core')
  , github = require('@actions/github')
  , io = require('@actions/io')
  , json2csv = require('json2csv')
;

async function run() {
   const GITHUB_TOKEN = core.getInput('token');
   const octokit = github.getOctokit('token');

   const { context = {} } = github;
   const { pull_request } = context.payload;

   await octokit.rest.issues.createComment({
     ...context.repo,
     issue_number: pull_request.number,
     body: 'thanks you for submmiting a pull request'
  });
}
run();