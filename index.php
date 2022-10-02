<?php
/* Попытка на беке скидывать кеш*/
if(preg_match('#^www\.*#', strval($_SERVER['HTTP_HOST']))){
    header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
    header("Cache-Control: post-check=0, pre-check=0", false);
    header("Pragma: no-cache");
    header("Location: http://" . preg_replace('#^www\.*#', '',  $_SERVER['HTTP_HOST']));
    include( 'build/index.html' );
}elseif($_SERVER['REQUEST_URI'] == '/robots.txt'){
    echo '<pre>';
    include( 'build/robots.txt' );
    echo '</pre>';
}elseif($_SERVER['REQUEST_URI'] == '/sitemap.xml'){
    header('Content-Type: application/xml');
    $xml = file_get_contents('build/sitemap.xml');
    echo $xml;
}elseif($_SERVER['REQUEST_URI'] == '/google5bb194f153983f91.html'){
    include( 'google5bb194f153983f91.html' );
}else{
    include( 'build/index.html' );
}
