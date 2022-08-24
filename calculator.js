function display(val)
{
    document.getElementById('show').value+=val
    return val
}
function solve() {
    var x=document.getElementById('show').value
    var y=eval(x);
    document.getElementById('show').value=y

    /*CODE TO DISPLAY HISTORY*/
    var temp = document.getElementById('history');
    temp.value = temp.value + x + '=' + y + '\n' + '-------------------------' + '\n';
}
function clearScreen(){
    document.getElementById('show').value=''
}
