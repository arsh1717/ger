function flip(){
    const mainFrame=document.querySelectorAll('.main-form');
    const hidden=document.querySelectorAll('.hide');
   
    mainFrame.forEach(frame=>{
        frame.classList.replace('main-form','hide');
    })

    hidden.forEach(el=>{
        el.classList.replace('hide','main-form');
    })

    // mainFrame.forEach(frame=>{

    //     window.setTimeout(()=>{
    //         frame.classList.replace("main-form","hide");
    //         hidden.forEach(hid=>{
    //             hid.classList.replace("hide","main-form");
    //         });
    //     },500);

    // });
    // mainFrame[0].classList.toggle("rotate");

    // hidden[0].classList.remove("rotate");

}
document.getElementById("clickit").addEventListener("click",flip);
document.getElementById("clickit2").addEventListener("click",flip);


