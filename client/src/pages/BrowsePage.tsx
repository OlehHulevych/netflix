import Layout from "../Layout.tsx";
import movies from '../Components/MovieFiles/movies.json'
import MovieItem from "../Components/MovieFiles/MovieItem.tsx";


const BrowsePage = () => {
    return (
        <Layout>
            <div className={" w-full min-h-screen max-h-[800px] text-white pt-[10%]"}>
                <div className={"w-full flex justify-center "}>
                    <input type="text" className={"w-1/2  p-2 text-black bg-gray-700 outline-none focus:outline-red-500 max-[769px]:w-5/6"} />
                </div>

                <div className={"flex w-full flex-wrap mt-10  justify-center"}>
                    {movies.map((movie:any)=>(
                        <MovieItem id={movie.id} name={movie.name} preview_image={movie.preview_image}/>
                    ))}
                </div>

            </div>
        </Layout>
    );
};

export default BrowsePage;