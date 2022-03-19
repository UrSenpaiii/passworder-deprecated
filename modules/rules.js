const REGEX_USERNAME = /^[a-zA-Z0-9-_.]{3,}$/
const REGEX_EMAIL = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const REGEX_PASSWORD_DIGITS = /\d/
const REGEX_PASSWORD_LOWERCASE = /[a-z]/
const REGEX_PASSWORD_UPPERCASE = /[A-Z]/
const REGEX_PASSWORD_SPECIAL_CHARS = /[#?!@$%^&*,.-]/

export let isEmptyValidation = (fieldValue, errorIndex) => !fieldValue ? 0 : errorIndex

export let classUpdate = (field, errorIndex) => {
  field.classList.remove("is-invalid", "is-valid")
  if (field.value || errorIndex !== -1) field.classList.add(errorIndex >= 0 ? "is-invalid" : "is-valid")
}

export let usernameValidation = (username) => {
  if (!username) return -1
  if (username.length < 3) return 1
  if (!REGEX_USERNAME.test(username)) return 2
}

export let emailValidation = (email) => {
  if (!email) return -1
  if (email.length < 6) return 1
  if (!REGEX_EMAIL.test(email)) return 2
}

export let passwordValidation = (password1) => {
  if (!password1) return -1;
  if (password1.length < 8) return 1
  if (!REGEX_PASSWORD_LOWERCASE.test(password1)) return 2
  if (!REGEX_PASSWORD_UPPERCASE.test(password1)) return 3
  if (!REGEX_PASSWORD_DIGITS.test(password1)) return 4
  if (!REGEX_PASSWORD_SPECIAL_CHARS.test(password1)) return 5
}

export let passwordsValidation = (password1, password2) => {
  const isEquals = password1 === password2
  if (isEquals || !password2) return -1
  if (!isEquals) return 1
}
