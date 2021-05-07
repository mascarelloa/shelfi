
// //This will take the search value and add it to the endpoint.
// // const searchInput = (searchValue) => {
// //     console.log(searchValue)
//     (`/api/books/author/${searchValue}`)
//     // .then(() => location.replace("/authorsearch"))
//     }
  


//This will grab the value of the search input when the search button is clicked and run the function to get the route to get the data.
document.querySelector("#search-button").addEventListener("click", function() {
    const searchValue = document.getElementById("author-search").value;
    location.href="/api/books/author/" + searchValue;
    // console.log(searchValue);
    // searchInput(searchValue);
}) 
