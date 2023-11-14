


// document.getElementById("ufo").onclick=


setInterval(function(){
    let ufo=document.createElement('div')
    ufo.className="ufo"
    ufo.style.left="-300px" 
    ufo.onclick=robban 
    // Képernyő magassághoz állítani
    ufo.style.top= Math.round(Math.random()*1000)+'px'
    console.log(ufo.style.top)
    document.getElementById("space").appendChild(ufo)
},1000)

setInterval(function(){
    ufok=document.getElementsByClassName("ufo")
    for (const vmi of ufok) {
        let left=vmi.style.left
        left=Number(left.substring(0,left.length-2))
        if (left>1500)
        {
            document.getElementById("space").removeChild(vmi)
        }
        else{
            left+=15
            vmi.style.left=left+'px'
        }
    }    
    
},100)

function robban(){
     console.log(this)
    this.classList.remove('ufo')
    this.classList.add("robban")
}

