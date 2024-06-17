document.addEventListener("DOMContentLoaded", function() {
    // Attach event listener to the button
    var btnHello = document.getElementById("btnHello");
    btnHello.addEventListener("click", function() {
        // Show alert message with greeting
        alert("안녕하세요!");
    });
});