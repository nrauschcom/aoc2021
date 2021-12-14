(b=>(r=Infinity,Array(Math.max(...b)).fill(0).every((_,i)=>(k=b.reduce((a,c)=>a+Math.abs(c-i),0),k<r&&(r=k))),r))(document.body.innerText.split(',').map(Number))
