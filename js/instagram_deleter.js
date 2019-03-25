// When the window resizes the original Instagram gallery is buggy and must be deleted
function delete_gallery() {
    document.getElementById("gallery").style.display = "none";
    document.getElementById("alternative_photo").style.display = "initial";
}

// Initializer
window.onresize = delete_gallery;