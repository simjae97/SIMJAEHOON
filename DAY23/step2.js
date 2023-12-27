function 인치변환(){
    const input = document.querySelector('input');
    const p = document.querySelector("p");
    const inch =Number(input.value);
    if(isNaN(inch)){
        p.textContent = `숫자를 입력해주세요.`
        return;
    }
    const cm = inch *2.54;
    p.textContent = `${cm}cm`
}


document.addEventListener('DOMContentLoaded',function(){
    const button = document.querySelector("button");
    const input = document.querySelector('input');
    const p = document.querySelector("p");

    button.addEventListener("click", function(){
        const inch =Number(input.value);

        if(isNaN(inch)){
            p.textContent = `숫자를 입력해주세요.`
            return;
        }

        const cm = inch *2.54;
        p.textContent = `${cm}cm`
    })
    
    const email = document.querySelector("#email")
    const emailConfirm = document.querySelector("#emailConfirm")

    const isemail = function(value){
        return value.indexOf("@")>1 && value.split("@")[1].indexOf(".")>1

    }

    email.addEventListener('keyup',function(event){
        console.log(event.currentTarget)//현재 이벤트를 발생시킨 주최자
        const value = event.currentTarget.value;
        if(isemail(value)){
            emailConfirm.style.color="green";
            emailConfirm.textContent = `이메일 형식입니다. : ${value}`
        }
        else{
            emailConfirm.style.color ="red";
            emailConfirm.textContent=`이메일 형식이 아닙니다. : ${value}`
        }
    })
})