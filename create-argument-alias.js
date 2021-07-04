#!/usr/bin/env node

// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title Create Argument Alias
// @raycast.mode compact

// Optional parameters:
// @raycast.icon +
// @raycast.argument1 { "type": "text", "placeholder": "Name" }
// @raycast.argument2 { "type": "text", "placeholder": "Alias" }

// Documentation:
// @raycast.description Creates argument alias to be used by commands
// @raycast.author Eugen Eistrach
// @raycast.authorURL https://github.com/EugenEistrachKC

const utils = require('./utils');

const createAlias = async () => {
  const [key, value] = await utils.args();
  const overwritten = await utils.getItem(key);

  await utils.addItem(key, value);
  console.log(`${overwritten ? 'Updated' : 'Created'} alias ${key}`);
};

createAlias();
