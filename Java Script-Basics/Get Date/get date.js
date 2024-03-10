
     function month(){
    var a=new Date()
    document.getElementById('a').innerHTML=a
    var b=a.getDate()
    var c=a.getMonth()
    var d=a.getFullYear()
    var e=a.getDay()
    var f=a.getHours()
    var g=a.getMinutes()
    var h=a.getSeconds()
    document.getElementById('b').innerHTML=b+" - "+c+" - "+d+" - "+e+" / "+f+" : "+g+" : "+h
  
    if(c=="0"){
        c="jan"
        document.getElementById('b').innerHTML=b+" - "+c+" - "+d+" - "+e+" / "+f+" : "+g+" : "+h
    }
    else if(c=="1"){
    c="Feb"
    document.getElementById('b').innerHTML=b+" - "+c+" - "+d+" - "+e+" / "+f+" : "+g+" : "+h
    }
    else if(c=="2"){
    c="Mar"
    document.getElementById('b').innerHTML=b+" - "+c+" - "+d+" - "+e+" / "+f+" : "+g+" : "+h
    }
    else if(c=="3"){
    c="Apr"
    document.getElementById('b').innerHTML=b+" - "+c+" - "+d+" - "+e+" / "+f+" : "+g+" : "+h
    }
    else if(c=="4"){
    c="May"
    document.getElementById('b').innerHTML=b+" - "+c+" - "+d+" - "+e+" / "+f+" : "+g+" : "+h
    }
    else if(c=="5"){
    c="June"
    document.getElementById('b').innerHTML=b+" - "+c+" - "+d+" - "+e+" / "+f+" : "+g+" : "+h
    }
    else if(c=="6"){
    c="July"
    document.getElementById('b').innerHTML=b+" - "+c+" - "+d+" - "+e+" / "+f+" : "+g+" : "+h
    }
    else if(c=="7"){
    c="Aug"
    document.getElementById('b').innerHTML=b+" - "+c+" - "+d+" - "+e+" / "+f+" : "+g+" : "+h
    }
    else if(c=="8"){
    c="Sep"
    document.getElementById('b').innerHTML=b+" - "+c+" - "+d+" - "+e+" / "+f+" : "+g+" : "+h
    }
    else if(c=="9"){
    c="Oct"
    document.getElementById('b').innerHTML=b+" - "+c+" - "+d+" - "+e+" / "+f+" : "+g+" : "+h
    }
    else if(c=="10"){
    c="Nov"
    document.getElementById('b').innerHTML=b+" - "+c+" - "+d+" - "+e+" / "+f+" : "+g+" : "+h
    }
    else if(c=="11"){
    c="Dec"
    document.getElementById('b').innerHTML=b+" - "+c+" - "+d+" - "+e+" / "+f+" : "+g+" : "+h
    }
   
    if(e=="0"){
        e="SUNDAY"
        document.getElementById('b').innerHTML=b+" - "+c+" - "+d+" - "+e+" / "+f+" : "+g+" : "+h
    }
    else if(e=="1"){
        e="MONDAY"
        document.getElementById('b').innerHTML=b+" - "+c+" - "+d+" - "+e+" / "+f+" : "+g+" : "+h
    }
    else if(e=="2"){
        e="TUESDAY"
        document.getElementById('b').innerHTML=b+" - "+c+" - "+d+" - "+e+" / "+f+" : "+g+" : "+h
    }
    else if(e=="3"){
        e="WEDNESDAY"
        document.getElementById('b').innerHTML=b+" - "+c+" - "+d+" - "+e+" / "+f+" : "+g+" : "+h
    }
    else if(e=="4"){
        e="THUERSDAY"
        document.getElementById('b').innerHTML=b+" - "+c+" - "+d+" - "+e+" / "+f+" : "+g+" : "+h
    }
    else if(e=="5"){
        e="FRIDAY"
        document.getElementById('b').innerHTML=b+" - "+c+" - "+d+" - "+e+" / "+f+" : "+g+" : "+h
    }
    else if(e=="6"){
        e="SATURDAY"
        document.getElementById('b').innerHTML=b+" - "+c+" - "+d+" - "+e+" / "+f+" : "+g+" : "+h
    }
   
}
setInterval(month,1000)
