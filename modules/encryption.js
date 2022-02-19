const crypto = require("crypto")
const fs = require("fs")
const util= require("util")

const cipherData = fs.readFileSync(`${__dirname}/key.json`)
const {key, algorithm} = JSON.parse(cipherData)

const encodingFormat = "hex"
const decodingFormat = "utf8"

let encrypt = (str) => {
  let iv = crypto.randomBytes(8).toString(encodingFormat)
  const cipher = crypto.createCipheriv(algorithm, key, iv)

  let encrypted = cipher.update(str, decodingFormat, encodingFormat)
  encrypted += cipher.final(encodingFormat)

  return `${encrypted}:${iv}`
}

let decrypt = (str) => {
  const [encryptedStr, iv] = str.split(":")
  const decipher = crypto.createDecipheriv(algorithm, key, iv)

  let decrypted = decipher.update(encryptedStr, encryptedStr, decodingFormat)
  decrypted += decipher.final(decodingFormat)

  return decrypted
}


