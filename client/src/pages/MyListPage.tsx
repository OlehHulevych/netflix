import Layout from "../Layout.tsx";
import MovieItem from "../Components/MovieFiles/MovieItem.tsx";



const MyListPage = () => {
    return (
        <Layout>
            <div className={" w-full min-h-screen max-h-[800px] text-white pt-[10%]"}>
                <div className={"w-full flex justify-center "}>
                    <input type="text" className={"w-1/2  p-2 text-black bg-gray-700 outline-none focus:outline-red-500 max-[769px]:w-5/6"} />
                </div>

                <div className={"flex w-full flex-wrap mt-10  justify-center"}>

                </div>

            </div>
        </Layout>
    );
};

export default MyListPage;