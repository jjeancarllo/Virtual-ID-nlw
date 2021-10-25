const LinksSocialMedia = {
  github: "jjeancarllo",
  youtube: "channel/UCmRWt_WYfHTsdqnWUD4rYMQ",
  facebook: "profile.php?id=100040613592635",
  instagram: "jjeancarllo",
  twitter: "jjeancarllo_jc",
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
  })
}

getGitHubProfileInfos()