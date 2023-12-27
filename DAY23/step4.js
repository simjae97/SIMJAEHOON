// p.346

document.addEventListener("DOMContentLoaded",function(){
    let timer = 0;
    let timerId = 0;

    const h1= document.querySelector("h1");
    const checkbox = document.querySelector("input");

    checkbox.addEventListener("change",function(e){
        console.log(checkbox.checked);
        // 만약 체크가 되어있으면
        if(e.currentTarget.checked){
            timerId = setInterval(function(){
                timer += 1;
                h1.textContent= `${timer}초`
            },1000);
            // setInterval (정의함수(),밀리초): 밀리초마다 정의함수를 실행하는 함수
        }
        else{
            clearInterval(timerId);
        }
    })

    // p.348
    const output = document.querySelector("#output");
    const radios = document.querySelectorAll("[name=pet]");

    for (let i =0; i<radios.length; i++){
        // 이벤트 등록
        radios[i].addEventListener("change",function(event){
            // 2
            const checkValue = document.querySelector("input[name=pet]:checked").value;
            console.log(checkValue);
            output.textContent = `좋아하는 동물은 ${current.value}이군요`
            // 1
            const current = event.currentTarget

            if(current.checked){
                console.log(current.value)
                output.textContent = `좋아하는 동물은 ${current.value}이군요`
            }
        })
    }
})