// let value = Number(prompt("수 입력:"))

// let result = "";
// // // 문제1) 입력받은 수 만큼 * 출력 
// console.log("#문제1실행");
// for (let i = 1; i<=value; i++){
//     result += "*";
// }
// console.log(result);
// // // 문제2) 입력받은 수 만큼 * 출력 [  - 3줄(3배수)마다 줄바꿈 ]
// result="";

// for (let i =1; i<= value; i++){
//     result += "*"
//     if ( i % 3 == 0){
//         result += "\n";
//     }
// }
// console.log(result);

// // // 문제3) 입력받은 줄 수 만큼 * 출력  [ ex) 5 ]
// result="";

// for (let i =1; i<= value; i++){
//     for (let j=1; j<=i; j++)
//     {
//         result+="*";
//     }
//     result+="\n";
// }
// console.log(result);
// // *
// // **         
// // ***      
// // ****   
// // *****
// // // 문제4) 입력받은 줄 수 만큼 * 출력 [ ex) 5 ]
// result="";

// for (let i =value; i>0; i--){
//     for (let j=1; j<=i; j++)
//     {
//         result+="*";
//     }
//     result+="\n";
// }

// console.log(result);
// // *****
// // ****
// // ***
// // **
// // *
// // // 문제5) 입력받은 줄 수 만큼 * 출력  [ ex) 5 ]
// result ="";
// for (let i =1; i<= value; i++){
//     for( let j = 0; j <value-i; j++){
//         result += " ";
//     }
//     for (let j=1; j<=i; j++)
//     {
//         result+="*";
//     }
//     result+="\n";
    
// }
// console.log(result);

// //     *
// //    **
// //   ***
// //  ****
// // *****
// // // 문제6) 입력받은 줄 수 만큼 * 출력  [ ex) 5 ]
// result ="";
// for (let i =1; i<= value; i++){
//     for( let j = 0; j <i-1; j++){
//         result += " ";
//     }
//     for (let j=1; j<=value-i+1; j++)
//     {
//         result+="*";
//     }
//     result+="\n";
    
// }
// console.log(result);


// // *****
// //  ****
// //   ***
// //    **
// //     *
// // // 문제7) 입력받은 줄 수 만큼 * 출력  [ ex) 5 ]
// result ="";
// for (let i =1; i<= value; i++){
//     for( let j = 0; j <value-i; j++){
//         result += " ";
//     }
//     for (let j=1; j<=2*i-1; j++)
//     {
//         result+="*";
//     }
//     result+="\n";
    
// }
// console.log(result);
// //     *
// //    ***
// //   *****
// //  *******
// // *********
// // // 문제8) 입력받은 줄 수 만큼 * 출력  [ ex) 5 ]
// result ="";
// for (let i =value; i>0; i--){
//     for( let j = 0; j <value-i; j++){
//         result += " ";
//     }
//     for (let j=1; j<=2*i-1; j++)
//     {
//         result+="*";
//     }
//     result+="\n";
    
// }
// console.log(result);
// console.log("repeat사용");
// result ="";
// for (let i =value; i>0; i--){
//     result += " ".repeat(value-i);
//     result += "*".repeat(2*i-1);
//     result+="\n";
    
// }
// console.log(result);
// // *********
// //  *******
// //   *****
// //    ***
// //     *
// result ="";
// for (let i = 1; i<= value; i++){
//     for (let j = 1; j<=i-1; j++ ){result += " "}
//     for (let j = 1; j<= value*2 -i*2 +1; j++){result += "*"}
//     result += "\n";
// }
// console.log(result);
// // // 문제9) 입력받은 줄 수 만큼 * 출력  [ ex) 10 ]
// let value2 = Number(prompt("수 입력2:"))
// result ="";
// value5 = parseInt(value2/2);
// if (value2%2 == 0){
//     for (let i =1; i<= value5; i++){
//         for( let j = 0; j <value5-i; j++){
//             result += " ";
//         }
//         for (let j=1; j<=2*i-1; j++)
//         {
//             result+="*";
//         }
//         result+="\n";
        
//     }
//     for (let i =value5; i>0; i--){
//         for( let j = 0; j <value5-i; j++){
//             result += " ";
//         }
//         for (let j=1; j<=2*i-1; j++)
//         {
//             result+="*";
//         }
//         result+="\n";
        
