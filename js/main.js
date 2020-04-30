// 声明键盘字母数组
var btnArray = [
  ['q','w','e','r','t','y','u','i','o','p'],
  ['a','s','d','f','g','h','j','k','l'],
  ['z','x','c','v','b','n','m']
]

// 声明 hash
var btnWebsiteHash = {
  q:'qq.com',
  w:'weibo.com',
  a:'acfun.cn',
  g:'google.com',
  b:'bilibili.com',
  m:'meituan.com'
}

// 生成按钮元素并放入页面
for (let i = 0; i < btnArray.length; i++) {
  btnline = document.createElement('div')
  btnline.className = 'btnline ' + 'line' + (i + 1) + ' clearfix'
  for (let j = 0; j < btnArray[i].length; j++) {
    btn = document.createElement('kbd')
    btn.className = 'btn'
    btn.innerText = btnArray[i][j]
    btnline.append(btn)
  }
  keyboard.append(btnline)
}

// 给按钮添加交互

