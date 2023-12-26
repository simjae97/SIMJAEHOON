document.addEventListener("DOMContentLoaded", function(){
    console.log( document.querySelector("img") );
    const rects = document.querySelectorAll(".rect");
    for (let i = 0; i<rects.length; i++){
        const width = (i+1)*100;
        const src = `http://placekitten.com/${width}/250`
        rects[i].setAttribute('src',src);
    }


    // p.318

    const divs = document.querySelectorAll("body>div");
    for(let i = 0; i <divs.length; i++){
        console.log(i,divs[i]);
        const val = i* 10;
        divs[i].style.height = "10px";
        divs[i].style.backgroundColor = `rgba(${val},${val},${val})`;
    }

    // p.320 요소 만들기

    const header = document.createElement("h1") //요소 생성
    document.body.appendChild( header);
})