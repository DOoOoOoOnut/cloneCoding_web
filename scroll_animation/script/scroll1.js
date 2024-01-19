// 변수 만들기

const btn = document.querySelectorAll('.btn_wrap > button')
const bg = document.querySelectorAll('.bg')
console.log(btn,bg)

btn.forEach((t,i)=>{
    t.addEventListener('click',()=>{
        window.scrollTo({left:0,top:bg[i].offsetTop})
    })
})
// a에 동적 기능 추가했을 때 버벅거리는 이유 => a태그가 원래 가지고 있는 href 속성과 충돌해 어떤 명령을 먼저 처리해야 할지 버벅거림.
/* btn.forEach((t,i)=>{
    t.addEventListener('click',(e)=>{ // 1. e라는 매개변수 생성
        e.preventDefalt() // 2. 동적으로 처리한 명령 우선 수행 명령어
        window.scrollTo({left:0,top:bg[i].offsetTop})
    })
}) */