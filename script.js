function getName(){
    var gname = document.querySelector('input[name = "name"]').value;
    // alert(gname.value);
    console.log(getName.value);
    const img = document.querySelector("#imageChange");
    img.src = `https://joesch.moe/api/v1/${gname}`;
    
    return gname;
}

/*let en;
en.addEventListener('keyup', (e)=>{
    if(e.keyCode === 13){
        console.log(e.gname);
        getName();
    }
})*/

let en = document.querySelector('input[name = "name"]');
en.addEventListener('keyup', (e)=>{
    if(e.keyCode === 13){
        // console.log(e.gname);
        getName();
    }
})

var btn = document.querySelector("button");
btn.addEventListener("click", getName);

