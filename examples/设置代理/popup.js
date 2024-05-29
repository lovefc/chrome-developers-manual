// 参考文档：https://developer.chrome.com/docs/extensions/reference/api/proxy?hl=zh-cn

async function init() {
    const toggleProxy = document.getElementById('toggleProxy');
    // 获取当前的代理设置
    const currentSettings = await chrome.proxy.settings.get({});
    if (currentSettings.value.mode === "fixed_servers") {
        // 如果代理已启用
        toggleProxy.innerHTML = '关闭代理';
    } else {
        toggleProxy.innerHTML = '开启代理';
    }
}

// 设置代理
function setProxy(_host, _port) {
    chrome.proxy.settings.set({
        value: {
            mode: "fixed_servers",
            rules: {
                singleProxy: {
                    scheme: "http",
                    host: _host,
                    port: _port
                }
            }
        }
    }, () => {
        console.log('代理已设置');
    });
}

document.getElementById('toggleProxy').addEventListener('click', async () => {
    // 获取当前的代理设置
    const currentSettings = await chrome.proxy.settings.get({});
    // 检查代理是否已经启用
    if (currentSettings.value.mode === "fixed_servers") {
        // 如果代理已启用，禁用它
        await chrome.proxy.settings.clear({});
        alert('代理已关闭');
    } else {
        // 如果代理未启用，启用它
        setProxy('127.0.0.1', 7890);
        alert('代理已开启');
    }
});

init();