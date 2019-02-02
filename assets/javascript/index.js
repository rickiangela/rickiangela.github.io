// $(document).ready(function () {

//     setTimeout(function () {

//         $('#myModal').fadeIn();
//         $('.container').addClass('blur');

//     }, 2000);

// });

var modal = document.getElementById('myModal');
var span = document.getElementsByClassName("close")[0];
var answer = document.getElementsByClassName('trigger')[0];

span.onclick = function () {
    $('#myModal').fadeOut();
    $('.container').removeClass('blur');
}

window.onclick = function (event) {
    if (event.target == modal) {
        $('#myModal').fadeOut();
        $('.container').removeClass('blur');
    }
}

answer.onclick = function (event) {
    $('#myModal').fadeOut();
    $('.container').removeClass('blur');
}