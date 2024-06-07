// 获取经纬度,要在浏览器中开启位置定位功能
function getGeolocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const coords = position.coords;
      msg(`经纬度:${coords.longitude},${coords.latitude}`);
    }, (error) => {
      msg('获取地理位置失败');
      console.log(`获取地理位置失败: ${error.message}`);
    });
  } else {
    msg('浏览器不支持地理位置或者未开启功能');
    console.log('浏览器不支持地理位置或者未开启功能');
  }
}

function msg(str) {
  document.getElementById('location').innerHTML = str;
}

document.getElementById('get-location').addEventListener('click', () => {
  getGeolocation();
});

