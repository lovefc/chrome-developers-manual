document.getElementById('open-tab').addEventListener('click', function() {
  chrome.runtime.sendMessage({ action: 'openTab', url: 'https://www.baidu.com' });
});

document.getElementById('close-tab').addEventListener('click', function() {
  chrome.runtime.sendMessage({ action: 'closeTab' });
});
