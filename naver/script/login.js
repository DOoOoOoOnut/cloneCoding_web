// 로그인 탭 제목 클릭 시 해당 내용 활성화

const login_title = document.querySelectorAll('.login_title h2 a'
)
const id_login_container = document.querySelector('.login_container .id_login')
const disposable_login_container = document.querySelector('.login_container .disposable_login')
const qr_login_container = document.querySelector('.login_container .qr_login')

console.log(login_title,id_login_container,disposable_login_container,qr_login_container)
// 초기 일회용, qr 내용 숨기기
disposable_login_container.style.display ='none'
qr_login_container.style.display ='none'

// ID로그인 클릭하면 
login_title[0].addEventListener('click',()=>{
    id_login_container.style.display = 'block'
    qr_login_container.style.display = 'none'
    disposable_login_container.style.display ='none'
})

// 일회용 클릭하면 
login_title[1].addEventListener('click',()=>{
    id_login_container.style.display = 'none'
    qr_login_container.style.display = 'none'
    disposable_login_container.style.display ='block'
})

// QR코드 클릭하면
login_title[2].addEventListener('click',()=>{
    id_login_container.style.display = 'none'
    qr_login_container.style.display = 'block'
    disposable_login_container.style.display ='none'
})

