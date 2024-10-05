button = document.querySelector("button");

button.addEventListener('click', (event) => {
    const date = new Date();
    fetch('post/create', {
        method: 'POST',
        body: JSON.stringify({
            name: 'New Post',
            author: 'Author',
            description: 'desc',
            time: `${date.getHours()}:${date.getMinutes()}`
        }),
        headers: {
            'Content-Type': 'application/json'  
        }
    })
})