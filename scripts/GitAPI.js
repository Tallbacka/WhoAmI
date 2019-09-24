//"Fetching" repository data from Github

async function getRepos(){
    const repos = "https://api.github.com/users/Tallbacka/repos";
    let response = await fetch(repos);
    let json = await response.json()
    return json;
}

getRepos()
.then(json => drawRepoData(json))
.catch(err => console.log(err + ": Unable to connect to server"))

function drawRepoData(json){
    var pName = document.createElement('p');
    var li = document.createElement('li');

    var ul = document.getElementById("listContainer");

    for (let i = 0; i < json.count; i++) {
        pName.innerHTML =   json.name[i] + "<br><br>" + 
                            json.description[i] + "<br><br>" + 
                            json.html_url[i] + "<br><br>" +
                            json.updated_at



    }


    // navbar-nav
    console.log(json);
}