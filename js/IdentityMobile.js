function identifyMobile(judge){
    if (judge !== '1'){
        if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
            console.log('mobile');
            window.location.href = "Mobile/index-mobile.html?judge=1";
        } else {
            console.log('windows');
            window.location.href = "index.html?judge=1";
        }
    }
}

