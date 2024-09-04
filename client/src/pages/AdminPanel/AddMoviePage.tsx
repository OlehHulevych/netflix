import React from 'react';

const AddMoviePage = () => {
    return (
        <main className={"w-full min-h-screen text-white font-inter"}>
            <form action="">
                <label htmlFor="">Name</label>
                <input type="text"/>
                <label htmlFor="">Year</label>
                <input type="text"/>
                <label htmlFor="">Duration</label>
                <input type="text"/>
                <label htmlFor="type">type</label>
                <select name="type" id="type">
                    <option value="Movie">Movie</option>
                    <option value="Tv Shows">Tv shows</option>
                </select>
                <label htmlFor="type">Genre</label>
                <select name="type" id="type">
                    <option value="Action">Action</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Fantasize">Fantasize</option>
                </select>
                <label htmlFor="">Banner image</label>
                <input type="file" id={"Banner image"}/>

                <label htmlFor="description">Name image</label>
                <input type="file" id={"Name image"}/>

                <label htmlFor="description">description</label>
                <textarea name="description" id="description" cols="30" rows="10"></textarea>

            </form>
        </main>
    );
};

export default AddMoviePage;