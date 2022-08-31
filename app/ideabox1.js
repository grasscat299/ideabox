var showart=[];
var p;
var btn;

$( function(){
    $( "#commit" ).on( "mousedown", function(){
        let art = $( "#mytextarea" ).val();
        sendData( art );
    });
});

window.addEventListener( "load",
function(){
    getData();
    p = $( ".p" );
    btn = $( "#commit" )[0];
    console.log( "btn", btn );
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

var sendData = ( art ) => {
    let req = new XMLHttpRequest();
    req.open("GET","https://marubox.herokuapp.com/rcvData.php?art="+art );
    req.onreadystatechange = function(){
        if(req.readyState == 4 && req.status == 200 ){
            getData();
            return;
        }
    };
    req.send();   
}

var getData = () => {
    let req = new XMLHttpRequest();
    req.open("GET","https://marubox.herokuapp.com/sendData.php" );
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
//localhost/marubox/index.html