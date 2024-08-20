// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
function slash(id) {
    let name = "check-" + id;
    let elem = document.getElementById(name);
    let label = $('label[for="'+ name +'"]')
    if (elem.checked) {
        label.addClass('traced')
    } else {
        label.removeClass('traced')
    }
}