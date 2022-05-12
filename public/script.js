let checkbox = document.getElementById('checkbox');
let password = document.getElementById('password');

checkbox.addEventListener('click',(e)=>{
    // console.log(e.target.checked);
    let check = e.target.checked
    if(check){
        password.type = 'text'
    }

    else{
        password.type = 'password'
    }
    // console.log(password)
})