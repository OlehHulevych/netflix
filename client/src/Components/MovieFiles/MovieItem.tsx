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
                <img className={"w-[341px] h-[142px] "} src={"https://netflix-backend-rlp5.onrender.com/" +"banner_images/"+ preview_image} alt=""/>
                <div className={"mt-2"}>{name}</div>
            </div>
        </Link>
        </>
    );
};


export default MovieItem;