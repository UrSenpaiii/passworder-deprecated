const crypto = require("crypto")
const util = require("util")

const ENCODING_FORMAT = "hex"
const DECODING_FORMAT = "utf8"
const ALGORITHM = "aes256"

let scryptKey = async () => {
  return util.promisify(crypto.scrypt)("a!", "salt", 16)
}

console.log(scryptKey())

export let encrypt = (str, key) => {
  let iv = crypto.randomBytes(8).toString(ENCODING_FORMAT)
  const cipher = crypto.createCipheriv(ALGORITHM, key, iv)

  let encrypted = cipher.update(str, DECODING_FORMAT, ENCODING_FORMAT)
  encrypted += cipher.final(ENCODING_FORMAT)

  return `${encrypted}:${iv}`
}

export let decrypt = (str, key) => {
  const [encryptedStr, iv] = str.split(":")
  const decipher = crypto.createDecipheriv(ALGORITHM, key, iv)

  let decrypted = decipher.update(encryptedStr, ENCODING_FORMAT, DECODING_FORMAT)
  decrypted += decipher.final(DECODING_FORMAT)

  return decrypted
}


