const crypto = require("crypto")
const fs = require("fs")

export default (encoding, algorithm) => {
  let key = crypto.randomBytes(16).toString(encoding)
  fs.writeFileSync(`${__dirname}/key.json`, JSON.stringify({key, algorithm}))
}
