
import Carousel from "react-multi-carousel";

import MovieItem from "./MovieItem.tsx";
import "react-multi-carousel/lib/styles.css";


interface props {
    movies:any[]

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
                {movies.map((movie:any)=>(
                    <MovieItem name={movie.name} preview_image={movie.banner_img} id={movie.id} />
                ))}
            </Carousel>
        </div>
    );
};

export default MovieCaroseul;