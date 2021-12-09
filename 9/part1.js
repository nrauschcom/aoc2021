(s=>document.body.innerText.split(/\n/).map(r=>[...r]).flatMap((r,y,a)=>r.filter((n,x)=>s(n,r[x-1])&&s(n,r[x+1])&&s(n,a[y-1]?.[x])&&s(n,a[y+1]?.[x]))).reduce((a,n)=>+n+a+1,0))((a,b)=>b==null||a<b)
