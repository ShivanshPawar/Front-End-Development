console.log("Assignment - 9");

color = prompt("Eenter traffic light color red, yellow, green : ");

if (color == "red" || color == "yellow" || color == "green") {
    
    if (color == "red") {
        console.log("Stop!");
    } else if (color == "yellow") {
        console.log("Get Ready!");
    } else if (color == "green") {
        console.log("Go!");
    }

}else{
    console.log("Enter vaild traffic light color");
}