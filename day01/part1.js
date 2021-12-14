((I,p)=>I.filter((i,j,k)=>p(i)>p(k[j?j-1:0])).length)(document.body.innerText.split('\n'),parseInt)
