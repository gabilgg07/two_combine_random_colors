var i;
var i2;
const sayilar = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];

function strsOfArr() {
    i = Math.floor(Math.random() * sayilar.length);
            if(i+8<=15){
                i2 = i+8;
            }else{
                i2 = i-8;
            }
            var str1 = sayilar[i];
            var strC1 = sayilar[i2];

            return [str1, strC1];
}

var arrStr;

function reng() {
            arrStr = strsOfArr();
            var str1 = arrStr[0];
            var strC1 = arrStr[1];

            
            arrStr = strsOfArr();
            var str2 = arrStr[0];
            var strC2 = arrStr[1];

            arrStr = strsOfArr();
            var str3 = arrStr[0];
            var strC3 = arrStr[1];

            arrStr = strsOfArr();
            var str4 = arrStr[0];
            var strC4 = arrStr[1];

            arrStr = strsOfArr();
            var str5 = arrStr[0];
            var strC5 = arrStr[1];

            arrStr = strsOfArr();
            var str6 = arrStr[0];
            var strC6 = arrStr[1];
            return [("#" + str1 + str2 + str3 + str4 + str5 + str6),("#" + strC1 + strC2 + strC3 + strC4 + strC5 + strC6)];
}

var rengDeyis = document.getElementById("rengDeyis");
var rengQutusu = document.getElementById("rengQutusu");
var rengQutusuCombinasiya = document.getElementById("rengQutusuCombinasiya");

rengDeyis.addEventListener("click", function(){
    var rengler = reng();
    rengQutusu.style.backgroundColor =rengler[0];
    rengQutusu.style.color = rengler[1];
    rengQutusuCombinasiya.style.backgroundColor = rengler[1];
    rengQutusuCombinasiya.style.color = rengler[0];
});