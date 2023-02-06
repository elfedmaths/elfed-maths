function loadHtml(filename){
    let xhttp;
    let element = document.getElementById('template');
    let file = filename;
    if(file){
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(){
            if(this.readyState == 4){
                if(this.status == 200){
                    element.innerHTML = this.responseText;
                    loadData(filename);
                }
                if(this.status == 400){
                    element.innerHTML = "<h1>Page Not Found</h1>";
                }
            }
        }
        xhttp.open("GET", `./templates/${file}.html`, true);
        xhttp.send();
        return;
    }
}