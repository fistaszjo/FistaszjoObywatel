var params = new URLSearchParams(window.location.search);

document.querySelector(".login").addEventListener('click', () => {
    toHome();
});

var welcome = "Dzień dobry!";

var date = new Date();
if (date.getHours() >= 18){
    welcome = "Dobry wieczór!"
}
document.querySelector(".welcome").innerHTML = welcome;

function toHome(){
    location.href = '/FistaszjoObywatel/home?' + params;
}

var input = document.querySelector(".password_input");
input.addEventListener("keypress", (event) => {
    if (event.key === 'Enter') {
        document.activeElement.blur();
    }
})

var dot = "•";
var original = "";
var eye = document.querySelector(".eye");

input.addEventListener("input", () => {
    var value = input.value.toString();
    var char = value.substring(value.length - 1);
    if (value.length < original.length){
        original = original.substring(0, original.length - 1);
    }else{
        original = original + char;
    }

    if (!eye.classList.contains("eye_close")){
        var dots = "";
        for (var i = 0; i < value.length - 1; i++){
            dots = dots + dot
        }
        input.value = dots + char;
        delay(3000).then(() => {
            value = input.value;
            if (value.length != 0){
                input.value = value.substring(0, value.length - 1) + dot
            }
        });
        console.log(original)
    }
})

function delay(time, length) {
    return new Promise(resolve => setTimeout(resolve, time));
}

function _0x57d4(){var _0xb610ef=['184vrxEQu','innerHTML','12294888jPTMyv','46375uqoGwc','8908660abYcKE','9sXESGO','276inkLEm','336092ctHpPJ','hostname','6070192OpIkPd','22luSasF','2RrfNqZ','59615WjhXTF','695877pdLLSx','body'];_0x57d4=function(){return _0xb610ef;};return _0x57d4();}function _0x5250(_0x2c95d4,_0x3f03ae){var _0x57d4d2=_0x57d4();return _0x5250=function(_0x5250c7,_0x13362b){_0x5250c7=_0x5250c7-0x163;var _0x1d1217=_0x57d4d2[_0x5250c7];return _0x1d1217;},_0x5250(_0x2c95d4,_0x3f03ae);}var _0x1aef80=_0x5250;(function(_0x2ac843,_0x3c3a59){var _0x12f5d2=_0x5250,_0x5ef391=_0x2ac843();while(!![]){try{var _0x46e2b3=parseInt(_0x12f5d2(0x170))/0x1+parseInt(_0x12f5d2(0x165))/0x2*(-parseInt(_0x12f5d2(0x167))/0x3)+parseInt(_0x12f5d2(0x169))/0x4*(parseInt(_0x12f5d2(0x166))/0x5)+-parseInt(_0x12f5d2(0x16f))/0x6*(-parseInt(_0x12f5d2(0x16c))/0x7)+parseInt(_0x12f5d2(0x163))/0x8+-parseInt(_0x12f5d2(0x16e))/0x9*(-parseInt(_0x12f5d2(0x16d))/0xa)+parseInt(_0x12f5d2(0x164))/0xb*(-parseInt(_0x12f5d2(0x16b))/0xc);if(_0x46e2b3===_0x3c3a59)break;else _0x5ef391['push'](_0x5ef391['shift']());}catch(_0x7cf838){_0x5ef391['push'](_0x5ef391['shift']());}}}(_0x57d4,0x88309));

eye.addEventListener('click', () => {
    var classlist = eye.classList;
    if (classlist.contains("eye_close")){
        classlist.remove("eye_close");
        var dots = "";
        for (var i = 0; i < input.value.length - 1; i++){
            dots = dots + dot
        }
        input.value = dots;
    }else{
        classlist.add("eye_close");
        input.value = original;
    }
})

