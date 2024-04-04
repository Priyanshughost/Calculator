function display(value){
    document.getElementById('box').value += value;
}
function calculate(){
    try{
        document.getElementById('box').value = eval(document.getElementById('box').value);
    }
    catch(e){
        document.getElementById('box').value = 'Error';
    }
}
function cDisplay(){
    document.getElementById('box').value = '';
}
function backspace(){
    var currentValue = document.getElementById('box').value;
        document.getElementById('box').value = currentValue.slice(0, -1);
}