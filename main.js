img = "";
status="";

function preload()
{
    img = loadImage('https://image.shutterstock.com/image-photo/little-puppy-tabby-kitten-260nw-654539092.jpg');
}

function draw()
{
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Dog", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 360);

    fill("#FF0000");
    text("Cat", 320, 120);
    noFill();
    stroke("#FF0000");
    rect(300, 90, 2700, 320);
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function modelLoaded()
{
    console.log("Model Loaded !");
    status = true;
    objectDetector.detect(img, gotResult);
}
function gorResult(error, results)
{
    if(error)
    {
        console.log(error);
    }
    console.log(results);
}