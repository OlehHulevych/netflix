import Header from './Header.tsx'
import movies from "../../Components/MovieFiles/movies.json";
import MovieItem from "../../Components/MovieFiles/MovieItem.tsx";
import Footer from '../../Components/Footer.tsx'

const AdminPage = () => {
    return (
        <>
            <Header/>
            <main className={" w-full min-h-screen  text-white pt-[10%]"}>
                <div className={"w-full flex justify-center "}>
                    <input type="text" className={"w-1/2  p-2 text-black bg-gray-700 outline-none focus:outline-red-500 max-[769px]:w-5/6"} />
                </div>

                <div className={"flex w-full flex-wrap mt-10  justify-center"}>
                    {movies.map((movie:any)=>(
                        <MovieItem id={movie.id} name={movie.name} preview_image={movie.preview_image}/>
                    ))}</div>
                </main>
            <Footer/>
        </>
    );
};

export default AdminPage;