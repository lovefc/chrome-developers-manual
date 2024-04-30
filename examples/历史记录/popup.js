// 显示数据
function show(historyItems) {
	console.log(historyItems);
	if (historyItems.length === 0) {
		document.getElementById("view").innerHTML = '<li><h3>当前搜索词搜索不到结果</h3></li>';
		return;
	}
	for (let i = 0; i < historyItems.length; ++i) {
		let url = historyItems[i].url;
		let title = historyItems[i].title;
		let str = '<li><h3><a target="_blank" href="' + url + '">' + title + '</a></h3></li>';
		let parentElement = document.getElementById("view");
		parentElement.innerHTML += str;
	}
}

// 查找历史记录
function buildTypedUrlList(txt) {
	//从当前时间减去一周的微秒。
	let microsecondsPerWeek = 1000 * 60 * 60 * 24 * 365;
	let oneWeekAgo = new Date().getTime() - microsecondsPerWeek;
	chrome.history.search(
		{
			text: txt,
			startTime: oneWeekAgo, // 不填写默认为24小时
			//endTime:xxxx，结束时间
			maxResults: 10, // 条数
		}, show
	);
}


// 获取按钮元素
const button = document.getElementById('history');
// 为按钮添加点击事件监听器
button.addEventListener('click', function (event) {
	let txt = document.getElementById("text").value;
	document.getElementById("view").innerHTML = "";
	buildTypedUrlList(txt);
});