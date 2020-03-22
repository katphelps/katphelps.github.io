/* used this as a guide https://designmodo.com/shopping-cart-ui/ */\
$('.minus-btn').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());
    console.log("minus")
    if (value > 1) {
        value = value - 1;
    } 
    else {
        value = 0;
    }
 
  $input.val(value);
 
});
 
$('.plus-btn').on('click', function(e) {
    console.log("plus")

    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());
    if (value < 100) {
        value = value + 1;
    } else {
        value =100;
    }
 
    $input.val(value);
});