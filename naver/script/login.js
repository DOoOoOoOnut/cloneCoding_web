// 로그인 탭 제목 클릭 시 해당 내용 활성화

const login_title = document.querySelectorAll('.login_title h2 a')
const login_c = document.querySelectorAll('.login_c')

// 초기 모든 내용 숨기기 -> 초기 id로그인만 보이기
const hide = () => {for(let h of login_c){h.style.display='none'}}
hide()
login_c[0].style.display = 'block'

// 초기 모든 디자인 숨기기-> id로그인 활성화 시키기(active) 
const remove = () => {for(let h of login_title)h.parentElement.classList.remove('active')}
remove()
login_title[0].parentElement.classList.add('active')

// login_title 클릭하면 login_container에 맞는 페이지 나옴

login_title.forEach((t,i)=>{
    t.addEventListener('click',()=>{
        hide()
        login_c[i].style.display = 'block'
        remove()
        t.parentElement.classList.add('active')
    })
})


//================================================
console.log('로그인 메세지 출력')
// 아이디 로그인 시 틀린 정보 또는 입력되지 않은 정보에 따라 error massage 출력하기
// 1. 아이디 미입력 후 로그인 버튼 클릭 => 아이디를 입력해주세요
// 2. 아이디 입력 비밀번호 미입력 후 로그인 버튼 클릭 -> 비밀번호를 입력해주세요
// 3. 아이디, 비밀번호 입력 후 로그인 버튼 클릭 시 해당 정보가 맞지 않다면 => 아이디(로그인 전용 아이디) 또는 비밀번호를 잘못 입력했습니다. 입력하신 내용을 다시 확인해주세요.
// 4. 아이디, 비밀번호 입력 후 로그인 버튼 클릭 시 해당 정보가 맞다면 => 로그인 성공 팝업 '어서오세요 00님'

const userIdInput = document.querySelector('#userId')
const userPwInput = document.querySelector('#userPw')
const loginBtn = document.querySelector('.loginBtn')
const error_massage = document.querySelector('.error_massage')
const userList = [{
    id:'admin',
    pw:1234,
}]
console.log(userIdInput,userPwInput,loginBtn,error_massage);

console.log(userIdInput.value == '')

loginBtn.addEventListener('click',function(){
    if(userIdInput.value == ''){
        error_massage.innerHTML = '아이디를 입력해주세요'
    }else if(userPwInput.value == ''){
        error_massage.innerHTML = '비밀번호를 입력해주세요'
    }else if(userIdInput.value == userList[0].id && userPwInput.value == userList[0].pw){
        alert(`어서오세요 ${userList[0].id }님!`)
    }else{
        error_massage.innerHTML = '아이디(로그인 전용 아이디) 또는 비밀번호를 잘못 입력했습니다.<br>입력하신 내용을 다시 확인해주세요.'
        userPwInput.value = ''
    }
})

/* loginBtn.addEventListener('click',function(){
    if(!userIdInput.value){
        error_massage.innerHTML = '아이디를 입력해주세요'
    }else if(!userPwInput.value){
        error_massage.innerHTML = '비밀번호를 입력해주세요'
    }
}) */

const login_num = document.querySelector('#login_num_input')
const loginBtn2 = document.querySelector('#loginBtn2')
const error_massage_d = document.querySelector('.error_massage_d')
console.log(login_num,loginBtn2,error_massage_d)

loginBtn2.addEventListener('click',function(){
    if(login_num.value == ''){
        error_massage_d.innerHTML = '인증번호를 입력해주세요'
    }
})