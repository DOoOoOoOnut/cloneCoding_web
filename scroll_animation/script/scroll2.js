const bg = document.querySelectorAll('.bg');
const index = document.querySelectorAll('.indexBtn')
const bar = document.querySelectorAll('.bar')
const circle = document.querySelector('.circle')
console.log(bg,index,bar,circle)
bar[0].classList.add('active')

// 페이지 이동
index.forEach((t,i)=>{
    t.addEventListener('click',(e)=>{
        e.preventDefault()
        window.scrollTo({left:0,top:bg[i].offsetTop})
    })
})

window.addEventListener('mousemove',(e)=>{
    circle.style.left = `${e.clientX}px`
    circle.style.top = `${e.clientY}px`
})
