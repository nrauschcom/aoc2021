(O='[',C=']',e=d=>(d=0,i=[...a].findIndex(c=>c==O&&++d==5||(c==C&&d--,0)),i>0&&(m=a.substr(i).match(/^(\[(\d+),(\d+)\])/),a=a.substr(0,i).replace(/(\d+)(\D+)$/,(_,d,f)=>+d+(+m[2])+f)+0+a.substr(i+m[1].length).replace(/\d+/,d=>+d+(+m[3])))),s=M=>(ä=a,a=a.replace(/\d{2}/,(m)=>(M=(m/2)|0,'['+M+','+(m-M)+']')),ä!=a),R=_=>(e()||s())&&R(),P=(I=$("pre").innerText.split(/\n/)).flatMap(r=>I.filter(R=>R!=r).map(R=>[R,r])),M=p=>(p[0]?3*M(p[0])+2*M(p[1]):p),console.log(P),P.reduce((r,c)=>((c[0]&&c[1])?(a=`[${c[0]},${c[1]}]`,R(),(m=M(JSON.parse(a)))>r?m:r):r),0))
