
function addBlogPost() {
    // pulled the blog data from localstorage
    const blogData = JSON.parse(localStorage.getItem('blogs'))  || []
    
// created a loop for the blogs and in the loop create the section. h2, div and p for the data
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
    
    
    
    // appended the elements onto the page
    postDiv.appendChild(titleElement)
    postDiv.appendChild(contentElement)
    postDiv.appendChild(usernameElement)

    blogPostscontainer.appendChild(postDiv)
    
}



}

addBlogPost()