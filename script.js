// i  have to make a counter , for the game part
// i need a function , data modeling that will work with the display of the content
//WHAT I WANT TO DO IS TO CREATE AN APP THAT WHEN YOU FISRT LOG IN WILL ASK YOU HOW YOU DOING ?
//DEPENDING ON THE ANSWER OF THE USER ? THE DISPLAY WILL BE MEME OR A RANDAM PLAYLIST
// A GREETING FUNCTION TO GREET THE USER once the page is loaded
/*function greetuser(){
 return "Hello!"
}  
function respond(){
     return setTimeout((greetuser, 1000){
          return "Hey!"
     });
}
 function createTheMeme(theme,image,text){
     return {
          theme: theme ,
          image: image ,
          text: text
     };
 }
 function displayMeme (meme){
     return meme.theme + ' ' + meme.image + ' '+ meme.text ;
 }  
*/

 
/**
* TODO: Implement a function that clears all the content
* prior to generating new random content
*/
function clearAll() {
    var memeContainer = document.querySelector('.memes-content');
  
    memeContainer.innerHTML = '' ;
    
}

/**
* TODO:
* - Show a random Meme in the correct location
* - Never show more than 1 meme at a time
*/
function showMeme() {
  // Value is a string representing image URL
     var randomMemeUrl = getRandomData('memes');
     var container = document.querySelector('.memes-content');
     var newImg = document.createElement('img');
     newImg.setAttribute('src',randomMemeUrl);

    clearAll();
    container.appendChild (newImg);
}


function getRandomData(type) {
  return data[type][rn(data[type].length)];
}

var memes = ['https://cdn.ebaumsworld.com/2019/06/21/073530/85996630/DepressionMemes2.jpg', 'https://lotswife.com.au/wp-content/uploads/2018/06/Sad-Homie-Memes-Sad-Depressing-Meme-2.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKAeJp42-rZEHlx7424X2dy_iue-UOHP-LQ5sLifUp&s', 'https://tailpic.com/wp-content/uploads/2021/05/45-Sad-Memes-When-Youre-Feeling-Sad-Like-Drowning-1.jpg', 'https://mamasuncut.com/wp-content/uploads/2022/03/sad-meme-3.jpeg','https://i.chzbgr.com/full/9187993088/h4EDCD403/toy-upset-at-someone-but-repress-emotions-protect-their-comfort-even-though-know-s-incredibly-toxic'] ;

// Just a little helper function
function rn(len) {
  return Math.floor(Math.random() * len);
}

var data = {
  memes,
  // song
};

//
var songContainer= document.querySelector('.song-container')
var playBtn = document.querySelector('#play')
var prevBtn= document.querySelector('#prev')
var nextBtn= document.querySelector('#next')
var audio= document.querySelector('#audio')
var title = document.querySelector('#title')
var button = document.querySelector('.showMeme')
var button= document.querySelector('.playSong')

var songContainer= document.querySelector('.songs-container');
 //Song titles
 var songs=['Snuff','Behind Blue Eyes','Broken','Something to Remind you','Lonely Day'];
 //keep track of songs
 var songIndex = 2;
  ;
 // INITIALLY LOAD THE SONGS INTO THE DOM
 loadSong(songs[songIndex])
 // Update song details
 function loadSong(song){
  title.innerText = song
  // audio.src ='songs/${song}.mp3';
 }  
 
 function playSong(){
songContainer.classList.add('play');
 playBtn.querySelector('i.fas').classList.remove('fa-play') ;
 playBtn.querySelector('i.fas').classList.add('fa-play');
 audio.play();
 }
 function pauseSong(){
 songContainer.classList.remove('play');
 playBtn.querySelector('i.fas').classList.add('fa-play') ;
 playBtn.querySelector('i.fas').classList.remove('fa-play');
 audio.pause();
 }
 function prevSong(){
  songIndex--
  if (songindex < 0){
    songIndex = songs.length-1
  }
 
  loadSong(songs[songIndex]) ;

  return playSong() ;
 }

 function nextSong(){
    songIndex ++
    if (songIndex > songs.length-1){
      songIndex = 0
    }
    loadSong(songs[songIndex]) ;

   return playSong() ;
  }
 // Event listeners
 playBtn.addEventListener('click',function(){
  var isPlaying = songContainer.classList.contains('play');
  if (isPlaying){
    pauseSong() ;
  } else {
    playSong() ;
  }
 })
 //Change song events
 prevBtn.addEventListener('click',prevSong);
 nextBtn.addEventListener('click',nextSong);