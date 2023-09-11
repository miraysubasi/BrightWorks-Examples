// $("#city").on("change", function(){

// })

// document.getElementById("#city").addEventListener("change", function(){

// })

$("#city").change(function () {
    
})
$("#register-form").submit(function(e){
    e.preventDefault();
    $("#message").text("Kayıt işlemi başarıyla tamamlanmıştır.");
})

 function selectCity(){
     let selectedCity = $("#city :selected").text();
     let selectedCityValue = $("#city :selected").attr("value");
     //value için başka alternatif var mı araştırın.
     $("#message").text(`${selectedCity}şehrini seçtiniz.Plaka kodu ${selectedCityValue}`);
 };
selectCity();