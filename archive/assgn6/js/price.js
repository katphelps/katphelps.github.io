$(document).ready(function(){
    $("#dproduct,#noofpc,#noofyear").change(function() {
        var filling   = $('#filling').val();
        var size = $('#size').val();

        var price = 0;

        if (filling == "Wool") {
            price += 10;
        } 
        else if (filling == "Icelandic Sheep Wool") {
            price += 25;
        }
        else
        {
            price += 30;
        }

        if (size == "40x40") {
            price += 15;
        } 
        else if (size == "60x60") {
            price += 25;
        }
        else
        {
            price += 40;
        }
        $('#price').val(price);
    });
});
