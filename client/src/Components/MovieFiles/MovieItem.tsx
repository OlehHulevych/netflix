import {Link} from 'react-router-dom'
interface props {
    id:Number,
    name:String,
    preview_image:String,

}
const MovieItem = ({name, preview_image, id}:props) => {

    return (
        <>
        <Link to={`/movies/${id}`}>
            <div className={"text-center mr-4 cursor-pointer "}>
                <img className={"w-[341px] h-[142px] "} src={`/images/MovieCards/${preview_image}.png`} alt=""/>
                <div className={"mt-2"}>{name}</div>
            </div>
        </Link>
        </>
    );
};

export default MovieItem;