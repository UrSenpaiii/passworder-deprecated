const {randomBytes, createHash, createCipheriv, createDecipheriv} = require("crypto")

const ENCODING_FORMAT = "hex"
const DECODING_FORMAT = "utf8"
const ALGORITHM = "aes256"

export let encrypt = (json, key) => {
  if (typeof json !== "object") return null

  const str = JSON.stringify(json)
  const iv = randomBytes(8).toString(ENCODING_FORMAT)
  const hashedKey = createHash("sha256").update(key).digest()
  const cipher = createCipheriv(ALGORITHM, hashedKey, iv)

  let encrypted = cipher.update(str, DECODING_FORMAT, ENCODING_FORMAT) + cipher.final(ENCODING_FORMAT)

  return `${encrypted}:${iv}`
}

export let decrypt = (str, key) => {
  const [encryptedStr, iv] = str.split(":")
  const hashedKey = createHash("sha256").update(key).digest()
  const decipher = createDecipheriv(ALGORITHM, hashedKey, iv)

  let decrypted = decipher.update(encryptedStr, ENCODING_FORMAT, DECODING_FORMAT)

  try {
    decrypted += decipher.final(DECODING_FORMAT)
    decrypted = JSON.parse(decrypted)
  } catch (e) {
    return null
  }

  return decrypted
}


