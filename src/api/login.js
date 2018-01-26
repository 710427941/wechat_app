import service from '@/utils/service'

export function loginByUsername(username, password) {
  const data = {
    username,
    password
  }
  return service({
    url: '/login',
    method: 'post',
    data
  })
}

export function logout() {
  return service({
    url: '/logout',
    method: 'post'
  })
}

export function getUserInfo(token) {
  return service({
    url: '/info',
    method: 'get',
    params: { token }
  })
}
