// Promise.all을 이용하여 병렬로 비동기 처리하기

const a = async() =>{
    try{
        const [moviesResponse, suggestionsResponse] = await Promise.all([
            fetch("https://yts.mx/api/v2/list_movies.json"),
            fetch("https://yts.mx/api/v2/movie_suggestions.json?movie_id=10")
        ]);
        const [movies, suggestions] = await Promise.all([
            moviesResponse.json(),
            suggestionsResponse.json()
        ]);
        console.log(movies, suggestions);
    } catch (error){
        console.log(error);
    }
} 

a();