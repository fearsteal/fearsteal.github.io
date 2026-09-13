
function showMsg(text,ok=false){
  const m=document.querySelector("#message"); if(!m)return;
  m.textContent=text;m.style.display="block";m.style.background=ok?"rgba(30,220,100,.08)":"rgba(255,36,72,.08)";
  m.style.border=ok?"1px solid rgba(30,220,100,.2)":"1px solid rgba(255,36,72,.2)";
}
document.addEventListener("DOMContentLoaded",()=>{
  const reg=document.querySelector("#registerForm");
  if(reg) reg.addEventListener("submit",e=>{
    e.preventDefault();
    const name=reg.username.value.trim(),email=reg.email.value.trim(),p=reg.password.value,cp=reg.confirm.value;
    if(!name||!email||!p) return showMsg("Please complete all required fields.");
    if(p.length<8) return showMsg("Password must be at least 8 characters.");
    if(p!==cp) return showMsg("Passwords do not match.");
    localStorage.setItem("fearsteal_user",name);
    showMsg("Account created in demo mode. Redirecting...",true);
    setTimeout(()=>location.href="dashboard.html",700);
  });
  const login=document.querySelector("#loginForm");
  if(login) login.addEventListener("submit",e=>{
    e.preventDefault();
    const name=login.identity.value.trim(),p=login.password.value;
    if(!name||!p) return showMsg("Enter your username/email and password.");
    localStorage.setItem("fearsteal_user",name);
    showMsg("Demo login successful.",true);
    setTimeout(()=>location.href="dashboard.html",500);
  });
  document.querySelectorAll("[data-toggle-password]").forEach(b=>b.addEventListener("click",()=>{
    const input=document.querySelector(b.dataset.togglePassword);
    if(input) input.type=input.type==="password"?"text":"password";
  }));
});
