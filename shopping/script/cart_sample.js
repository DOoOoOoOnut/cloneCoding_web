// 왼쪽 썸네일 이미지 JS
// 1. small_thumnail - a에 마우스를 올리면 // small2 에 마유스 올라면
// 2. big_thumnail - img(src) 값이 변경  // big2로 변경

// 변수생성
const detail = document.querySelector('.item_detail');
const small_thum = detail.querySelectorAll('.small_thumnail a');
const big_thum = detail.querySelector('.big_thumnail img');
console.log(detail, small_thum, big_thum);

// 작은 썸네일 올리면 큰 썸네일 바뀌는 기능
small_thum[0].addEventListener('mouseover',function(){
    big_thum.src = "./dog_images/big1.jpg";
})
small_thum[1].addEventListener('mouseover',function(){
    big_thum.src = "./dog_images/big2.jpg";
})
small_thum[2].addEventListener('mouseover',function(){
    big_thum.src = "./dog_images/big1.jpg";
})
small_thum[3].addEventListener('mouseover',function(){
    big_thum.src = "./dog_images/big2.jpg";
})
small_thum[4].addEventListener('mouseover',function(){
    big_thum.src = "./dog_images/big1.jpg";
})
small_thum[5].addEventListener('mouseover',function(){
    big_thum.src = "./dog_images/big2.jpg";
})

// 가격 할인 정보 클릭 시 나오는 정보 팝업
// 1. 팝업 숨기기
// 2. i를 클릭하면 팝업 보이기

const pop = detail.querySelector('.price .open');
console.log(pop);
pop.style = 'display:none';
const i = detail.querySelector('.price i[class$=info]');
console.log(i);
i.addEventListener('click',function(){
    pop.style = 'display:block';
})

// 내일 출발 i 클릭 시 팝업 출력하고 팝업 내 X 클릭 시팝업 닫히기 JS
// 1. 팝업 숨기기
// 2. i 클릭 시 팝업 출력
// 3. X 클릭 시 팝업 닫히기

// 변수
const pop2 = detail.querySelector('.benefit_shipping .open')
const i2 = detail.querySelector('.benefit_shipping i[class$=info]')
const del = detail.querySelector('.benefit_shipping .close')
console.log(pop2, i2, del)
// 안보이게
pop2.style = 'display:none';
// 실행
i2.addEventListener('click',function(){
    pop2.style = 'display:block';
})
del.addEventListener('click',function(){
    pop2.style = 'display:none';
})

//변수
const pop3 = detail.querySelector('.benefit_shipping .delivery_menu');
const open = detail.querySelector('.benefit_shipping .delivery_menu_open');
const down = pop3.querySelector('i[class$=down]')
console.log(pop3, open, down)
// 안보이게
open.style = 'display:none';
//실행
pop3.addEventListener('click',function(){
    open.style = 'display:block;'
    pop3.style = 'border-bottom-left-radius: 0; border-bottom-right-radius: 0;'
    down.style = 'transform: rotate(180deg);'
})