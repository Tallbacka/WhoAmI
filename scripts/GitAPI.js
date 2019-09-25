//"Fetching" repository data from Github
const repos = "https://api.github.com/users/Tallbacka/repos";

// Using an asynch function so the rest of the operations can continue
async function getRepos() {
    let response = await fetch(repos);
    let data = await response.json()
    return data;
} getRepos() //Using anonomys functions and promises to retrieve and validate data.
    .then(data => drawRepoData(data))
    .then(data => console.log(data))
    .catch(err => console.log(err));

// creates the elements and populates them with data
function drawRepoData(data) {

    var ul = document.getElementById("listRepos");

    for (let i = 0; i < Object.values(data).length; i++) {
        var pName = document.createElement('p');
        var pDescription = document.createElement('p');
        var li = document.createElement('li');
        var a = document.createElement('a');
        var insert = document.createElement('i')

        li.setAttribute('class', "repoListItems")
        insert.setAttribute('class', "fab fa-github-square repoLogo");
        insert.setAttribute('style', "color: black")
        a.setAttribute('href', data[i].html_url);
        a.setAttribute('class', "repoLink")
        a.appendChild(insert);

        pDescription.innerHTML = data[i].description
        pDescription.setAttribute('id', "pDescription")
        pName.innerHTML = data[i].name
        pName.setAttribute("class", "pName");

        li.appendChild(pName);
        li.appendChild(pDescription);
        li.appendChild(a);

        ul.appendChild(li);
    }
}