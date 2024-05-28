document.getElementById('speakContent').addEventListener('click', async () => {
    // 定义一个函数来获取网页内容并读出
    function speakText(text) {
        const synth = window.speechSynthesis;
        if (synth.speaking) {
            // 如果正在说话，则停止
            synth.cancel();
        }
        if (text !== '') {
            const utterThis = new SpeechSynthesisUtterance(text);
            synth.speak(utterThis);
        }
    }

    // 获取当前激活的标签页ID
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    const tabId = tab.id;

    // 执行脚本并获取页面内容
    const [result] = await chrome.scripting.executeScript({
        target: { tabId: tabId },
        function: () => document.body.innerText
    });

    speakText(result.result); // 读出网页内容
});
