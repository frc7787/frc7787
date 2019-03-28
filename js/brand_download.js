function bannerless_appear() {
    anime({
        targets: '#bannerless_download',
        opacity: 1,
        duration: 1000,
    });
}

function bannerless_disappear() {
    anime({
        targets: '#bannerless_download',
        opacity: 0,
        duration: 1000,
    });
}

function full_appear() {
    anime({
        targets: '#full_download',
        opacity: 1,
        duration: 1000,
    });
}

function full_disappear() {
    anime({
        targets: '#full_download',
        opacity: 0,
        duration: 1000,
    });
}

function zip_appear() {
    anime({
        targets: '#zip_download',
        opacity: 1,
        duration: 1000,
    });
}

function zip_disappear() {
    anime({
        targets: '#zip_download',
        opacity: 0,
        duration: 1000,
    });
}
// function bannerless_appear(){    
//     while (document.getElementById('bannerless_download').style.opacity < 1){
//         // The opacity is a string https://stackoverflow.com/a/12648033/9547841
//         function real_bannerless_appear() {
//             document.getElementById('bannerless_download').style.opacity = parseFloat(document.getElementById('bannerless_download').style.opacity) + 0.1;
//             document.getElementById('bannerless_info').style.opacity = parseFloat(document.getElementById('bannerless_info').style.opacity) - 0.1;
//         }
//         window.setTimeout(real_bannerless_appear, 100);
//     }
// }