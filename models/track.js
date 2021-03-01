const tracks = [];

module.exports = class Track {
    constructor(id, title, author, filePath, duration, index, tags, albumID, genreID){
        this.id = id;
        this.title = title;
        this.author = author;
        this.filePath = filePath;
        this.duration = duration;
        this.index = index;
        this.tags = tags;
        this.albumID = albumID;
        this.genreID = genreID;
    }

    addTrack(){
        console.log('Add track');
    }

    updateTrack(){
        console.log('Update track');
    }

    deleteTrack(){
        console.log('Delete track');
    }

    getTrack(){
        console.log('Get track');
    }

    getTracks(){
        console.log('Get tracks');
    }

}