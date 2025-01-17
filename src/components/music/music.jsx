import { useRef, useState } from 'react'
import './music.scss'
import pic1 from './img/ban_doi.jpg'
import aud1 from './aud/ban_doi.mp3'
import pic2 from './img/danh_doi.jpg'
import aud2 from './aud/danh_doi.mp3'
import pic3 from './img/mat_ket_noi.jpg'
import aud3 from './aud/mat_ket_noi.mp3'
import pic4 from './img/tran_bo_nho.jpg'
import aud4 from './aud/tran_bo_nho.mp3'
import pic5 from './img/cho_mot_nguoi.jpg'
import aud5 from './aud/cho_mot_nguoi.mp3'
const Music = (props) => {
  let music = new Audio()
  const [song, setSong] = useState([
    {
      path: aud1,
      displayName: 'BẠN ĐỜI',
      cover: pic1,
      artist: 'ARIK FT GDUCKY'
    },
    {
      path: aud2,
      displayName: 'đánh đổi',
      cover: pic2,
      artist: 'obito'
    },
    {
      path: aud3,
      displayName: 'MẤT KẾT NỐI',
      cover: pic3,
      artist: 'DƯƠNG DOMIC'
    },
    {
      path: aud4,
      displayName: 'Tràn Bộ Nhớ',
      cover: pic4,
      artist: 'obito'
    },
    {
      path: aud5,
      displayName: 'CHỜ MỘT NGƯỜI',
      cover: pic5,
      artist: 'GILL ft Captain Boy'
    }
  ])
  const [musicIndex, setMusicIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [play, setPlay] = useState({ className:'fa-solid fa-play play-button', title:'Pause' })
  const togglePlay = () => {
    if (isPlaying) {
      pauseMusic()
    }
    else {
      playMusic()
    } }

  const playMusic = () => {
    setIsPlaying(true)
    setPlay({ className: 'fa-solid fa-pause play-button', title: 'Pause' })
    console.log(music)
    music.play()
    console.log(music.play)
  }

  const pauseMusic = () => {
    setIsPlaying(false)
    setPlay({ className: 'fa-solid fa-play play-button', title: 'Play' })
    music.pause(),
    console.log(music.pause)
  }

  const loadMusic = (song) => {
    music.src = song.path
  }

  const changeMusic = (direction) => {
    let index = musicIndex
    index = (index + direction + song.length)% song.length
    setMusicIndex(index)
  }
  useState(loadMusic(song[musicIndex]))
  return (
    <>
      <div className="app">
        <div className="backgroung">
          <img src={song[musicIndex].cover} id ="bg-img"/>
        </div>
        <div className="Container">
          <div className="player-img">
            <img src={song[musicIndex].cover} className="active"
              id="cover"/>
          </div>
          <h2 id="music-title">{song[musicIndex].displayName}</h2>
          <h3 id="music-artist">{song[musicIndex].artist}</h3>
          <div className="player-progress" id="player-progress">
            <div className="progress" id="progress"></div>
            <div className="music-duration">
              <span id="current-time">0:00</span>
              <span id="duration">0:00</span>
            </div>
          </div>
          <div className="play-controls">
            <i className="fa-solid fa-backward"
              title="Previous" id="prev" onClick={(even) => changeMusic(-1)}></i>
            <i className={play.className}
              title={play.title} id="play" onClick={() => togglePlay()}></i>
            <i className="fa-solid fa-forward"
              title="Next" id="next" onClick={(even) => changeMusic(1)}></i>
          </div>
        </div>
      </div>
    </>
  )
}
export default Music