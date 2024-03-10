
    var arr=['img4.jpg','img5.jpg','img6.jpg','img7.jpg','img8.jpg','img9.jpg']
    var z=0
    document.getElementById('a').src=arr[z]
    function pl(){
        ++z
        if(z>arr.length-1){
            z=0
        }
        document.getElementById('a').src=arr[z]
       
    }
    
    function mi(){
        --z
        if(z<0){
            z=arr.length-1
        }
        document.getElementById('a').src=arr[z]
       
    }
    setInterval(2000)
