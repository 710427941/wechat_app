const getters = {
  token: state => state.user.userInfo ? state.user.userInfo.token : null
}
export default getters
