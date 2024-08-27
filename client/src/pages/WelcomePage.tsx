import {Link} from "react-router-dom";


const WelcomePage = () => {
    return (
        <>
            <header className={"w-full h-24 bg-black-500 absolute top left-0 z-20"}>
                <Link to={"/"}>
                    <img src="/images/Netflix_Logo_1.png" alt="" className={"w-[12%] h-1/8 max-[900px]:w-3/12 cursor-pointer"}/>
                </Link>
            </header>
        <main className={" w-full min-h-screen text-white flex flex-col justify-center items-center font-inter"}>
            <div className={"w-full max-w-[500px]"}>
                <h1 className={"font-bold text-3xl mb-2"}>Congratulations!</h1>
                <p className={"text-xl"}>You can enjoy your favorite movies and TV series and unlimited access on different content</p>
                <button className={"w-full bg-red-500 p-5 rounded-md mt-4 text-white text-xl max-[768px]:py-2"}>Go Back To Home Page</button>
            </div>

        </main>
        </>
    );
};

export default WelcomePage;