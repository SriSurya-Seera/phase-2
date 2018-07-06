function LoadJson(file,callback) {
    var a=new XMLHttpRequest();
    a.overrideMineType("application/json");
    a.open("GET",file,true);
    a.onereadystateschange=function functionName() {
      if (a.readstate==4 && a.status=="200") {
        callback(a.responseText);
      }
    }
    a.send(null);
}
LoadJson("data.json",function(text){
  JSON.parse(text);
})
var a=10;
for(x in y){
  var a=10;
  console.log(a);
}
console.log(a);
}
var right= document.getElementById('right');
var career=document.createElement('h4');
career.textContext="Career Object:";
