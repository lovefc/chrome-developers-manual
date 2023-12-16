// 生成随机颜色
function randomColor() {
  // 生成随机红色值
  let red = Math.floor(Math.random() * 255);
  // 生成随机绿色值
  let green = Math.floor(Math.random() * 255);
  // 生成随机蓝色值
  let blue = Math.floor(Math.random() * 255);
  // 将颜色值转换为十六进制
  let color = `#${red}${green}${blue}`;
  // 返回颜色值
  return color;
}

function change_icon(){
	// 生成一个16*16的随机颜色图片
	const canvas = new OffscreenCanvas(16, 16);
	const context = canvas.getContext('2d');
	context.clearRect(0, 0, 16, 16);
	context.fillStyle = randomColor();  // 随机颜色
	context.fillRect(0, 0, 16, 16);
	const imageData = context.getImageData(0, 0, 16, 16);
	// 改变图标
    chrome.action.setIcon({imageData: imageData}, () => { console.log('改变成功'); });
}

document.getElementById("icon").onclick = function() {
  change_icon();
  alert('改变成功');
};
