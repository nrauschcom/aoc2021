(o={'[':']','(':')','{':'}','<':'>'},p={')':3,']':57,'}':1197,'>':25137},document.body.innerText.split('\n').reduce((a,r)=>(s=[],k=0,[...r].some(c=>(c in o)?!s.unshift(c):(c!=o[s.shift()]&&(k=p[c])))?k:0)+a,0))
