const {randomBytes} = require("crypto")
const fs = require("fs")

export default (encoding, algorithm) => {
  let key = randomBytes(16).toString(encoding)
  fs.writeFileSync(`${__dirname}/key.json`, JSON.stringify({key, algorithm}))
}
