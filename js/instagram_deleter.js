// When the window resizes the original Instagram gallery is buggy and must be deleted
function delete_gallery() {
    document.getElementById("gallery").style.display = "none";
    document.getElementById("extra_photo").style.display = "flex";
}

// Initializer
window.onresize = delete_gallery;