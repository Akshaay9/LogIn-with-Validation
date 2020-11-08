const form=document.getElementById("form")
const username=document.getElementById("username")
const email=document.getElementById("email")
const phone=document.getElementById("phone")
const password=document.getElementById("password")
const cpassword=document.getElementById("cpassword")

form.addEventListener("submit",(event)=>{
    event.preventDefault()
    validate()
})



const validate=()=>{
const usernameval=username.value.trim()
const emailval=email.value.trim()
const phoneval=phone.value.trim()
const passwordval=password.value.trim()
const cpasswordval=cpassword.value.trim()

if(usernameval==="")
{
    setErrorMSg(username,"name cannot be empty")
}
else if(usernameval.length<=5)
{
    setErrorMSg(username, "username should me minumun 3 character")
}
else{
    setSuccessMsg(username)
}

if(emailval==="")
{
    setErrorMSg(email,"email cannot be empty")
}
else if(!isEmail(email))
{
    setErrorMSg(email)
}
else{
    setSuccessMsg(email)
}
if(phoneval==="")
{
    setErrorMSg(phone,"number cannot be empty")
}
else if(phoneval.length<=9)
{
    setErrorMSg(phone, "phone num should me minumun 10 character")
}
else{
    setSuccessMsg(phone)
}
if(passwordval === '') {
    setErrorMSg(password, 'Password cannot be blank');
} else {
    setSuccessMsg(password);
}

if(cpasswordval === '') {
    setErrorMSg(cpassword, 'Password2 cannot be blank');
} else if(passwordval !== cpasswordval) {
    setErrorMSg(password2, 'Passwords does not match');
} else{
    setSuccessMsg(cpassword);
}
}


function setErrorMSg(input,message)
{
    
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');
        formControl.className = 'form-control error';
        small.innerText = message;

}
function setSuccessMsg(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

function isEmail(email){
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (reg.test(email.value) == false) 
    {
        
        return false;
    }

    return true;

}
    





