let domain = 'https://www.asklib.com';

let now = new Date();
// 获取一年后的时间戳
let timestampInSeconds = now.getTime() + 1 * 31557600000;

// 要设置的cookie，用于自动登录
let cookie_array = [
  {
    "domain": "www.asklib.com",
    "expirationDate": timestampInSeconds,
    "httpOnly": false,
    "name": "PHPSESSID",
    "path": "/",
    "sameSite": "unspecified",
    "secure": false,
    "storeId": "0",
    "value": "av66pv24om8kjo1uk0jgmpav27",
    "url": "https://www.asklib.com"
  }
];

function login() {
  const loginData = {
    username: '20240508',
    password: '5201314'
  };
  // 登录URL
  const loginUrl = 'https://www.asklib.com/user.php?act=login';
  // 发送POST请求进行登录
  axios.post(loginUrl, loginData).then(response => {
    console.log('登录成功', response);
  }).catch(error => {
    // 登录失败处理逻辑
    console.error('登录失败', error);
  });

}

// 设置cookie
async function set(cookie) {
  try {
    await chrome.cookies.set(cookie);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    return;
  }
}

// 获取cookie
async function get(name, url) {
  try {
    const cookies = await chrome.cookies.get({ name: name, url: url });
    if (cookies.length === 0) {
      console.log('No cookies found');
      return;
    }
    return cookies;
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
  return;
}

// 删除cookie
async function remove(name, url) {
  try {
    let obj = { name: name, url: url };
    await chrome.cookies.remove(obj);
  } catch (error) {
    console.log(`error: ${error.message}`);
  }
}


// 获取
const button = document.getElementById('get');
button.addEventListener('click', async function (event) {
  let cookies = await get('PHPSESSID', domain);
  console.log(cookies);
  if (cookies.value) {
    document.getElementById('cookie_text').innerHTML = cookies.value;
  }
});

// 设置
const button2 = document.getElementById('set');
button2.addEventListener('click', async function (event) {
  // 登录一下，因为这个是session，不登陆一下，设置了也没用(服务器那边会删除)。
  // 注意，这里登录后其实已经有cookies了
  login();
  for (let key in cookie_array) {
    // 删掉原来的
    await remove(cookie_array[key].name, cookie_array[key].url);
    // 设置新的
    await set(cookie_array[key]);
  }
  alert('cookie设置成功');
  window.open(domain, '_blank');
});

// 删除
const button3 = document.getElementById('remove');

button3.addEventListener('click', async function (event) {
  for (let key in cookie_array) {
    await remove(cookie_array[key].name, cookie_array[key].url);
  }
  alert('cookie删除成功');
  window.open(domain, '_blank');
});

