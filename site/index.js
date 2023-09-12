let text=document.querySelector('.spin p');
text.innerHTML=text.innerText.split("").map((char,i)=>
    `<b style="transform:rotate(${i *17}deg)">${char}</b>`
).join('');