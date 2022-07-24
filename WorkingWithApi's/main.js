url = 'https://jsonplaceholder.typicode.com/posts'

async function getPosts(){
    await fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console(err.message))
}

getPosts()