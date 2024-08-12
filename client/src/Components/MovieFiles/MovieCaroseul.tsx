
import Carousel from "react-multi-carousel";

import MovieItem from "./MovieItem.tsx";
import "react-multi-carousel/lib/styles.css";

interface movieType{
    id: Number,
    name: String,
    year: Number,
    genre: String,
    preview_image: String,
    banner_name_image:String
}
interface props {
    movies:Array<movieType>

}



const MovieCaroseul = ({movies}:props) => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };


    return (
        <div className={"w-full text-center"}>
            <Carousel responsive={responsive}>
                {movies.map((movie:movieType)=>(
                    <MovieItem name={movie.name} preview_image={movie.preview_image} id={movie.id} />
                ))}
            </Carousel>
        </div>
    );
};

export default MovieCaroseul;