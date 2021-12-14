(k=document.body.innerText.split(/\n(?!$)/).reduce((a,c)=>([d,n]=c.split(" "),i=d[0]=='f'?0:2,m=d[0]=='u'?-1:1,a[i]+=m*n,i||(a[1]+=a[2]*n),a),[0,0,0]),k[0]*k[1])
