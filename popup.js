function call() {
    var exp = document.getElementById('regExp').value;
    chrome.runtime.sendMessage({"cmd": "start","regExp":exp}, function(response) {
        console.log(response);
    });

}

function change(){
    var exp = document.getElementById('regExp').value;
    chrome.runtime.sendMessage({"cmd": "regExp","regExp":exp}, function(response) {
        console.log(response);
    });

}

window.onload=function(){
    document.getElementById('send').addEventListener('click', call);
    document.getElementById('regExp').addEventListener('keyup',change);
}

chrome.runtime.sendMessage({"cmd": "getState"}, function(response) {

    document.getElementById('send').checked = !response.result;
    
});

chrome.runtime.sendMessage({"cmd": "getExp"}, function(response) {

    document.getElementById('regExp').value = response.result;
    
});
