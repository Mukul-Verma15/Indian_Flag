let i=0;
const img=document.getElementsByTagName('img')[0]
const heading=document.getElementsByTagName('h3')[0]
let ch='I LOVE MY '
let interval= setInterval(()=>{
    heading.innerText +=ch[i];
    i++;
    img.style.transform +='rotate(10deg)'
    if(i==ch.length+1){
        heading.innerHTML = ""
        i=0;
    }
},100)
