(f=(a,i)=>i>0?f([a[1],a[2],a[3],a[4],a[5],a[6],a[7]+a[0],a[8],a[0]],--i):a.reduce((a,n)=>a+n))(document.body.innerText.split(',').map(i=>parseInt(i)).reduce((a,v)=>(a[v]++,a),Array(9).fill(0)),256)
