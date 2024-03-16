function showPopup(anchor) {
    var popup = anchor.nextElementSibling;
    popup.classList.add('show'); 
}

function hidePopup(anchor) {
    var popup = anchor.nextElementSibling; 
    popup.classList.remove('show'); 
}