document.addEventListener('DOMContentLoaded', () => {
   const baseUrl = "http://localhost:3000/users"

    const getUsers = () => {
        fetch(baseUrl)
        .then(response => response.json())
        .then(users => console.log(users))
    }
    

    getUsers()
})

    // const exampleFetchAdapter = new fetchAdapter("http://localhost:3000/")

    // exampleFetchAdapter.get("users", users => users.forEach(console.log))