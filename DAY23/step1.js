// p.331 키보드 이벤트

// 1. html 모두 로드 되었을때

document.addEventListener("DOMContentLoaded",function(){
    const textarea = document.querySelector("textarea");
    const h1 = document.querySelector("h1");

    textarea.addEventListener("keyup",function(e){
        console.log(e.code); //입력한 키의 문자열 표시
        console.log(e.keyCode);
        console.log(e.altKey);
        console.log(e.ctrlKey);
        console.log(e.shiftKey);
        const length= textarea.value.length;
        h1.textContent= `글자수 ${length}`;
    })

    const star = document.querySelector("h2");
    star.style.position="absolute";
    let x =0;
    let y = 0;
    const block = 20;

    // 별의 위치를 그려주는 함수
    const print = function(){
        star.style.left = `${x*block}px`
        star.style.top = `${y*block}px`
    }
    print();

    // 별의 위치를 옮겨주는 함수
        // 키보드의 키번호
    const left = 37; const up = 38; const right = 39; const down = 40;
    document.body.addEventListener("keydown",function(e){
        if(e.keyCode == left){ x--;}
        else if(e.keyCode == up){y--;}
        else if(e.keyCode == right){x++;}
        else if(e.keyCode == down){y++;}

        print();
    })
})