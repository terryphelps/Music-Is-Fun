export default class Song {
    constructor(song) {
        this.title = song.trackName
        //Change 250x250 if you want a larger image
        this.albumArt = song.artworkUrl60.replace(/60x60/g, "150x150")
        this.artist = song.artistName
        this.collection = song.collectionName
        this.price = song.collectionPrice
        this.preview = song.previewUrl
    }


    get Template() {
        return `
        <div class="col-4">
            <h2>Artist:${this.artist}</h2>
            <h3>Title:${this.title}</h3>
            <h3>Collection:${this.collection}</h3>
            <img src="${this.albumArt}" alt="Album Art">
            <h3>Price:${this.price}</h3>
            <audio controls><source src="${this.preview}"></audio>
        </div>
    `
    }
}