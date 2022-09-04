var showart=[];
var p;
var btn;

$( function(){
    $( "#commit" ).on( "mousedown", function(){
        let art = $( "#mytextarea" ).val();
        let a = $( "input[ name=sub ]" );
        let sub;
        for( let b = 0; b < a.length; b ++ ){
            if( a[b].checked ){
                sub = a[b].value;
                break;
            }
        }
        sendData( art, sub );
    });

    $( "#createradiobtn" ).click( function(){
        createradio( $( "#radiovalue" ).val(), $( "#radioname" ).val() );
    });

    let radiobtn = $( "input[name=sub]" );
    for( let target of radiobtn ){
        target.addEventListener( "change", function(){
            console.log( "change", target.value );
            getData( target.value );
        }, false);
    }
});

window.addEventListener( "load",
function(){
    getData( "other" );
    p = $( ".p" );
    btn = $( "#commit" )[0];

},
false );

var inputart = () => {
    for( let a = 0; a < p.length; a ++ ){
        console.log( "a", a );
        p[a].remove();
    }
    for( let a = 0; a < showart.length ; a ++ ){
        btn.insertAdjacentHTML( "afterend", "<p class='p'>"+showart[a]+"</p>" );
    }
    p = $( ".p");
}

var sendData = ( art, sub ) => {
    let req = new XMLHttpRequest();
    req.open("GET","https://marubox.herokuapp.com/rcvData.php?art="+art+"&sub="+sub );
    req.onreadystatechange = function(){
        if(req.readyState == 4 && req.status == 200 ){
            console.log( "art", art, "sub", sub );
            getData( sub );
            return;
        }
    };
    req.send();   
}

var getData = ( sub ) => {
    let req = new XMLHttpRequest();
    req.open("GET","https://marubox.herokuapp.com/sendData.php?sub="+sub );
    req.onreadystatechange = function(){
        if(req.readyState == 4 && req.status == 200 ){
            let res = req.responseText;
            showart = [];
            showart = res.split( "," );
            inputart();
            return;   
        }
    };
    req.send();
}

var createradio = (value, name) => {
    let req = new XMLHttpRequest();
    req.open("GET","https://marubox.herokuapp.com/createradio.php?title="+value );
    req.onreadystatechange = function(){
        if(req.readyState == 4 && req.status == 200 ){
            console.log( req.responseText );
            $( "#radioform" ).append( '<input type="radio" name="sub" value="'+value+'">'+name+"</input>" )
        }
    };
    req.send();
}
//localhost/marubox/index.html