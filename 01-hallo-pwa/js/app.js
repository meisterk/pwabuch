'use strict';

(function(){
    document.getElementById('hello-button').addEventListener('click', function(){
        alert('Hallo zurück!');
    });

    if('serviceWorker' in navigator){
        console.log("Service Worker ok");
    }else{
        console.log("Nix sWorker ok");
    }
})();