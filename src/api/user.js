import service from 'utils/service'

export function getAllUser() {
  return service({
    url: '/getall_user',
    method: 'get'
  })
}
