// off 클릭 시 src 속성 값을 on으로 변경
const like = document.querySelectorAll('.like');
const comment = document.querySelectorAll('.comment')
const send = document.querySelectorAll('.send')
// console.log(like,comment,send)
function onoff(name,status){
    status = 'on'? name.childNodes[0].src = `./images/${name}_on.png` : name.childNodes[0].src = `./images/${name}_off.png`
}
console.log(like.childNodes[0].src)
// name 의 자식 img의 src 속성값을 변경
like.addEventListener('click',function(){
    onoff(like,'on')
})

/* function onoff(name, status){
    return `./images/${name}_${status}.png`
} */
function onoff_v2(target, name, status){
    return target.children[0].src = `./images/${name}_${status}.png`
}
// this ==  현재 이벤트 대상 객체 키워드 ('이벤트종류',function(){ 이벤트 함수 내에서 사용할 때 })
like[0].addEventListener('click',function(){
    onoff_v2(this,'like','on')
})
comment[0].addEventListener('click',function(){
    onoff_v2(this,'comment','on')
})
send[0].addEventListener('click',function(){
    onoff_v2(this,'paper','on')
})
like[1].addEventListener('click',function(){
    onoff_v2(this,'like','on')
})
comment[1].addEventListener('click',function(){
    onoff_v2(this,'comment','on')
})
send[1].addEventListener('click',function(){
    onoff_v2(this,'paper','on')
})

