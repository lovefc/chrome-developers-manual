function change_icon(color){
	// 生成一个16*16的随机颜色图片
	const canvas = new OffscreenCanvas(16, 16);
	const context = canvas.getContext('2d');
	context.clearRect(0, 0, 16, 16);
	context.fillStyle = color;  // 随机颜色
	context.fillRect(0, 0, 16, 16);
	const imageData = context.getImageData(0, 0, 16, 16);
	// 改变图标
    chrome.action.setIcon({imageData: imageData}, () => { console.log('改变成功'); });
}

/** 点击菜单触发的回调 **/
/** info的对象
{
    "editable": false,
    "frameId": 0,
    "frameUrl": "chrome://extensions/",
    "menuItemId": "child1",
    "pageUrl": "chrome://extensions/",
    "parentMenuItemId": "parent"
}
*/
function genericOnClick(info) {
	console.log(info);
	// 点击自定义图标1，图标就变成蓝色
	if(info.menuItemId =='child1'){
		 change_icon('#0000FF');
	}
	// 点击自定义图标1，图标就变成黑
	if(info.menuItemId =='child2'){
		 change_icon('#000');
	}
	if(info.pageUrl == 'https://www.baidu.com/'){
		
	}
}

/** 点击菜单监听 **/
chrome.contextMenus.onClicked.addListener(genericOnClick);


// 扩展安装监听
chrome.runtime.onInstalled.addListener(function () {
	// 父级菜单
    let parent = chrome.contextMenus.create({
		   title: '父级菜单',
		   id: 'parent'
    });
	
	// 子菜单-1
    chrome.contextMenus.create({
       title: '自定义菜单',
       parentId: parent,
       id: 'child1'
    });	
	
	// 子菜单-2
    chrome.contextMenus.create({
       title: '自定义菜单2',
       parentId: parent,
       id: 'child2'
    });		
});