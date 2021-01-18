# BaliVista

## How To Run Program
```bash
npm install
npm test
```

## Result for endpoint
### prerequisit
1. You should login with api "/login" to get token for authorization
### Post
1. users/movies/favorite
Response:
```bash
{
    "id": 7,
    "title": "Amar",
    "user_id": 2,
    "updatedAt": "2021-01-18T05:55:08.903Z",
    "createdAt": "2021-01-18T05:55:08.903Z"
}
```
### Get
1. /movies
Respnse:
```bash
    Not Allowed 403 Forbiden
```
2. /movies/{title}
Respnse:
```bash
    {
    "title": "Fantasy Island",
    "url-poster": "https://m.media-amazon.com/images/M/MV5BOWE2ODZhYWYtNTFiYy00MjdmLWIzZGEtNTkyOTc1NDIwMjk4XkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_SX300.jpg"
}
```
3. /users/movies/favorite
[
    {
        "title": "Fantasy Island",
        "url-poster": "https://m.media-amazon.com/images/M/MV5BOWE2ODZhYWYtNTFiYy00MjdmLWIzZGEtNTkyOTc1NDIwMjk4XkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_SX300.jpg"
    },
    {
        "title": "Spider-Man",
        "url-poster": "https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg"
    },
    {
        "title": "365 Days",
        "url-poster": "https://m.media-amazon.com/images/M/MV5BODljZTM3ODAtMDc0YS00NmI4LTlmZTUtM2I5MDAzNTQxZmMxXkEyXkFqcGdeQXVyMTEwMTY3NDI@._V1_SX300.jpg"
    },
    {
        "title": "Amar",
        "url-poster": "https://m.media-amazon.com/images/M/MV5BOTIxZDRmYTgtYzU3YS00MTgwLTg2MTktMTM1ODcyNWQzMjM3XkEyXkFqcGdeQXVyMzY2NTg0NTA@._V1_SX300.jpg"
    }
]



