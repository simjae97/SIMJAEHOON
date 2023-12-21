

function readAll(){ //매개변수:x 리턴:x
    let postArray= JSON.parse(localStorage.getItem("postArray"));
    const tablebody = document.querySelector(`table > tbody`);
    let html = ``; 
    for (let i =0; i< postArray.length; i++){
        console.log(postArray[0].제목);
        html += `<tr onclick="readOnly(${i})">
                    <td>${i+1}</td>
                    <td>${postArray[i].제목}</td>
                    <td>${postArray[i].작성자}</td>
                    <td>${postArray[i].조회수}</td>
                    </a>
                <tr/>`;
    }

    tablebody.innerHTML = html;


    return;
}

readAll();

function readOnly(i){
    localStorage.setItem(`a`,i);
    location.href="readOnly.html"
    
}