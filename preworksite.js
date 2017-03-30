var moreInfo =
    document.getElementsByClassName('more-info');

alert(moreInfo);

function main() {
  $('.main-content').hide;
  $('.main-content').fadeIn(1000);
}

$(document).ready(main);

function validateForm() {
    var x = document.forms[".form"]
    ["name"].value;
    if (x == "") {
        alert("Don't forget the name!");
        return false;
    var y = document.forms[".form"]["email"].value;
    if (y == "") {
        alert("Don't forget the email!");
        return false;
    }
}