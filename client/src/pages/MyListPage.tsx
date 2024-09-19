import Layout from "../Layout.tsx";
import MovieItem from "../Components/MovieFiles/MovieItem.tsx";
import {useContext, useEffect, useState} from "react";
import {ListContext} from "../context/ListContext.tsx";
import {jwtDecode} from "jwt-decode";
import {getListById} from "../http/MovieAPI.ts";



const MyListPage = () => {

    // @ts-ignore
    const {listId, setListId,listInfo,setListInfo } = useContext(ListContext);


    useEffect(() => {
        const token = localStorage.getItem('token');


        if (token) {
            try {
                const decodedToken: any = jwtDecode(token);
                console.log("Decoded Token: ", decodedToken);

                getListById(decodedToken.id)
                    .then((data) => {
                        console.log("Data received: ", data);
                        setListInfo(data); // Update the listInfo state
                        setListId(data.id); // Update the listId state
                    })
                    .catch((err) => {
                        console.error("Error fetching list by ID: ", err);
                    });
            } catch (err) {
                console.error("Error decoding token: ", err);
            }
        } else {
            console.log("No token found.");
        }
    }, []);

    useEffect(() => {
        console.log("Updated listInfo: ", listInfo);
    }, [listInfo]);


    return (
        <Layout>
            <div className={" w-full min-h-screen max-h-[800px] text-white pt-[10%]"}>
                <div className={"w-full flex justify-center "}>
                    <input type="text" className={"w-1/2  p-2 text-black bg-gray-700 outline-none focus:outline-red-500 max-[769px]:w-5/6"} />
                </div>

                <div className={"flex w-full flex-wrap mt-10  justify-center"}>

                    {listInfo?.MovieListItems?.map((item:any)=>(

                        <MovieItem id={item.Movie.id} name={item.Movie.name} preview_image={item?.Movie?.banner_img}/>

                    ))}
                </div>

            </div>
        </Layout>
    );
};

export default MyListPage;