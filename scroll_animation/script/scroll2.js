const bg = document.querySelectorAll('.bg');
const index = document.querySelectorAll('.indexBtn')
const bar = document.querySelectorAll('.bar')
console.log(bg,index,bar)
bar[0].classList.add('active')

// 페이지 이동
index.forEach((t,i)=>{
    t.addEventListener('click',()=>{
        window.scrollTo({left:0,top:bg[i].offsetTop})
    })
    if(window.offsetTop == bg[i].offsetTop){
        bar[i].classList.add('active')
    }
})
