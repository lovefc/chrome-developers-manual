/**
 * 获取书签并且搜索
 */

let bookmarks = [];
// 获取书签列表
chrome.bookmarks.getTree(function (bookmarkTreeNodes) {
  // 递归遍历书签树节点
  function traverseBookmarks(nodes) {
    nodes.forEach(function (node) {
      if (node.url) {
        // 将书签信息添加到数组中
        bookmarks.push({
          title: node.title,
          url: node.url
        });
      }
      // 递归遍历子节点
      if (node.children) {
        traverseBookmarks(node.children);
      }
    });
  }

  // 遍历书签树
  traverseBookmarks(bookmarkTreeNodes);
});

// 定义搜索函数
function searchBookmarks(elm, query) {

  // 创建一个空数组来存储搜索结果
  let searchResults = [];

  // 遍历书签列表
  bookmarks.forEach(function (bookmark) {
    // 检查书签标题或 URL 是否包含搜索关键词
    if (bookmark.title.toLowerCase().includes(query) || bookmark.url.toLowerCase().includes(query)) {
      // 将搜索结果添加到数组中
      searchResults.push(bookmark);
    }
  });

  // 显示搜索结果
  show(searchResults, elm);
}

// 显示数据
function show(items, elm) {
  if (items.length === 0) {
    elm.innerHTML = '<li><h3>当前搜索词搜索不到结果</h3></li>';
    return;
  }
  for (let i = 0; i < items.length; ++i) {
    let url = items[i].url;
    let title = items[i].title;
    let str = '<li><h3><a target="_blank" href="' + url + '">' + title + '</a></h3></li>';
    elm.innerHTML += str;
  }
}

// 点击搜索
document.getElementById('search').addEventListener('click', function () {
  let searchResultsElement = document.getElementById("searchResults");
  searchResultsElement.innerHTML = "";
  // 获取搜索关键词
  let query = document.getElementById("text").value.toLowerCase();
  searchBookmarks(searchResultsElement, query);
});

// 添加 keydown 事件监听器
document.getElementById("text").addEventListener("keydown", function (event) {
  // 检查是否按下 Enter 键
  if (event.keyCode === 13) {
    let searchResultsElement = document.getElementById("searchResults");
    searchResultsElement.innerHTML = "";
    // 获取搜索关键词
    let query = this.value.toLowerCase();
    searchBookmarks(searchResultsElement, query);
  }
});