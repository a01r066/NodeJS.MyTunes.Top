const albums = [];

module.exports = class Album {
    constructor(id, title, author, imagePath, tags, genreID){
        this.id = id; 
        this.title = title;
        this.author = author;
        this.imagePath = imagePath;
        this.tags = tags;
        this.genreID = genreID;
    }

    addAlbum(){
        console.log('Add album');
    }

    updateAlbum(){
        console.log('Update album');
    }

    deleteAlbum(){
        console.log('Delete album');
    }

    getAlbum(){
        console.log('Get album');
    }

    getAlbums(){
        console.log('Get albums');
    }
}