var page_shown = false

function show_left_space(){
    var hidden_space = document.getElementById("hidden_space")
    if (page_shown){
        return
    }

    // Show hidden-page
    hidden_space.animate([
        {transform: 'translateX(-75vw)'},
        {transform: 'translateX(0vw)'}
    ], 1500)
    hidden_space.style.left = "0vw"

    // change callback
    var heart_icon = document.getElementById("heart_icon")
    heart_icon.addEventListener("click", ()=>{
        hide_left_space()
    })

    page_shown = true
}

function hide_left_space(){
    //show hidden-page
    var hidden_space = document.getElementById("hidden_space")
    hidden_space.animate([
        {transform: 'translateX(75vw)'},
        {transform: 'translateX(0vw)'}
    ], 1500)
    hidden_space.style.left = "-75vw"

    //change heart-icon callback
    var heart_icon = document.getElementById("heart_icon")
    heart_icon.addEventListener("click", ()=>{
        show_left_space()
    })
    page_shown = false
}

// Init callback
var heart_icon = document.getElementById("heart_icon")
    heart_icon.addEventListener("click", ()=>{
    show_left_space()
})
