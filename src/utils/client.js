const CHAT = {
  websock: null,
  dataArr: [],
  threadPoxi() { // 实际调用的方法
    // 参数
    const agentData = '#PING#'
    // 若是ws开启状态
    setInterval(() => {
      this.websocketsend(agentData)
    }, 5000)
  },
  initWebSocket() { // 初始化weosocket
    // ws地址
    const wsuri = 'ws://192.168.0.165:9527'
    this.websock = new WebSocket(wsuri)
    this.websock.onmessage = this.websocketonmessage
    this.websock.onclose = this.websocketclose
    this.threadPoxi()
    console.log(this.dataArr)
  },
  websocketonmessage(e) { // 数据接收
    const data = JSON.parse(e.data)
    CHAT.dataArr.push(data)
  },
  websocketsend(agentData) { // 数据发送
    this.websock.send(agentData)
  },
  websocketclose(e) { // 关闭
    console.log('connection closed (' + e.code + ')')
  }
}
export default CHAT
