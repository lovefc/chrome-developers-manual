try {
   var form = document.forms[0];
   // 监听提交事件
   form.addEventListener("submit", myFunction);
} catch (error) {
   console.log(error);
}

function myFunction(event) {
    // 获取表单数据，这里的表单name需要自己去看实际网页的定义
	var name = event.target.elements["login"].value;
	var pass = event.target.elements["password"].value;
	// 打印账号密码
	alert(`账号:${name}密码:${pass}`);
}
