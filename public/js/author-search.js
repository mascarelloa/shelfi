//This will grab the value of the search input when the search button is clicked and run the function to get the route that gets the data.
document.querySelector("#search-button").addEventListener("click", function() {
    const searchValue = document.getElementById("author-search").value;
    location.href="/api/books/author/" + searchValue;
}) 
