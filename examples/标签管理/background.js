// 打开新标签页
function openNewTab(url) {
  chrome.tabs.create({ url: url });
}

// 关闭当前标签页
function closeCurrentTab() {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.remove(tabs[0].id);
  });
}

// 你可以导出这些函数，以便在popup脚本或其他脚本中调用
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.action === 'openTab') {
    openNewTab(message.url);
  } else if (message.action === 'closeTab') {
    closeCurrentTab();
  }
});
