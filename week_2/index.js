const js_title = document.getElementsByClassName("js-title");
const js_range = document.getElementById("js-range")
const js_guess = document.getElementById("js-guess");
const js_result = document.getElementById("js-result");
const handlePrint = (e) => {
    e.preventDefault();
    const disPlaySpanResult = js_result.querySelector("span");
    const disPlaySpanTitle = js_title[0].querySelector("span");
    const js_range_number = Number(js_range.value)
    const random_number = Math.floor(Math.random()*(js_range_number+1));
    const input_number = js_guess[0].value;
    var result;
    if (input_number == "" || input_number > 200 || input_number < 5) return;
    if (random_number == input_number) result = "You Tie";
    else if (random_number > input_number) result = "You Loss";
    else result = 'You Win';
    disPlaySpanResult.innerHTML = `
        You choose: ${input_number}, the machine choose: ${random_number}<br>
        ${result}
    `
    disPlaySpanTitle.innerHTML = `${js_range_number}`
};
js_guess[1].addEventListener("click",handlePrint);