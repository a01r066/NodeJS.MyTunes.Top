const genres = [];

module.exports = class Genre {
    constructor(id, title, imagePath){
        this.id = id;
        this.title = title;
        this.imagePath = imagePath;
    }

    addGenre(){
        console.log('Add genre');
    }

    updateGenre(){
        console.log('Update genre');
    }

    deleteGenre(){
        console.log('Delete genre');
    }

    getGenre(){
        console.log('Get genre');
    }

    getGenres(){
        console.log('Get genres');
    }
}