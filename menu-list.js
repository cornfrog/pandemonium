function menu(){
    if(document.getElementById("menu-symb").textContent === "⁝"){
        document.getElementById("menu-symb").textContent= "✕"
        document.getElementById("menu-list").style.display = "unset"
        return
    }
    if(document.getElementById("menu-symb").textContent === "✕"){
        document.getElementById("menu-symb").textContent= "⁝"
        document.getElementById("menu-list").style.display = "none"
        return
    }
}