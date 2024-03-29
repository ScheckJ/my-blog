const formData = document.getElementById('form')

// created function to push values into the local storage
function start(event) {
    event.preventDefault();

    const blogs = JSON.parse(localStorage.getItem('blogs'))  || []

    const username = document.getElementById('uname').value
    const title = document.getElementById('title').value
    const content = document.getElementById('content').value

    const blogpost = {
        username,
        title,
        content
    }

    blogs.push(blogpost)

   localStorage.setItem('blogs', JSON.stringify(blogs))
    location.href = './blog.html'
}


formData.addEventListener('submit', start)