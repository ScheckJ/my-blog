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


function addBlogPost() {
    // pull the blog data from localstorage
    const blogData = JSON.parse(localStorage.getItem('blogs'))  || []
// <section> 
//     <h2>Blog Title</h2>
//     <div>
//         <p>
//             Here is the content
//         </p>
//     </div>
// </section>

// create a loop for the blogs and in the loop create the section. h2, div and p for the data
for (let i = 0; i < blogData.length; i++) {
    const title = blogData[i].title
    const content = blogData[i].content
    const username = blogData[i].username

    const postDiv = document.createElement('section');
    postDiv.classList.add('post');
    
    const titleElement = document.createElement('h2');
    titleElement.textContent = title;
    
    const contentDiv = document.createElement('div');
    
    const contentElement = document.createElement('p');
    contentElement.textContent = content;
    
    const usernameElement = document.createElement('p');
    usernameElement.textContent = 'posted by: ' + username;
    
    
    
    // append the elements onto the page
    postDiv.appendChild(titleElement)
    postDiv.appendChild(contentElement)
    postDiv.appendChild(usernameElement)

    blogPostscontainer.appendChild(postDiv)
    
}



}

addBlogPost()