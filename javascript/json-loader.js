// document.write('<script type="text/javascript" src="./javascript/FileSaver/dist/FileSaver.js" charset="utf-8"></script>')

// JSON数据解析Demo
function ShowLikeCount(){
    var request = new XMLHttpRequest()
    request.open("get", "../asset/docs/counter.json")
    request.send(null)

    request.onload = () => {
        if (request.status == 200){
            var data = JSON.parse(request.responseText)

            // fill like-count
            var like_count = document.getElementById("like_count")
            if (like_count) {
                like_count.innerText = data[0].like_count
            }
        }
    }
}

window.onload = function(){
    ShowLikeCount()
}