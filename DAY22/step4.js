document.addEventListener('DOMContentLoaded',function(){
    // const divA = document.querySelector("#first");
    // const divB = document.querySelector("#second");

    // const h1 = document.createElement("h1");
    // h1.textContent = "이동하는 태그";

    // const toFirst = function(){
    //     divA.appendChild(h1);
    //     setTimeout(toSecond,10000);
    // }

    // const toSecond = function(){
    //     divB.appendChild(h1);
    //     setTimeout(toFirst,10000);
    // }
    // toFirst();

    // function 삭제함수2(){
    //     const h2=  document.querySelector("h2");
    //     h2.parentNode.removeChild(h2);


    // }
    // setTimeout()
    // p.322
    setTimeout(function(){
            const h2 =document.querySelector("h2");
            h2.parentNode.removeChild(h2);

        },3000)

    let counter = 0;
    const h3 = document.querySelector("h3");

    h3.addEventListener("click",function(event){
        counter++;
        h3.textContent = `클릭횟수 = ${counter}`;
    })
})