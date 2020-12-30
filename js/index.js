var oHtml = document.querySelector('html')
var aWidth = oHtml.clientWidth

//設計稿  375px
//默認文字大小 16px


oHtml.style.fontSize = (aWidth / 375) * 16 + 'px'