document.addEventListener('DOMContentLoaded', () => {

    const exampleFetchAdapter = new fetchAdapter("http://localhost:3000/")

    exampleFetchAdapter.get("users", users => users.forEach(console.log))

})