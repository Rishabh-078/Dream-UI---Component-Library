const modalLiveBtn= document.querySelector(".btn-live-modal");
const modalMsg= document.querySelector(".modal-msg-container");
const modalCloseBtn= document.querySelector(".btn-modal-close");

modalLiveBtn.addEventListener("click",()=>modalMsg.style.display="flex")

modalCloseBtn.addEventListener("click",()=>modalMsg.style.display="none")