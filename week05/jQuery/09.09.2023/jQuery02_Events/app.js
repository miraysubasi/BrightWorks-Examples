$("#ad-soyad").keypress(function(e){
    console.log(e.target.value);
})

$("#keypress").keypress(function(e){
    console.log("keypress olayı gercekleşti...");
})

$("#keydown").keydown(function(e){
    console.log("keydown olayı gercekleşti...");
})

$("#keyup").keyup(function(e){
    console.log("keyup olayı gercekleşti...");
})
$("button").dblclick(function(e){
    $(".box").css("background-color", "red");
    $(".box").css("color", "white");
    //console.log("çift tıklandı...");
})