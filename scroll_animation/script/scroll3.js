const txt = document.querySelector('.txt')
const info = document.querySelectorAll('.info')
console.log(txt,info)
console.log(txt.children)

window.addEventListener('scroll',()=>{
    if(txt.getBoundingClientRect().top <= 400){
        txt.children[0].style.animation = 'opacity_scale 1s both'
    }
})

window.addEventListener('scroll',()=>{
    if(info[0].getBoundingClientRect().top <= 400){
        info[0].children[0].style.animation = 'translate1 1s both'
    }
})
window.addEventListener('scroll',()=>{
    if(info[1].getBoundingClientRect().top <= 400){
        info[1].children[0].style.animation = 'translate2 1s both'
    }
})
// 스크롤 이벤트를 이용한 등장 애니메이션 제작 시 if 조건대상은 실제애니메이션 적용 대상이 아닌 그 대상을 묶고 있는 가까운 부모 그룹으로 처리하는 게 좋다. (인덱스도 잊지 말고 작성하기)
// h1에 등장이펙트를 주고 싶다면? h1이 보일 때 h1에 넣어라가 아닌 부모 .txt가 뷰포트 영역에 등장할 때 자식 h1에 이펙트를 넣어라~