const btnLeftToast=document.querySelector(".btn-left-toast");
const btnCenterToast=document.querySelector(".btn-center-toast");
const btnRightToast=document.querySelector(".btn-right-toast");
const bottomLeft= document.querySelector(".bottom-left");
const bottomCenter= document.querySelector(".bottom-center");
const bottomRight= document.querySelector(".bottom-right");


const showToast=(toast)=>{
    toast.style.display="flex";
    setTimeout(() => {
      hideToast(toast);
    }, 2000);
}

const hideToast=(toast)=>{
    toast.style.display="none";
}



btnLeftToast.addEventListener("click",()=>showToast(bottomLeft));
btnCenterToast.addEventListener("click",()=>showToast(bottomCenter));
btnRightToast.addEventListener("click",()=>showToast(bottomRight));
