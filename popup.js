document.addEventListener('DOMContentLoaded', function(){
    document.getElementById("checkPage").addEventListener("click", browsingData);
})


function browsingData(){
    chrome.browsingData.remove({
    "originTypes": {
    "protectedWeb": false,
    "unprotectedWeb": false,
    "extension": false
    }
    }, {
    "appcache": false,
    "cache": true,
    "cookies": true,
    "downloads": false,
    "fileSystems": false,
    "formData": false,
    "history": true,
    "indexedDB": false,
    "localStorage": false,
    "passwords": false,
    "webSQL": false
    }, browsingData);
    }




