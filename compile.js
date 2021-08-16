const path = require("path");
const fs = require("fs");
const solc = require("solc");

const indexPath = path.resolve(__dirname, "contracts", "Inbox.sol");

const source = fs.readFileSync(indexPath, "utf8");

module.exports = solc.compile(source, 1).contracts[":Inbox"];