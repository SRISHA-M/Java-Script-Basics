
    function ab(){
    w=document.getElementById("name").value
    x=document.getElementById("em").value
    y=document.getElementById("age").value
    z=document.getElementById("tel").value
    x1=document.getElementById("s1").value
    x2=document.getElementById("s2").value
    if(!w==""){
        document.getElementById("d").style.display="none"
    }
    else{
        document.getElementById("d").style.display="inline"
    }
    if(!x==""){
        document.getElementById("e").style.display="none"
    }
    else{
        document.getElementById("e").style.display="inline"
    }
    if(!y==""){
        document.getElementById("f").style.display="none"
    }
    else{
        document.getElementById("f").style.display="inline"
    }
    if(!z==""){
        document.getElementById("g").style.display="none"
    }
    else{
        document.getElementById("g").style.display="inline"
    }

    document.getElementById("b").innerHTML=w
    document.getElementById("c").innerHTML=x

    return false
    }