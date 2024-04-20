// 监听消息，获取发送来的url地址
chrome.runtime.onMessage.addListener(function (request) {
  if (request.msg === 'screenshot') {
	// 图片地址赋值
    document.getElementById('target').src = request.data;
  }
});
