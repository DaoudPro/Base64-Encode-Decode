// The btoa() method encodes a string in base-64.
// btoa() : يتم استخدامها لتشفير بيانات النصية إلى تشفير بنظام القاعدة64
// ----------------------------------------------------------------------------
// This method uses the "A-Z", "a-z", "0-9", "+", "/" and "=" characters to encode the string. 
// هذا عنصر يستخدم احرف اللغة الإنجليزية , الصغيرة والكبيرة , الأرقام و علامة 
// +  و  /  و =
// عندما يقوم بتشفير النص
//------------------------------------------------------------------------------
// Tip: Use the atob() method to decode a base-64 encoded string.
// atob() : يتم استخدام هذا العنصر لفك تشفير نص مشفر بنظام قاعدة64

let x = "Daoud Hattna";
let encoded = window.btoa(x);

let decoded = window.atob(encoded);

// alert(encoded);

var text =   document.getElementById("a");
var rusult = document.getElementById("b");
var select =  document.getElementById("c");

text.addEventListener("input", ()=>{
    coding();
});


function coding(){
if(select.value == "encode"){
    rusult.value = btoa(text.value);
}else{
    rusult.value = atob(text.value);
}
}

