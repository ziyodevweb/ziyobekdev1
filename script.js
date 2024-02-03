async function getuser() {
    let follow1 = document.getElementById("follow1")
    let follow2 = document.getElementById("follow2")
    let follow3 = document.getElementById("follow3")
    let follow4 = document.getElementById("follow4")
    let h1 = document.getElementById("name")
    let img = document.getElementById("img")
    let inp = document.getElementById("inp").value
    let githubinfo = await fetch(`http://api.github.com/users/${inp.toLowerCase()}`)
    let gitres = await githubinfo.json()
            img.src = gitres.avatar_url
            h1.innerText = gitres.login
            follow1.innerText = gitres.followers
            follow2.innerText = gitres.following
            follow3.innerText = gitres.public_repos
            follow4.href = gitres.html_url
            follow4.innerText = gitres.html_url
}
let btn = document.getElementById("btn")

btn.addEventListener("click",()=>{
    getuser()
})