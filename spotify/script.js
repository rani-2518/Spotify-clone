console.log("Welcome to Spotify");

//Initialize the variables
let songIndex = 0;
let audioElement= new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems= Array.from(document.getElementsByClassName('songItem'));

let songs= [
    {songName: "Tu hai to mujhe phir aur ky chahiye", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Zihaal-e-Miskin", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Bade Acche Lagte Hain", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Apna Bana Le", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Jhoome Jo Pathan", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Maan meri jaan", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Naina", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Subhanallah", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Channa mere aa", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Breakup song", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
    
]

songItems.forEach((element,i) =>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

// audioElement.play();

//Handle play/pause click

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        gif.style.opacity = 0;
    }
})

//Listen to Events
audioElement.addEventListener('timeupdate', ()=>{

    //update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
})

const makeAllPlays= ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause'); 
        element.classList.add('fa-play'); 
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove('fa-play');
      e.target.classList.add('fa-pause');
      audioElement.src = `songs/${songIndex+1}.mp3`;
      masterSongName.innerText = songs[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      masterPlay.classList.remove('fa-play');
      masterPlay.classList.add('fa-pause');

    })
})

document.getElementById('next').addEventListener('click', ()=>{
   if(songIndex>=9){
      songIndex = 0;
   }else{
    songIndex += 1;
   }
      audioElement.src = `songs/${songIndex+1}.mp3`;
      masterSongName.innerText = songs[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      masterPlay.classList.remove('fa-play');
      masterPlay.classList.add('fa-pause');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
       songIndex = 0;
    }else{
     songIndex -= 1;
    }
       audioElement.src = `songs/${songIndex+1}.mp3`;
       masterSongName.innerText = songs[songIndex].songName;
       audioElement.currentTime = 0;
       audioElement.play();
       masterPlay.classList.remove('fa-play');
       masterPlay.classList.add('fa-pause');
 
 })

