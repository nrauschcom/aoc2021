((_,i,b,c,t,w)=>(n=0,r,i.reduce((a,N)=>(a[0]?(n=N,c(N),a.filter(b=>(R=!(w(b)||w(t(b))),a[1]||R&&(r=b),R))):a),b),r.flat().reduce((a,n)=>a+(parseInt(n)||0),0)*n))(b=document.body.innerText.split(/\n\n/),b.shift().split(','),B=b.map(b=>b.split(/\n/).map(r=>r.trim().split(/\s+/))),(c)=>B.every(b=>b.map((r,i,a)=>a[i]=r.map(e=>(e==c?'*':e)))),m=>m[0].map((_,c)=>m.map((_, r)=>m[r][c])),b=>b.some(r=>r.every(e=>(e=='*'))))
