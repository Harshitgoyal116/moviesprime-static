// show password logic

function isPassVisible(){
    var myData = document.getElementById('password')
    if(myData.type === 'password'){
        myData.type = 'text';
    }else{
        myData.type = 'password';
    }
}