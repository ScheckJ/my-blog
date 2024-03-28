const changetheme = document.querySelector('#theme')

const container = document.querySelector('.container')

const blogPostscontainer = document.querySelector('#blogsContainer')

let mode = 'light'

changetheme.addEventListener('click', function () {
    if (mode === 'light') {
        mode = 'dark'; container.setAttribute('class', 'dark')
    } else {
        mode = 'light'; container.setAttribute('class', 'light')
    }
})
