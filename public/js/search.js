
//This will take the search value and add it to the endpoint. .
const searchInput = (searchValue) => {
    fetch(`/api/books/${searchValue}`)
    .then(res => res.json())
    .then(data => {

    })
}