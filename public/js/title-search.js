//This will grab the value of the search input when the search button is clicked and run the function to get the route to get the data.
document.querySelector("#search-button").addEventListener("click", function() {
    const searchValue = document.getElementById("title-search").value;
    location.href="/api/books/title/" + searchValue;
 

}) 