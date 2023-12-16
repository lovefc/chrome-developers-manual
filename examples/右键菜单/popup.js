// 创建菜单
function create_menus(){
	let title = '自定义菜单';
	let context = 'page';
}
// 删除菜单
/** **/
// 菜单事件
/** **/

document.getElementById("menu").onclick = function() {
  create_menus();
  alert('创建成功');
};
	chrome.runtime.onInstalled.addListener(function () {
        let parent = chrome.contextMenus.create({
		   title: '父级菜单',
		   id: 'parent'
		});
	});
