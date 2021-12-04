((I,p)=>I.filter((i,j,k)=>p(k[j])>p(k[j-3])).length)(document.body.innerText.split('\n'),parseInt)
