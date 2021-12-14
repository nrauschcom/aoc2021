(b=>(r=Infinity,Array(Math.max(...b)).fill(0).every((_,i)=>(k=b.reduce((a,c)=>a+((v=Math.abs(c-i))*(v+1)/2),0),k<r&&(r=k))),r))(document.body.innerText.split(',').map(Number))
