{
    // 主动给发送消息
    chrome.runtime.sendMessage({ text: '你好，我是content-script呀，我主动发消息给后台！' }, function (response) {
        console.log('收到来自后台的回复：' + response);
    });

    // 监听消息
    chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
        if (request.cmd == 'content') {
            alert(request.value);
        }
        sendResponse('content收到了你的消息！');
    });
}
