const TokenKey = 'wechat'

export function setSession(info) {
  console.log(info)
  return sessionStorage.setItem(TokenKey, JSON.stringify(info))
}

export function getSession() {
  return sessionStorage.getItem(TokenKey)
}

export function removeSession() {
  return sessionStorage.removeItem(TokenKey)
}

export function clearSession() {
  return sessionStorage.clear()
}
