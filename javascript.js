
const input = document.getElementById('result');

const copy = document.getElementById('copy');

copy.onclick = function (){
    result.select()
    document.execCommand('copy')
}