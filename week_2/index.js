const js_title = document.getElementsByClassName("js-title");
const js_range = document.getElementById("js-range")
const js_guess = document.getElementById("js-guess");
const js_result = document.getElementById("js-result");
/* js_title 은 gerElementsByClassName으로, 나머지는 getElementById 로 전달 받았습니다.*/
const handlePrint = (e) => {
    e.preventDefault(); 
    // 출력할 곳은 span
    const disPlaySpanResult = js_result.querySelector("span");
    const disPlaySpanTitle = js_title[0].querySelector("span");
    // range 숫자
    const js_range_number = Number(js_range.value);
    // random_number를 이용하여 숫자를 guess
    const random_number = Math.floor(Math.random()*(js_range_number+1));
    // input 숫자
    const input_number = js_guess[0].value;
    // 결과를 저장할 result
    var result;
    // 범위를 초과하면 return
    if (input_number == "" || input_number > 200 || input_number < 5) return;
    // 무승부, 패배, 승을 조건문에 따라 result에 전달
    if (random_number == input_number) result = "You Tie";
    else if (random_number > input_number) result = "You Loss";
    else result = 'You Win';
    result = result.bold();
    // span에 결과 전달
    disPlaySpanResult.innerHTML = `
        You choose: ${input_number}, the machine choose: ${random_number}<br>
        ${result}
    `
    disPlaySpanTitle.innerHTML = `${js_range_number}`
};
// click 이벤트 발생시 handlePrint함수 실행
js_guess[1].addEventListener("click",handlePrint);