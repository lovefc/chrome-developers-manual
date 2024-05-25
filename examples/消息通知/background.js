// 请注意，背景脚本是独立的，运行在后台的脚本

// 创建通知
function createNotification(title, msg) {
    const notificationOptions = {
        type: 'basic',
        iconUrl: 'images/icon.png', // 通知图标
        title: title, // 通知标题
        message: msg // 通知消息
    };
    chrome.notifications.create('', notificationOptions, (notificationId) => {
        console.log(`Created notification with ID: ${notificationId}`);
    });
}

// 接受消息
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
{
    console.log('收到来自content-script的消息：');
    console.log(request, sender, sendResponse);
    //做出回应 
    if(request.cmd == 'background'){
		// 因为是独立脚本，所以你不能用alert来输出消息
		// 具体去参考后台脚本这个教程
	    createNotification('一个通知', request.value);
		sendResponse('background已收到popup主动发送的消息');
		return;
	}	
    sendResponse('background已收到你的消息');
});