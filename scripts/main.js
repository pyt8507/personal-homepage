document.getElementById('fukuan').style.display='none';
let myImage = document.querySelector('img');
let myButton = document.querySelector('button');
myButton.onclick = function() {
    document.getElementById('fukuan').style.display='inline';
    myImage.setAttribute('width', '500px');
    myImage.setAttribute('src', 'images/fukuanma.jpg');
 }