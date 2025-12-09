// Dark Mode

let container = document.getElementById("container");
let heading = document.getElementById("heading");
let para = document.getElementById("para");
let icon = document.getElementById("icon");


function darkMode(e){
        container.className = "darkContainer";
        heading.className = "darkHeading";
        para.className = "darkPara";
        icon.className = "darkIcon";
}

function lightMode(e){
        container.className = "lightContainer";
        heading.className = "lightHeading";
        para.className = "lightPara";
        icon.className = "lightIcon";
}


function convertMode(e){
    if(e.className === "lightIcon"){
        return darkMode(this);
    }else{
        return lightMode(this);
}
}