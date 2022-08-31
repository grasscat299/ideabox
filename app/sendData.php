<?php
$pass = "25cf15b6a072a56400baa85b4d669c72c747e3a02c880bcc3d5a23b65050befa";
$user = "apnwzxxgyacvim";
$dsn = "pgsql:dbname=dftur22kt5h5mr;host=ec2-44-197-128-108.compute-1.amazonaws.com;";
$pdo = new PDO( $dsn, $user, $pass );

$art = $pdo 
-> query( "select * from data" )
-> fetchall( PDO::FETCH_COLUMN );

$res = "";
for( $a = 0; $a < count( $art ); $a ++ ){
    $res .= $art[ $a ].",";
}

$res = rtrim( $res, "," );
echo $res;
$pdo = null;
?>