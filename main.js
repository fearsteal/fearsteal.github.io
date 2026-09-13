
const FS = {
  ip: "play.fearsteal.fun",
  copyIP(){
    navigator.clipboard?.writeText(this.ip);
    const el=document.querySelector("#copyMessage");
    if(el){el.textContent="Server IP copied!";el.style.display="block";setTimeout(()=>el.style.display="none",1800)}
  },
  toast(msg){
    let t=document.querySelector("#toast");
    if(!t){t=document.createElement("div");t.id="toast";t.style.cssText="position:fixed;right:18px;bottom:18px;z-index:100;padding:14px 18px;border-radius:12px;background:#141419;border:1px solid rgba(255,255,255,.1);box-shadow:0 15px 45px #000;color:#fff";document.body.appendChild(t)}
    t.textContent=msg;t.style.display="block";setTimeout(()=>t.style.display="none",2200)
  }
};
document.addEventListener("DOMContentLoaded",()=>{
  document.querySelectorAll("[data-copy-ip]").forEach(b=>b.addEventListener("click",()=>FS.copyIP()));
  const user=localStorage.getItem("fearsteal_user");
  document.querySelectorAll("[data-user]").forEach(e=>e.textContent=user||"Guest");
  document.querySelectorAll("[data-logout]").forEach(b=>b.addEventListener("click",()=>{localStorage.removeItem("fearsteal_user");location.href="login.html"}));
  const path=location.pathname.split("/").pop()||"index.html";
  document.querySelectorAll(".links a").forEach(a=>{if(a.getAttribute("href")===path)a.classList.add("active")});
});
