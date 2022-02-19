const crypto = require("crypto")
const {Buffer} = require("buffer")
const scrypt = require("scrypt-js")

const ENCODING_FORMAT = "hex"
const DECODING_FORMAT = "utf8"
const ALGORITHM = "aes256"

let keyToHex = (str) => {
  // N - The CPU/memory cost; increasing this increases the overall difficulty
  // r - The block size; increasing this increases the dependency on memory latency and bandwidth
  // p - The parallelization cost; increasing this increases the dependency on multiprocessing
  const salt = "f8VQcI86MUgLzQCYsKRV"
  const N = 1024, r = 8, p = 1
  const dkLen = 16

  let buffedStr = Buffer.from(str, DECODING_FORMAT)
  let buffedSalt = Buffer.from(salt, DECODING_FORMAT)

  let uint8ArrKey = scrypt.syncScrypt(buffedStr, buffedSalt, N, r, p, dkLen)

  return Buffer.from(uint8ArrKey).toString(ENCODING_FORMAT)
}

export let encrypt = (str, key) => {
  const iv = crypto.randomBytes(8).toString(ENCODING_FORMAT)
  const hexedKey = keyToHex(key) // todo export
  const cipher = crypto.createCipheriv(ALGORITHM, hexedKey, iv)

  let encrypted = cipher.update(str, DECODING_FORMAT, ENCODING_FORMAT)
  encrypted += cipher.final(ENCODING_FORMAT)

  return `${encrypted}:${iv}` // todo separator
}

export let decrypt = (str, key) => {
  const [encryptedStr, iv] = str.split(":")
  const hexedKey = keyToHex(key)
  const decipher = crypto.createDecipheriv(ALGORITHM, hexedKey, iv)

  let decrypted = decipher.update(encryptedStr, ENCODING_FORMAT, DECODING_FORMAT)
  decrypted += decipher.final(DECODING_FORMAT)

  return decrypted
}


