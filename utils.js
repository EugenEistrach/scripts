const storage = require('node-persist');

function args() {
  return process.argv.slice(2);
}

async function getItem(key) {
  await storage.init({ dir: 'storage/' });
  return storage.getItem(key);
}

async function addItem(key, value) {
  await storage.init({ dir: 'storage/' });
  await storage.setItem(key, value);
}

const expand = async (text) => {
  try {
    const item = await getItem(text.trim());
    return item || text;
  } catch (e) {
    console.log(e);
  }
};

exports.args = args;
exports.storage = storage;
exports.getItem = getItem;
exports.addItem = addItem;
exports.expand = expand;
