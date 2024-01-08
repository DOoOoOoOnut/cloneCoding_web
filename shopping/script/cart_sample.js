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
    open.style = 'display:flex;'
    pop3.style = 'border-bottom-left-radius: 0; border-bottom-right-radius: 0;'
    down.style = 'transform: rotate(180deg);'
})

// 상품 색상, 사이즈 옵션 선택했을 때 선택 정보가 select result에 결과값으로 출력되고 num_result의 구매 수량에 따라 order-price에 가격이 출력되는 결과 

/* 
1. select-result -> display:none

※ 상세 조건 : 상품 색상, 사이즈 옵션을 선택했을 때

2. 색상 선택
2-1. 색상 미선택 시 사이즈 옵션 보이지 않음
3. 사이즈 선택
3-1. 사이즈 데이터는 색상 select로 묶여 있음, 즉 색상마다 출력 사이즈 다름.

4. 색상, 사이즈 모두 선택 시 select-result 다시 출력
4-1. 같은 색상, 사이즈 선택 시 팝업 출력
4-2. 색상, 사이즈 옵션의 값이 select-result의 opt1, opt2에 각각 출력
4-3. 다른 옵션 선택 시 새로운 select-result 데이터가 기존 데이터의 위로 추가됨
4-4. 위 조건 달성 시 옵션1, 옵션2의 선택데이터 초기화.

※ 상세 조건 : 상품 갯수를 변경했을 때

5. num count에 기본값(1) 출력, 그에 맞는 가격 출력
5-1. + 버튼 누르면 현재값 + 1 / - 버튼 누르면 현재값 - 1
5-2. 갯수는 1 미만으로 떨어지지 않음 
5-3. 갯수는 해당 색상/사이즈의 재고를 초과할 수 없음

6. 갯수 * 1개 가격이 해당 사이즈, 색상 옵션의 총 가격에 출력됨
*/
console.log('-----------------')
const colorOpt = document.querySelector('#colorOpt');
const sizeOpt = document.querySelector('#sizeOpt');
const selectResult = document.querySelector('.select_result');
console.log(colorOpt,sizeOpt,selectResult);
// console.log(colorOpt.options[1].value.text);

// colorOpt, sizeOpt text 데이터를 모두 변수로 수집 후
// createElement, appendChild를 이용해서 opt1, opt2 선택 데이터 출력하기.
/* const sr = document.querySelectorAll('.select_result'); */
const color_c = document.createElement('span')
const size_c = document.createElement('span')
const result = document.querySelectorAll('.select_result > span > span[class^=opt]');
console.log(color_c, size_c,result)
//숫자 추가시 바뀜 변수
const plus =  document.querySelector('#plus')
const minus =  document.querySelector('#minus')
const total_num =  document.querySelector('#num_count')
const total_price = document.querySelector('.order_price')
const priceTotalView = document.querySelector('fieldset:nth-child(2) .order_price')
let num = 1;
let price = 36900;
const plus_num = document.createElement('span')
console.log(plus,minus,num);
// 안보이게 하기
selectResult.style.display = 'none'
colorOpt.addEventListener('change',function(){
    /* console.log(colorOpt.value)
    console.log(colorOpt.options[colorOpt.selectedIndex].text) // 선택한 인덱스값의 텍스트노드 불러오기 */
    color_c.innerHTML = colorOpt.options[colorOpt.selectedIndex].text;
    console.log(color_c);
})
sizeOpt.addEventListener('change',function(){
    console.log(sizeOpt.options[sizeOpt.selectedIndex].text) // 선택한 인덱스값의 텍스트노드 불러오기
    size_c.innerHTML = sizeOpt.options[sizeOpt.selectedIndex].text;
    console.log(size_c);
    //선택옵션 부모 보이기
    selectResult.style.display = 'grid';
    // 선택옵션 적용 대상에 위 option 데이터값 출력
    result[0].appendChild(color_c);
    result[1].appendChild(size_c);
    //선택옵션의 수량 출력하기
    total_num.value = num;
    // 선택옵션의 가격 출력하기
    total_price.innerHTML = price.toLocaleString('ko-kr')+'원'
    priceTotalView.innerHTML = price.toLocaleString('ko-kr')+'원'
})


// selectResult 안 X 클릭시 X의 부모를 숨기기

const xxx = selectResult.querySelector('.close');
console.log(xxx)
xxx.addEventListener('click',function(){
    xxx.parentElement.style.display = 'none';
})
let total = 0;
// 수량 - + 버튼 클릭 시 수량값 변경되며 그에 따라 가격 변동
plus.addEventListener('click',function(){
    // 수량 1 증가
    num += 1;
    // 수량 1 증가한 값 표시
    total_num.value = num;
    // 수량 * 가격 = 구매가
    total = num*price;
    console.log(total); // 확인
    total_price.innerHTML = total.toLocaleString('ko-kr') + '원';
    priceTotalView.innerHTML = total.toLocaleString('ko-kr') + '원';
})
minus.addEventListener('click',function(){
    num +=  -1;
    total_num.value = num;
    total = num*price;
    console.log(total);
    total_price.innerHTML = total.toLocaleString('ko-kr') + '원';
    priceTotalView.innerHTML = total.toLocaleString('ko-kr') + '원';
})




