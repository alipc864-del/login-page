const loginForm = document.querySelector(".login");
const registerForm = document.querySelector(".register");

const switchBtn = document.getElementById("switchBtn");

const leftTitle = document.querySelector(".left h1");
const leftText = document.querySelector(".left p");

let registerMode = false;

switchBtn.addEventListener("click", () => {

    registerMode = !registerMode;

    if(registerMode){

        loginForm.classList.remove("active");
        registerForm.classList.add("active");

        leftTitle.innerHTML = "Hello Friend";

        leftText.innerHTML =
        "Create your account and start your journey with NeoAuth.";

        switchBtn.innerHTML = "Login";

    }

    else{

        registerForm.classList.remove("active");
        loginForm.classList.add("active");

        leftTitle.innerHTML = "Welcome Back";

        leftText.innerHTML =
        "Beautiful Login & Register UI made with HTML CSS & JavaScript.";

        switchBtn.innerHTML = "Create Account";

    }

});

const eyeButtons = document.querySelectorAll(".show-password");

eyeButtons.forEach(btn=>{

    btn.addEventListener("click",()=>{

        const input = btn.previousElementSibling;

        const icon = btn.querySelector("i");

        if(input.type==="password"){

            input.type="text";

            icon.classList.remove("fa-eye");
            icon.classList.add("fa-eye-slash");

        }

        else{

            input.type="password";

            icon.classList.remove("fa-eye-slash");
            icon.classList.add("fa-eye");

        }

    });

});

document.querySelectorAll("form").forEach(form=>{

    form.addEventListener("submit",(e)=>{

        e.preventDefault();

        const btn=form.querySelector(".submit");

        const oldText=btn.innerHTML;

        btn.innerHTML="Loading...";

        btn.disabled=true;

        setTimeout(()=>{

            btn.innerHTML="Success ✓";

            setTimeout(()=>{

                btn.innerHTML=oldText;

                btn.disabled=false;

            },1500);

        },1200);

    });

});