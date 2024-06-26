let domain = 'https://zh.cedarlakeventures.com/';

let now = new Date();
// 获取一年后的时间戳
let timestampInSeconds = now.getTime() + 1 * 31557600000;

// 要设置的cookie，用于自动登录
let cookie_array = [
    {
        "domain": ".cedarlakeventures.com",
        "expirationDate": timestampInSeconds,
        "httpOnly": true,
        "name": "lc",
        "path": "/",
        "sameSite": "unspecified",
        "secure": false,
        "storeId": "0",
        "value": "zh-Hans-CN",
        "url": domain		
    },
    {
        "domain": "zh.cedarlakeventures.com",
        "expirationDate": timestampInSeconds,
        "httpOnly": false,
        "name": "rememberEmail",
        "path": "/",
        "sameSite": "unspecified",
        "secure": false,
        "storeId": "0",
        "value": "true",
        "url": domain			
    },
    {
        "domain": "zh.cedarlakeventures.com",
        "expirationDate": timestampInSeconds,
        "httpOnly": false,
        "name": "emails",
        "path": "/",
        "sameSite": "unspecified",
        "secure": false,
        "storeId": "0",
        "value": "lovefc%4088.com%7C",
        "url": domain			
    },
    {
        "domain": ".cedarlakeventures.com",
        "expirationDate": timestampInSeconds,
        "httpOnly": true,
        "name": "SL",
        "path": "/",
        "sameSite": "lax",
        "secure": true,
        "storeId": "0",
        "value": "eyJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImlkIjoidTRmMTg5ZTJmYmI0ZjM3ZjFhMmY1NGIyYjNmNTk1MmIxIiwicHIiOiIxIiwiYWwiOiIxNzE1MjYzOTY5MTgxIiwibHIiOiIyIn0sImV4cCI6MTc0Njc5OTk2OSwibmJmIjoxNzE1MjYzOTY5LCJpYXQiOjE3MTUyNjM5Njl9.OMOsUj7v0rF3ys3h7UcXcvR7wgVTbyBalXy0wTriYms",
        "url": domain	    
	}
];

// 判断非空
function isEmpty(val) {
  return isUndefinedOrUninit(val) || isEmptyString(val) || isEmptyArrayOrObject(val);
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

// 获取全部cookie
async function getall(url) {
  try {
    const cookies = await chrome.cookies.getAll({ url: url });
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
  let cookies = await get("SL", domain);
  console.log(cookies);
  if (typeof cookies !== 'undefined' && cookies.hasOwnProperty('value')) {
    document.getElementById('cookie_text').innerHTML = cookies.value;
  }
});

// 设置
const button2 = document.getElementById('set');
button2.addEventListener('click', async function (event) {
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

