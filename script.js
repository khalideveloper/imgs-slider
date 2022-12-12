const imgsBox = document.querySelector(".imgs-wrapper");
const icons = document.querySelectorAll(".icon");

icons.forEach((el)=>{
    el.addEventListener("click", ()=>{
        if(el.id == "left"){
            imgsBox.scrollLeft -= 400;
        }else{
            imgsBox.scrollLeft += 400;
        }
    })
})