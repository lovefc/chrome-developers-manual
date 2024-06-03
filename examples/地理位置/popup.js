// 获取经纬度,要在浏览器中开启位置定位功能
function getGeolocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const coords = position.coords;
      const { formattedLat, formattedLng } = convertLatLngToDMS(coords.latitude, coords.longitude);
      let str = `${formattedLng},${formattedLat}`;
      msg(str);
      //msg(`经纬度:${coords.latitude},${coords.longitude}`);
    }, (error) => {
      msg('获取地理位置失败');
      console.log(`获取地理位置失败: ${error.message}`);
    });
  } else {
    msg('浏览器不支持地理位置或者未开启功能');
    console.log('浏览器不支持地理位置或者未开启功能');
  }
}

// 经纬度转换成dms
function convertLatLngToDMS(lat, lng) {
  // 将十进制的经纬度转换为度分秒格式
  function toDMS(value) {
    const absoluteValue = Math.abs(value);
    const degrees = Math.floor(absoluteValue);
    const minutes = Math.floor((absoluteValue - degrees) * 60);
    const seconds = ((absoluteValue - degrees - minutes / 60) * 3600).toFixed(2);
    return { degrees, minutes, seconds };
  }
  // 转换纬度
  const latDMS = toDMS(lat);
  const latDirection = lat >= 0 ? 'N' : 'S';
  // 转换经度
  const lngDMS = toDMS(lng);
  const lngDirection = lng >= 0 ? 'E' : 'W';
  // 构建格式化的字符串
  const formattedLat = `${latDirection}${latDMS.degrees}°${latDMS.minutes}'${latDMS.seconds}"`;
  const formattedLng = `${lngDirection}${lngDMS.degrees}°${lngDMS.minutes}'${lngDMS.seconds}"`;
  return { formattedLat, formattedLng };
}

function msg(str) {
  document.getElementById('location').innerHTML = str;
}

document.getElementById('get-location').addEventListener('click', () => {
  getGeolocation();
});

