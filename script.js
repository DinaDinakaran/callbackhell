const callbackhell= ()=>{
    setTimeout(()=>{
       var ten= document.createElement("label");
       ten.innerText="10"
       ten.style.fontSize="50px";
       ten.style.color="red"
       document.body.append(ten)
        setTimeout(()=>{
            ten.innerText="9"
            setTimeout(()=>{
                ten.innerText="8"
                setTimeout(()=>{
                    ten.innerText="7"
                    setTimeout(()=>{
                        ten.innerText="6"
                        setTimeout(()=>{
                            ten.innerText="5"
                            setTimeout(()=>{
                                ten.innerText="4"
                                setTimeout(()=>{
                                    ten.innerText="3"
                                    setTimeout(()=>{
                                        ten.innerText="2"
                                        setTimeout(()=>{
                                            let one= document.createElement("label");
                                            ten.innerText="1"
                                            setTimeout(()=>{
                                               ten.innerText="HAPPY💕💕INDEPENDANCE DAY✌😎"
                                               ten.style.color="pink"
                                            },2000);
                                        },2000);
                                    },2000);
                                },2000);
                            },2000);
                        },2000);
                    },2000);
                },2000);
            },2000);
        },2000);
    },2000)
}

callbackhell();