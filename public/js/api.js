const apiCall = (searchValue) => {
 
//This takes all the spaces in the searh input and replaces them with '+' and transforms them into lowecase.
const query = searchValue.replace(/\s+/g, '+' ).toLowerCase();

fetch ("https://www.googleapis.com/books/v1/volumes?q=" + query, { 
    method: "GET"
}).then( (res) => res.json())
.then((data) => console.log(data))
.catch((err) => console.log(err));

}