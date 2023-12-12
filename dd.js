function dd(){

    let id = document.querySelector('#dd').value;
    console.log(id);
    let id2 = id.split("T");
    console.log(id2);
    let id3 = id2[1].split(":");
    console.log(id3);
}