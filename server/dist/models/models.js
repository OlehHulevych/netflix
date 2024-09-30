"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Genre = exports.Type = exports.ListMovies = exports.MovieListItem = exports.Movie = exports.User = void 0;
const db_1 = require("../db");
const sequelize_1 = require("sequelize");
const User = db_1.sequelize.define('user', {
    id: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: sequelize_1.DataTypes.STRING, unique: true },
    email: { type: sequelize_1.DataTypes.STRING, unique: true },
    password: { type: sequelize_1.DataTypes.STRING },
    role: { type: sequelize_1.DataTypes.STRING, defaultValue: "USER" }
});
exports.User = User;
const Movie = db_1.sequelize.define('movie', {
    id: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: sequelize_1.DataTypes.STRING, unique: true },
    year: { type: sequelize_1.DataTypes.STRING },
    duration: { type: sequelize_1.DataTypes.STRING },
    name_img: { type: sequelize_1.DataTypes.STRING },
    banner_img: { type: sequelize_1.DataTypes.STRING },
    trailer: { type: sequelize_1.DataTypes.STRING },
    banner_trailer: { type: sequelize_1.DataTypes.STRING },
    description: { type: sequelize_1.DataTypes.TEXT }
});
exports.Movie = Movie;
const Genre = db_1.sequelize.define("genre", {
    id: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: sequelize_1.DataTypes.STRING, unique: true }
});
exports.Genre = Genre;
const Type = db_1.sequelize.define("type", {
    id: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: sequelize_1.DataTypes.STRING, unique: true }
});
exports.Type = Type;
const ListMovies = db_1.sequelize.define("ListMovies", {
    id: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});
exports.ListMovies = ListMovies;
const MovieListItem = db_1.sequelize.define("movieListItem", {
    id: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});
exports.MovieListItem = MovieListItem;
User.hasOne(ListMovies);
ListMovies.belongsTo(User);
ListMovies.hasMany(MovieListItem, { as: 'MovieListItems' });
MovieListItem.belongsTo(ListMovies);
Type.hasMany(Movie);
Movie.belongsTo(Type);
Genre.hasMany(Movie);
Movie.belongsTo(Genre);
MovieListItem.belongsTo(Movie, {
    foreignKey: 'movieId',
    as: 'Movie'
});
Movie.hasMany(MovieListItem, { as: 'MovieListItems' });
