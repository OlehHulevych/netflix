import {FaInfoCircle, FaPlay} from "react-icons/fa";
import {useParams} from "react-router-dom";
import data from './movies.json'


// interface movieType {
//     name_image:String,
//     banner_name_image:String,
//     description:String,
//     duration:String,
//     genre:String,
//
// }

const MovieComponent = () => {
    const{id} = useParams();
    const movie:any = data.find((item:any)=>item.id==id);

    return (
        <main className={"w-full font-inter"}>
        <div className={`  relative bg-[url(./images/Banners/${movie.banner_name_image}.png)] bg-cover bg-center  w-full h-full min-h-screen  flex flex-col max-[470px]:h-[400px]`} >
            <img src={`/images/Banners/${movie.banner_name_image}.png`} alt="" className={" absolute w-full max-h-[800px] h-full object-fill max-[470px]:h-[400px] "}/>
            {/*content*/}
            <div className={`   overflow-hidden absolute bg-custom-gradient box-shadow-xl w-1/2 h-full top-0 left-0 flex flex-col pl-8  justify-center  z-10 max-[768px]:w-full  max-[768px]:items-center  `}>
                <div>
                    <img  src={`/images/name_image/${movie.banner_name_image}.png`} alt="" className='max-w-[500px] max-h-[250px] w-full -ml-10 max-[900px]:max-w-[350px] max-[900px]:-ml-5 max-[600px]:max-w-[250px] max-[530px]:max-w-[175px]   ' />
                </div>
                <div className={"text-4xl font-bold text-white my-2 capitalize"}>{movie.name}</div>
                <div>
                    <p className={'font-inter text-white  text-xl max-w-[500px] max-[950px]:text-base max-[600px]: text-sm max-[530px]:text-xs max-[530px]:max-w-[350px] max-[380px]:text-[10px]'}>
                        {movie.description}
                    </p>
                    <div className={"flex  mt-4 text-xl text-gray-500 capitalize"}>
                        {movie.year} | {movie.genre} | {movie.duration}
                    </div>
                </div>
                <div className={'text-white pt-5 max-[768px]:text-center '}>
                    <button className={'inline-flex align-top justify-center w-[157px] items-center text-black text-xl font-bold max-[950px]:max-h-[50px]   h-[75px]  bg-white mr-10 rounded-sm group hover:bg-opacity-30 hover:text-white max-[900px]:w-1/4 max-[950px]:h-full max-[950px]:max-h-[50px] max-[768px]:p-2 max-[600px]:text-base max-[530px]:p-0.5 max-[530px]:max-h-[40px]'}>
                        <FaPlay className={'text-3xl max-[768px]:text-6xl max-[530px]:text-xl '}/>
                        <div className={'ml-2'}>Play</div>
                    </button>
                    <button className={'inline-flex align-top justify-center max-[950px]:w-1/4 max-[950px]:h-full max-[950px]:max-h-[50px]  p-2 w-[157px] items-center text-black text-xl font-bold   h-[75px]  bg-white mr-5 rounded-sm hover:bg-opacity-30 hover:text-white max-[768px]:p-2 max-[600px]:text-base max-[530px]:p-0.5 max-[530px]:max-h-[40px]'}>
                        <FaInfoCircle className={'text-3xl mr-2 font-thin max-[768px]:text-6xl '}/>
                        More Info
                    </button>
                </div>



            </div>
        </div>
            <div className = {"w-full min-h-screen  text-white flex justify-center items-center"}>
                <iframe
                    width="1060"
                    height="515"
                    className={"w-2/3 min-h-[100px]"}
                    src="https://www.youtube.com/embed/d9MyW72ELq0?si=IHzO8ZdevV4hE4aH"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer;
                      clipboard-write;
                      encrypted-media;
                      gyroscope;
                      picture-in-picture;
                      web-share" allowFullScreen></iframe>
                
            </div>
        </main>
    );
};

export default MovieComponent;