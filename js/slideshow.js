   $(function () {
            var ni = $( ".back" ).length; // Number of images
            var i = 2; // Counter In
            var o = 1; // Counter Out
            function cycleImages() {
                $("#slide" + o).fadeOut(3000);
                $("#slide" + i).fadeIn("3000");
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
            setInterval(function () { cycleImages() }, 7000);
        });
