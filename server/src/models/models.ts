import { sequelize } from "../db.ts";
import { DataTypes, DATE } from "sequelize";

const User = sequelize.define('user',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name:{type:DataTypes.STRING, unique:true},
    email:{type:DataTypes.STRING, unique:true},
    role:{type:DataTypes.STRING, defaultValue:"USER"}
})

const Movie = sequelize.define('movie', {
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name:{type:DataTypes.STRING, unique:true},
    year:{type:DataTypes.STRING},
    name_img:{type:DataTypes.STRING},
    banner_img:{type:DataTypes.STRING},
    description:{type:DataTypes.STRING}
})

const Genre = sequelize.define("genre",{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name:{type:DataTypes.STRING, unique:true}
})

const Type = sequelize.define("type",{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name:{type:DataTypes.STRING, unique:true}
})

const ListMovies=  sequelize.define("ListMovies",{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
})

const MovieListItem = sequelize.define("movieListItem",{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
})

User.hasOne(ListMovies);
ListMovies.belongsTo(User);

ListMovies.hasMany(MovieListItem);
MovieListItem.belongsTo(ListMovies);

Type.hasMany(Movie);
Movie.belongsTo(Type);
Genre.hasMany(Movie);
Movie.belongsTo(Genre);

export {
    User,
    Movie,
    MovieListItem,
    ListMovies,
    Type,
    Genre
}  



