import ItunesService from "./itunes-service.js";
//Private
const itunesService = new ItunesService()

function drawSongs() {
  //changes button back to GET MUSIC once songs are loaded
  document.querySelector('#get-music-button').textContent = 'GET MUSIC'
  console.log(itunesService.Songs)
  let songsElem = document.querySelector("#songs")
  let template = ""
  let itunes = itunesService.Songs
  itunes.forEach(itunes => {
    template += itunes.Template
  })
  songsElem.innerHTML = template
}


//PUBLIC
class ItunesController {
  constructor() {
    itunesService.addSubscriber("songs", drawSongs)
    //BE SURE TO REGISTER YOUR SUBSCRIBERS!!!!!!!
  }


  //DO NOT MODIFY THIS METHOD
  getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    //changes the button to loading while songs load
    document.querySelector('#get-music-button').textContent = 'LOADING....'
    itunesService.getMusicByArtist(artist)
  }
}


export default ItunesController
drawSongs()