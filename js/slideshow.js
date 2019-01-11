   $(function () {
            var ni = $( ".back" ).length; // Number of images
            var i = 2; // Counter In
            var o = 1; // Counter Out
            function cycleImages() {
                $("#slide" + o).fadeOut(2000);
                $("#slide" + i).fadeIn("fast");
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
