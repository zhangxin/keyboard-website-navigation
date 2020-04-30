// 声明键盘字母数组
let btnArray = [
  ['q','w','e','r','t','y','u','i','o','p'],
  ['a','s','d','f','g','h','j','k','l'],
  ['z','x','c','v','b','n','m']
]

// 声明 hash
let btnWebsiteHash = {
  q:'qq.com',
  w:'weibo.com',
  a:'acfun.cn',
  g:'google.com',
  b:'bilibili.com',
  m:'meituan.com'
}
// 未解决 bug
let hashInLocalStorage = JSON.parse(localStorage.getItem('localWebsiteHash') || '')
if(hashInLocalStorage) {
  btnWebsiteHash = hashInLocalStorage
}

// 生成按钮元素并放入页面
for (let i = 0; i < btnArray.length; i++) {
  let btnline = document.createElement('div')
  btnline.className = 'btnline ' + 'line' + (i + 1) + ' clearfix' 

  for (let j = 0; j < btnArray[i].length; j++) {
    // 生成键盘按键
    let keystoke = document.createElement('kbd')
    keystoke.className = 'btn'
    keystoke.innerText = btnArray[i][j]

    // 生成编辑按钮并将其 id 设置为键盘的字符
    let editBtn = document.createElement('button')
    editBtn.innerText = 'M'
    editBtn.id = keystoke.innerText
    // 添加编辑网站功能
    editBtn.onclick = function() {
      let key = this.id
      let addedWebsite = prompt('请添加一个网址')
      btnWebsiteHash[key] = addedWebsite
      localStorage.setItem('localWebsiteHash', JSON.stringify(btnWebsiteHash))
    }

    keystoke.append(editBtn)
    btnline.append(keystoke)
  }

  keyboard.append(btnline)
}

// 给按钮添加交互
document.onkeydown = function(event) {
  let btnKey = event.key
  let website = btnWebsiteHash[btnKey]
  if(website) {
    window.open('http://' + website,'_blank')
  }
}


