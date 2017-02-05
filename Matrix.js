window.onload = initialize;

function initialize() {

    // getting the canvas so we can work with it
    var canvas = document.getElementById("matrixScreen");

    // initialize height and width of screen
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    // setting pixel for the letters
    var pixelHeight = 12;
    
    // calculating number of columns for the screen
    var numberOfColumns = canvas.width/pixelHeight;

    var zeroNumber = "0";

    // create array of number 0
    var zeroArray = zeroNumber.split("");

    var oneNumber = "1";

    // create array of number 1
    var oneArray = oneNumber.split("");

    var numbers = [];

    for (var i = 0; i < numberOfColumns; i++) {
        numbers[i] = 1;
    }

    context = canvas.getContext('2d'); 

    function createMatrix() {

        // setup matrix rain style
        context.fillStyle="rgba(0,0,0,0.05)";
        context.fillRect(0,0,canvas.width, canvas.height);
        context.fillStyle= "#0f0";
        context.font = pixelHeight + "px arial";

        // logic to create matrix rain effect
            for (var i = 0; i < numbers.length; i++) {
                textZero = zeroNumber,
                textOne = oneNumber;

                if ( i % 2 == 1)
                {
                    context.fillText(textZero,i * pixelHeight, numbers[i] * pixelHeight);
                }
                else
                {
                    context.fillText(textOne,i * pixelHeight, numbers[i] * pixelHeight);	
                }

                if (numbers[i] * pixelHeight > canvas.height && Math.random() > 0.975)
                {
                        numbers[i]=0;
                }
                
                numbers[i]++;
            }
        }
    setInterval(createMatrix,120);
}