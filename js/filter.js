//GOAL: ANY FILTER FUNCTION GOES IN THIS FILE HERE


/**
 * Filter function for products.html religion radio button
 * 
 * When button is clicked Science Section is hidden
 */
function RelFilter(){
    document.getElementById("science-section").style.display = "none";
    document.getElementById("religion-section").style.display = "block";
    document.getElementById("rel-btn").style.background = "dimgray";
    document.getElementById("rel-btn").style.borderColor = "black";
    document.getElementById("rel-btn").style.color = "white";
    document.getElementById("all-btn").style.background = "gray";
    document.getElementById("all-btn").style.borderColor = "gray";
    document.getElementById("all-btn").style.color = "black";
    document.getElementById("sci-btn").style.background = "gray";
    document.getElementById("sci-btn").style.borderColor = "gray";
    document.getElementById("sci-btn").style.color = "black";
}

/**
 * Filter function for products.html science radio button
 * 
 * When button is clicked religion section is hidden
 */
function SciFilter(){
    document.getElementById("religion-section").style.display = "none";
    document.getElementById("science-section").style.display = "block";
    document.getElementById("sci-btn").style.background = "dimgray";
    document.getElementById("sci-btn").style.borderColor = "black";
    document.getElementById("sci-btn").style.color = "white";
    document.getElementById("rel-btn").style.background = "gray";
    document.getElementById("rel-btn").style.borderColor = "gray";
    document.getElementById("rel-btn").style.color = "black";
    document.getElementById("all-btn").style.background = "gray";
    document.getElementById("all-btn").style.borderColor = "gray";
    document.getElementById("all-btn").style.color = "black";
}

/**
 * Filter function for products.html all radio button
 * 
 * When button is clicked both science and religion sections are shown
 */
function AllFilter(){
    document.getElementById("religion-section").style.display = "block";
    document.getElementById("science-section").style.display = "block";
    document.getElementById("all-btn").style.background = "dimgray";
    document.getElementById("all-btn").style.borderColor = "black";
    document.getElementById("all-btn").style.color = "white";
    document.getElementById("rel-btn").style.background = "gray";
    document.getElementById("rel-btn").style.borderColor = "gray";
    document.getElementById("rel-btn").style.color = "black";
    document.getElementById("sci-btn").style.background = "gray";
    document.getElementById("sci-btn").style.borderColor = "gray";
    document.getElementById("sci-btn").style.color = "black";
}