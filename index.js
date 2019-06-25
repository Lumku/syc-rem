export function rem(ratio=16,scale=false) {
    let dpr = window.devicePixelRatio
    let meta = document.querySelector('meta[name="viewport"]')
    meta.content = `width=device-width,initial-scale=${1 / dpr}`
    if(scale){
        meta.content+=`,maximum-scale=1.0, minimum-scale=1.0, user-scalable=no`
    }
    //由于需要获取理想视口的宽度，所以需要事先增加meta标签
    let fontSize = document.documentElement.clientWidth / ratio
    let styleNode = document.createElement('style')
    styleNode.innerHTML = `html{font-size:${fontSize}px !important}`
    document.querySelector('head').appendChild(styleNode)
} 



