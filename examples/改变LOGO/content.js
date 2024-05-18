// 用于避免设置全局变量,防止变量污染
{
  const img = document.createElement('img');
  img.src = chrome.runtime.getURL('images/logo.png');
  /** 这里有三个图片，对应不同的屏幕尺寸 **/
  const logo = document.getElementById('s_lg_img'); 
  const logo2 = document.getElementById('s_lg_img_new'); 
  const logo3 = document.getElementById('s_lg_img_aging'); 
  logo.style.cssText = logo2.style.cssText = logo3.style.cssText =  "height: auto;";
  logo.src = logo2.src = logo3.src = img.src;
}