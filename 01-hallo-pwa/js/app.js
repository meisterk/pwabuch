'use strict';

(function(){
    document.getElementById('hello-button').addEventListener('click', function(){
        alert('Hallo zurück!');
    });

    if('serviceWorker' in navigator){
        navigator.serviceWorker.register('./service-worker.js').then(function(){
            console.log("Service Worker wurde registriert");
        });
    }else{
        console.log("Browser bietet keine Unterstützung für Service Worker");
    }
})();