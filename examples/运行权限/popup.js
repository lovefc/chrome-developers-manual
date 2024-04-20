// 截图主函数
async function jietu() {
  //捕获指定窗口中当前活动标签页的可见区域。
  const screenshotUrl = await chrome.tabs.captureVisibleTab();
  // 读取扩展中的截图网页
  const viewTabUrl = chrome.runtime.getURL('screenshot.html');
  let targetId = null;

  // 监听标签更新事件
  chrome.tabs.onUpdated.addListener(function listener(tabId, changedProps) {

    if (tabId != targetId || changedProps.status != 'complete') return;
	// 移除监听
    chrome.tabs.onUpdated.removeListener(listener);
	// 给页面发送消息，比如screenshotUrl-截图的url保存地址
    chrome.tabs.sendMessage(tabId, { msg: 'screenshot', data: screenshotUrl });
  });
  
  // 创建一个页面，url指定位刚才的截图网页
  const tab = await chrome.tabs.create({ url: viewTabUrl });
  targetId = tab.id;
}

// 获取按钮元素
const button = document.getElementById('jietu');
 
// 为按钮添加点击事件监听器
button.addEventListener('click', function(event) {
    jietu();
});
