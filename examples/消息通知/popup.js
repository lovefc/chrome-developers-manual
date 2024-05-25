// 监听消息
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log('收到来自content-script的消息：');
    console.log(request, sender, sendResponse);
    //做出回应
    sendResponse('popup已收到你的消息');
});


// 获取页面id，然后给指定的页面发送消息
function sendMessageToContentScript(message, callback) {
    // 获取到页面id
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        //console.log(tabs);
        // 发送消息
        chrome.tabs.sendMessage(tabs[0].id, message, function (response) {
            if (callback) callback(response);
        });
    });
}

// 发消息给content
document.getElementById('content').addEventListener('click', function (event) {
    sendMessageToContentScript({ cmd: 'content', value: '你好，我是popup！' }, function (response) {
        console.log('来自content的回复：' + response);
    });
});

// 发消息给background
document.getElementById('background').addEventListener('click', function (event) {
	chrome.runtime.sendMessage({ cmd: 'background', value: '你好，我是popup，我给你发信息啦！' }, function(response) {
		console.log('来自background的回复：' + response);
	});	
});

