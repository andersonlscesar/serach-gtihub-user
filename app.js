(() => {
    'use strict'

    const btn = document.querySelector('.btn')
    const userInfoSpot = document.querySelector('.user-info')

    btn.addEventListener('click', findUser)

    function findUser(e) {
        e.preventDefault()
        userInfoSpot.innerHTML = ''
        let userName = document.querySelector('.user').value.toLowerCase()
        let fetchApi = fetch(`https://api.github.com/users/${userName}`, {
            method: 'GET',
            headers: {
                accept: 'application/vnd.github.v3+json'
            }
        })

        fetchApi
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            formatDocument(data)
        })
        .catch((error) => {
            console.log(error)
        })

    }

    function formatDocument(data) {
        let name = data.name
        let followersAmount = data.followers
        let followingAmount = data.following 
        let location = data.location
        let avatarUrl = data.avatar_url

        let divLeft = document.createElement('div')

        divLeft.innerHTML = ''

        divLeft.classList.add('left')
        divLeft.innerHTML = `  
                            <p>Name: ${name}</p>
                            <p>Number of Followers: ${followersAmount}</p>
                            <p>Following: ${followingAmount} </p>
                            <p>Location: ${location} </p>        
                        `
        userInfoSpot.appendChild(divLeft)
        
        let tagImg = document.createElement('img')
        tagImg.setAttribute('src', avatarUrl)
        
        userInfoSpot.appendChild(tagImg)
        
        
    }

    
})()