window.onload = () => {
panel = document.querySelectorAll('.panel');
// console.log(panel);
panel.forEach(element => {
    element.addEventListener("mouseover",()=>{
            element.classList.add("active");
            element.classList.add("open");
    });
});
panel.forEach(element => {
    element.addEventListener("mouseout",()=>{
            element.classList.remove("active");
            element.classList.remove("open");
    });
});

};