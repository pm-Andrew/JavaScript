window.addEventListener('DOMContentLoaded', () => {
    const url = 'option1.json'

    fetch(url)
        .then((response) => response.json())
        .then(data => {

            // sending the data to the console 
            // console.log(data)

            // handle to #container
            const container = document.querySelector('#container');
            // create an unordered list
            let ul = document.createElement('ul')
            // const firstName = data['person']['firstName']
            data.members.forEach((member) => {
                console.log(member.person)
                let li = document.createElement('li')
                let h2 = document.createElement('h2')
                let img = document.createElement('img')
                let p = document.createElement('p')


                h2.innerHTML = `<strong>${member.person.firstName}</strong> ${member.person.lastName}`
                img.setAttribute('src', member.person.url)
                img.setAttribute('alt', `Post-Time Warp ${member.person.firstName}`)
                p.innerHTML = `<strong>${member.person.firstName}'s</strong> hobbies are <strong>${member.person.hobbies[0]}, ${member.person.hobbies[1]}, ${member.person.hobbies[2]}.</strong><br> 
                    Their favorite band according to Reddit, are <strong>${member.person.misc.favoriteBand}</strong> & they love to eat <strong>${member.person.misc.favoriteFood}</strong>`



                ul.appendChild(li)
                li.appendChild(h2)
                li.appendChild(img)
                li.appendChild(p)
            })
            container.append(ul)
        });

});