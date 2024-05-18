// chrome.action文档：https://developer.chrome.com/docs/extensions/reference/api/action?hl=zh-cn
// 请注意参考

let zhihu_count = 0; // 知乎消息

function setMsg(str) {
	chrome.action.setBadgeText({ text: str });
	chrome.action.setBadgeBackgroundColor({ color: '#B22222' });
}

// 获取知乎消息
async function getZhihuMsgCount() {
	let jsonData = { error: 'not' };
	try {
		const response = await fetch("https://www.zhihu.com/api/v4/me");
		jsonData = await response.json();
	} catch (error) {
		console.log(error);
		return;
	}
	if (jsonData.error) {
		console.log('未登录知乎');
		return;
	}
	// 读取所有的消息
	let messages_count = jsonData.messages_count;
	let default_notifications_count = jsonData.default_notifications_count;
	let vote_thank_notifications_count = jsonData.vote_thank_notifications_count;
	let follow_notifications_count = jsonData.follow_notifications_count;
	let number = messages_count + default_notifications_count + vote_thank_notifications_count + follow_notifications_count;

	// 设置图标和消息
	if (number && number != 0) {
		chrome.action.setIcon({ path: "images/zhihu.png" });
		setMsg(number.toPrecision());
	}
};

// 定时抓取
setInterval(function () {
	getZhihuMsgCount();
}, 6666);

