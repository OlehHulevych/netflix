import MovieCaroseul from "./MovieFiles/MovieCaroseul.tsx";
import movies from "./MovieFiles/movies.json"
interface movieType{
    id: Number,
    name: String,
    year: Number,
    genre: String,
    preview_image: String
}
const Catalog = () => {
    const sortFilms = (genre:String)=>{
        return movies.filter((movie:movieType)=>movie.genre==genre)
    }
    return (
        <main className={"w-full text-white font-inter px-6 "}>
            <h1 className={"text-3xl font-bold mb-4"}>Movies</h1>
            <h2 className={"text-2xl font-bold mb-2"}>Comedy</h2>
            <div className={"w-full  flex justify-center text-center"}>
                <MovieCaroseul movies={sortFilms("comedy")}/>
            </div><h2 className={"text-2xl font-bold mb-2"}>Action</h2>
            <div className={"w-full  flex justify-center text-center"}>
                <MovieCaroseul movies={sortFilms("action")}/>
            </div><h2 className={"text-2xl font-bold mb-2"}>Fantazie</h2>
            <div className={"w-full  flex justify-center text-center"}>
                <MovieCaroseul movies={sortFilms("fantazie")}/>
            </div>
        </main>
    );
};

export default Catalog;