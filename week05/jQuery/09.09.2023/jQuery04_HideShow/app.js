$("#btn-hide").click(() => {
    $("#box").hide("normal");
})
$("#btn-show").click(() => {
    $("#box").show("fast");
})
$("#btn-toggle").click(() =>{
    $("#box").toggle("slow");
})