//"Fetching" repository data from Github
const repos = "https://api.github.com/users/Tallbacka/repos";

async function getRepos() {
    let response = await fetch(repos);
    let data = await response.json()
    return data;
}

getRepos()
    .then(data => drawRepoData(data))
    .then(data => console.log(data))
    .catch(err => console.log(err));

// Sort by last changed date

function drawRepoData(data) {

    convertAndSortDate(data)

    console.log(data);
    var ul = document.getElementById("listRepos");

    for (let i = 0; i < Object.values(data).length; i++) {
        var pName = document.createElement('p');
        var li = document.createElement('li');
        var a = document.createElement('a');
        var insert = document.createElement('i')

        insert.setAttribute('class', "fab fa-github-square");

        a.setAttribute('href', data[i].html_url);
        a.appendChild(insert);

        pName.innerHTML = "Projektnamn: " + data[i].name + "<br>" + "Senast ändrad: " + data[i].updated_at;
        pName.setAttribute = ("class", "paragraphName");
        pName.insertAdjacentElement("afterbegin", a)
        li.appendChild(pName);
        ul.appendChild(li);
    }
}

function convertAndSortDate(data) {
    var dateJson = JSON.stringify(data[0].updated_at)
    var date = new date(dateJson)

    // data.sort(function (a, b) { return a.updated_at - b.updated_at });
    console.log(date);
}