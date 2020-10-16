# movieAPI
Fetches data related to the movies given in the query.  
TryIT on [heroku](https://movies-api-te.herokuapp.com/)


# USAGE:
* Enter the name of the movie of TV series about which you are interested to know
* If you need the output in form of a JSON string, check the checkbox
* Press GO




## Screenshots
<table border="3px">
  <tr>
    <td>
      <img src="https://user-images.githubusercontent.com/59741135/96269367-e9d75f00-0fe7-11eb-9b7d-629976c1add4.png" alt="drawing" height="500" width="900"/>
    </td>
  </tr>
  </table>
  <table border="3px">
  <tr>
    <td>
      <img src="https://user-images.githubusercontent.com/59741135/96269386-ecd24f80-0fe7-11eb-8b3d-dbe019f647aa.png" alt="drawing" height="500" width="900"/>
    </td>
  </tr>
  </table>
  




### JSON RESPONSE Example:
#### The output is a list of json objects containing information about the movies matching to the query entered by the user
```
[ 
  {"Title":"Grave of the Fireflies","Year":"1988","imdbID":"tt0095327","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BZmY2NjUzNDQtNTgxNC00M2Q4LTljOWQtMjNjNDBjNWUxNmJlXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"} , 
  {"Title":"Cradle 2 the Grave","Year":"2003","imdbID":"tt0306685","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTY0NTE1MDgwMl5BMl5BanBnXkFtZTYwNjQ0MDg5._V1_SX300.jpg"} , 
  {"Title":"Dracula Has Risen from the Grave","Year":"1968","imdbID":"tt0062909","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNzRhYTQ1MWEtNDJlYi00YzBmLWEyNDUtNDUwYjYzY2Y1ZmI1XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg"} , 
  {"Title":"One Foot in the Grave","Year":"1990–2001","imdbID":"tt0098882","Type":"series","Poster":"https://m.media- amazon.com/images/M/MV5BYmExNTU1NDctZTRhMi00NWQwLWEyNmYtNjc5ZDQ4ZGQwYjQxXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_SX300.jpg"} , 
  {"Title":"Return of the Living Dead: Rave to the Grave","Year":"2005","imdbID":"tt0411806","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTg4NDY5MDk1MV5BMl5BanBnXkFtZTcwOTYyMTc0MQ@@._V1_SX300.jpg"} , 
  {"Title":"From Beyond the Grave","Year":"1974","imdbID":"tt0070078","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BZGRhOWUxNzItNzMxNS00MmI5LTg3Y2MtZDhlNTdiY2E4YWYzXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg"} , 
  {"Title":"The Guy in the Grave Next Door","Year":"2002","imdbID":"tt0298351","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMjA3ODA3MTQ1Nl5BMl5BanBnXkFtZTcwNjQyOTI0MQ@@._V1_SX300.jpg"} , 
  {"Title":"The Night Evelyn Came Out of the Grave","Year":"1971","imdbID":"tt0067487","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BM2Q2ZDJhMmQtYmZkNC00ZmNmLWFjZjEtZTJjNzNhNzQ2ZjNmXkEyXkFqcGdeQXVyMjA0MzYwMDY@._V1_SX300.jpg"} , 
  {"Title":"The Grave","Year":"1996","imdbID":"tt0116446","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMjI2ODU3NjA2NV5BMl5BanBnXkFtZTgwNjE0NDUzNDE@._V1_SX300.jpg"} , 
  {"Title":"Grave of the Vampire","Year":"1972","imdbID":"tt0068658","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTZjMTUwNWEtODc3NC00NDgxLThjNGEtNDIyNDhhNTY1YjkzXkEyXkFqcGdeQXVyMTQ2MjQyNDc@._V1_SX300.jpg"} , 
]```

    
