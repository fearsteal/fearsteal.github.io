
// Frontend demo values. Replace these with a secure backend/API later.
// Never put private API keys in GitHub Pages JavaScript.
document.addEventListener("DOMContentLoaded",()=>{
  const players=document.querySelector("[data-players]");
  const status=document.querySelector("[data-status]");
  if(players) players.textContent="--";
  if(status) status.textContent="Checking server...";
});