//     }
//     console.log(result);
// }
// else{
//     for (let i =1; i<= value5+1; i++){
//         for( let j = 0; j <value5-i+1; j++){
//             result += " ";
//         }
//         for (let j=1; j<=2*i-1; j++)
//         {
//             result+="*";
//         }
//         result+="\n";
        
//     }
//     for (let i =value5; i>0; i--){
//         for( let j = 0; j <value5-i+1; j++){
//             result += " ";
//         }
//         for (let j=1; j<=2*i-1; j++)
//         {
//             result+="*";
//         }
//         result+="\n";
        
//     }
//     console.log(result);
// }

// result ="";
// for( let i= 0; i< value5; i++){
//     for (let j= 1; j <=value2-1; j++){
//         if(j >= (value5)-i && j<= (value5)+i){
//             result +="*"
//         }
//         else{
//             result+= " "
//         }
//     }
//     result += "\n"
// } 
// for( let i= value5-1; i>=0; i--){
//     for (let j= 1; j <=value2-1; j++){
//         if(j >= (value5)-i && j<= (value5)+i){
//             result +="*"
//         }
//         else{
//             result+= " "
//         }
//     }
//     result += "\n"
// } 
// console.log(result);
// // for (let i =1; i<= value2+1; i++){
// //     for( let j = 0; j <value2-i+1; j++){
// //         result += " ";
// //     }
// //     for (let j=1; j<=2*i-1; j++)
// //     {
// //         result+="*";
// //     }
// //     result+="\n";
    
// // }
// // for (let i =value2; i>0; i--){
// //     for( let j = 0; j <value2-i+1; j++){
// //         result += " ";
// //     }
// //     for (let j=1; j<=2*i-1; j++)
// //     {
// //         result+="*";
// //     }
// //     result+="\n";
    
// // }
// // console.log(result);

// //     *
// //    ***
// //   *****
// //  *******
// // *********
// // *********
// //  *******
// //   *****
// //    ***
// //     *
// // // 문제10) 입력받은 줄 수 만큼 * 출력  [ ex) 7 ]
// let value3 = Number(prompt("수 입력3:"))
// result ="";

// for (let i =1; i<= value3; i++){
//     for(let j= 1; j <=value3; j++){
//     if(j == i || j == value3+1-i){
//         result += "★";
//     }
//     else{
//         result+= "☆";
//     }
//     }
//     result += "\n";

// }
// console.log(result);

// result ="";
// let value4 = parseInt(value3/2);

// for (let i =1; i<= value4; i++){//공백최소
//     for (let j=1; j<= value3+1-i; j++){
//         if (j==i || j == value3+1 -i){
//             result += "★";
//         }
//         else{
//             result += "☆";
//         }
//     }
//     result += "\n";

// }

// for (let i =value4+1; i<= value3; i++){ 
//     for (let j=1; j<= i; j++){
//         if (j==i || j == value3+1 -i){
//             result += "★";
//         }
//         else{
//             result += "☆";
//         }
//     }
//         result += "\n";
    
// }
// console.log(result);

// // *     *
// //  *   *
// //   * *
// //    *
// //   * *
// //  *   *
// // *     *


const tableObj = document.querySelector("table");
console.log(tableObj);

function 문제10(){

    const line = Number(document.querySelector("#line10").value);
    let html =``;

    for (let r = 1; r<=line; r++){
        html += `<tr>`
        for( let c =1; c<=line; c++){
            if (c == r){
                html += `<td>★</td>`
        }
            else if(c+r == line +1){html+= `<td>★</td>`}
            else{
            html += `<td>☆</td>`
        }
    }
        html +=`</tr>`
    }

    const tableObj = document.querySelector(`#table10`)
    tableObj.innerHTML = html;
}




function quiz9(){
    const line = Number(document.querySelector("#line9").value);
    let html ="";

    const harfLine = parseInt(line/2);
    for (let i =1; i<= harfLine+1; i++){
        html += "<tr>"
        for (let j =0; j <harfLine-i+1; j++){
            html +="<td> </td>";
        }
        for(let j=1; j<=2*i-1; j++){
            html += "<td>★</td>";
        }
        html += "</tr>";
    }
    for (let i =harfLine; i >  0; i--){
        html += "<tr>"
        for (let j =0; j <harfLine-i+1; j++){
            html +="<td> </td>";
        }
        for(let j=1; j<=2*i-1; j++){
            html += "<td>★</td>";
        }
        html += "</tr>";
    }
    const tableObj = document.querySelector(`#table9`)
    tableObj.innerHTML = html;
}