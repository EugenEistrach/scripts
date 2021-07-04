#!/usr/bin/env node

// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title SSH
// @raycast.mode fullOutput

// Optional parameters:
// @raycast.icon 🖥
// @raycast.argument1 { "type": "text", "placeholder": "Host" }

// Documentation:
// @raycast.description Open iterm and ssh into server
// @raycast.author Eugen Eistrach
// @raycast.authorURL https://github.com/EugenEistrachKC

const itermTab = require('./libraries/iterm-tab');
const utils = require('./utils');

const openIterm = async () => {
  const host = await utils.expand(utils.args()[0]);
  await itermTab(`ssh ${host}`);
};

openIterm();
