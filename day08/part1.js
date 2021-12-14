(a=document.body.innerText.split(/\n/).map(r=>r.split(' | ')[1]?.split(' ')??[]).reduce((a,r)=>(r.forEach(s=>a[s.length]++),a),Array(8).fill(0)))[2]+a[4]+a[3]+a[7]
