// 显示数据
function show(datas) {
	if (datas.length === 0) {
		document.getElementById("view").innerHTML = '<li><h3>还没有常访问网站</h3></li>';
		return;
	}
	for (let i = 0; i < datas.length; ++i) {
		let url = datas[i].url;
		let title = datas[i].title;
		let str = '<li><h3><a target="_blank" href="' + url + '">' + title + '</a></h3></li>';
		let parentElement = document.getElementById("view");
		parentElement.innerHTML += str;
	}
}

// 获取热门网站列表
function getWebList(){
	chrome.topSites.get(function(sites) {
		show(sites);
	});
}

getWebList();