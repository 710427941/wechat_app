import service from 'utils/service'
export function register(username, password, nickname) {
  const data = {
    username,
    password,
    nickname
  }
  return service({
    url: '/register',
    method: 'post',
    data
  })
}
