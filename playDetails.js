// 弹幕按钮
document.getElementById('danmu__btn').onclick = function () {
  document
    .getElementById('danmu__btn')
    .getElementsByTagName('div')[0]
    .classList.toggle('danmu__btn')
  document
    .getElementById('danmu__btn')
    .getElementsByTagName('span')[0]
    .classList.toggle('text-red-500')
}
// 明星头像移动右箭头
let x = 0
document.getElementById('head__right').onclick = function () {
  x = x == -336 ? -336 : x - 84
  document.getElementById('headList').style.transform = 'translateX(' + x + 'px)'
  document.getElementById('headList').classList.add('transition')
}
// 明星头像移动左箭头
document.getElementById('head__left').onclick = function () {
  x = x == 0 ? 0 : x + 84
  document.getElementById('headList').style.transform = 'translateX(' + x + 'px)'
  document.getElementById('headList').classList.add('transition')
}

// 创建页码列表
for (let i = 2; i <= 30; i++) {
  let lis = document.createElement('li')
  let as = document.createElement('a')
  lis.classList.add('page__num__li')
  as.setAttribute('href', '')
  as.classList.add('page__num__a')
  as.innerText = i < 10 ? '0' + i : i
  lis.appendChild(as)
  document.getElementsByClassName('pageTab__1-30')[0].appendChild(lis)
}
for (let i = 1; i <= 30; i++) {
  let lis = document.createElement('li')
  let as = document.createElement('a')
  lis.classList.add('page__num__li')
  as.setAttribute('href', '')
  as.classList.add('page__num__a')
  as.innerText = i + 30
  lis.appendChild(as)
  document.getElementsByClassName('pageTab__31-60')[0].appendChild(lis)
}
for (let i = 1; i <= 7; i++) {
  let lis = document.createElement('li')
  let as = document.createElement('a')
  lis.classList.add('page__num__li')
  as.setAttribute('href', '')
  as.classList.add('page__num__a')
  as.innerText = i + 60
  lis.appendChild(as)
  document.getElementsByClassName('pageTab__61-67')[0].appendChild(lis)
}
// 创建精彩周边列表
for (let i = 1; i <= 30; i++) {
  let as = document.createElement('a')
  let imgs = document.createElement('img')
  let ps = document.createElement('p')
  as.setAttribute('href', '')
  as.classList.add('perfect__a')
  imgs.classList.add('perfect__img')
  imgs.setAttribute('src', './movie1.jpg')
  imgs.setAttribute('alt', '')
  ps.innerText = '窦骁亲自解读燕洵：他是一匹孤独的狼！'
  as.appendChild(imgs)
  as.appendChild(ps)
  document.getElementById('perfectPer').appendChild(as)
}
// 段落隐藏按钮
document.getElementById('detail__pHidden__btn').onclick = function () {
  document.getElementsByClassName('info__tab__detail')[0].classList.toggle('p__hidden')
  this.getElementsByTagName('svg')[0].classList.toggle('btn__rotate180')
  this.getElementsByTagName('span')[0].innerText = this.getElementsByTagName(
    'svg'
  )[0].classList.contains('btn__rotate180')
    ? '收起'
    : '详情'
}
document.getElementById('story__pHidden__btn').onclick = function () {
  document.getElementsByClassName('info__tab__story')[0].classList.toggle('p__hidden')
  document.getElementById('story__detail').classList.toggle('hidden')
  this.getElementsByTagName('svg')[0].classList.toggle('btn__rotate180')
  this.getElementsByTagName('span')[0].innerText = this.getElementsByTagName(
    'svg'
  )[0].classList.contains('btn__rotate180')
    ? '收起'
    : '详情'
}
// let num = 1;
// document.styleSheets[0].addRule(
//   "#actorList__actor" + num + ":checked ~ .actorList__actor2",
//   "display:flex"
// );

// 图片上传
document.getElementById('pictureFile').onclick = function () {
  document.getElementById('pictureFileInput').click()
}

// 深度解读
let ul_deeply__btn = document.querySelectorAll('.ul-deeply button')
for (let i = 0; i < ul_deeply__btn.length; i++) {
  ul_deeply__btn[i].onclick = function () {
    this.parentNode.classList.toggle('p-hidden-4')
    this.lastElementChild.classList.toggle('btn__rotate180')
    this.firstElementChild.innerText = this.lastElementChild.classList.contains('btn__rotate180')
      ? '收起'
      : '全文'
  }
}

// 滚轮事件显示header
let el_header = document.querySelector('header')
window.onscroll = function () {
  let top = document.documentElement.scrollTop || document.body.scrollTop //滚轮高度
  let height = document.documentElement.clientHeight || document.body.clientHeight //屏幕高度
  if (top > height) {
    el_header.classList.replace('absolute', 'fixed')
    el_header.classList.replace('bg-opacity-10', 'bg-gray-900')
  } else {
    el_header.classList.replace('fixed', 'absolute')
    el_header.classList.replace('bg-gray-900', 'bg-opacity-10')
  }
}
// 深度解读--查看更多
let ul_deeply = document.querySelector('.ul-deeply')
document.querySelector('.read--more').onclick = function () {
  ul_deeply.classList.toggle('h-96')
  this.firstElementChild.innerText = ul_deeply.classList.contains('h-96') ? '查看更多' : '收起'
}
