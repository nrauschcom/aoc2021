(f=(d,i)=>i<80?f(d.flatMap(n=>--n<0?[6,8]:[n]),++i):d.length)(document.body.innerText.split(',').map(i=>parseInt(i)),0)
