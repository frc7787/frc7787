   $(function () {
            var ni = $( ".back" ).length; // Number of images
            var i = 2; // Counter In
            var o = 1; // Counter Out
            function cycleImages() {
                document.getElementById("#slide" + o).style.zIndex = "20"; 
                document.getElementById("#slide" + i).style.zIndex = "40"; 
                $("#slide" + i).fadeIn("slow");
                document.getElementById("#slide" + o).style.display = "hidden"; 
                o = i;
                if (i < ni) {
                    i = i + 1;
                    if (i >= ni) {                        
                        i = 1;
                    } 
                }
                else {
                    i = 1;
                }
            }
            cycleImages();
            setInterval(function () { cycleImages() }, 5000);
        });
