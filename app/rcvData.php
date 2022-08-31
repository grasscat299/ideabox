<?php
$art = $_GET[ "art" ];
$sub = $_GET[ "sub" ];

$pass = "25cf15b6a072a56400baa85b4d669c72c747e3a02c880bcc3d5a23b65050befa";
$user = "apnwzxxgyacvim";
$dsn = "pgsql:dbname=dftur22kt5h5mr;host=ec2-44-197-128-108.compute-1.amazonaws.com;";
$pdo = new PDO( $dsn, $user, $pass );

$pdo -> query( "insert into ".$sub."(art) values('".$art."')" );

$pdo = null;
?>