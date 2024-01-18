import React, { useState, useRef, useEffect } from 'react';
import "../player.css";

const Player = () => {
    const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const songs = [
    // Provide your audio file URLs here
    'song1.mp3',
    'song2.mp3',
    'song3.mp3',
  ];

  useEffect(() => {
    // Update duration when a new song is loaded
    setDuration(audioRef.current.duration);
  }, [currentSongIndex]);

  const playPauseHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const skipHandler = (direction) => {
    // direction can be 'forward' or 'backward'
    if (direction === 'forward') {
      setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
    } else if (direction === 'backward') {
      setCurrentSongIndex(
        (prevIndex) => (prevIndex - 1 + songs.length) % songs.length
      );
    }
  };

  const timeUpdateHandler = (e) => {
    setCurrentTime(e.target.currentTime);
  };

  const seekHandler = (time) => {
    audioRef.current.currentTime = time;
    setCurrentTime(time);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(
      2,
      '0'
    )}`;
  };

  return (
      <div className="music-player-container">
      <audio
        ref={audioRef}
        src={songs[currentSongIndex]}
        onTimeUpdate={timeUpdateHandler}
        onEnded={() => skipHandler('forward')}
      ></audio>

      <div className="player">
        <h3>{songs[currentSongIndex]}</h3>
        <img src="dummy_image.jpg" alt="Dummy Album Art" className="album-art" />
        <div className="controls">
          <button onClick={() => skipHandler('backward')}>Previous</button>
          <button onClick={playPauseHandler}>
            {isPlaying ? 'Pause' : 'Play'}
          </button>
          <button onClick={() => skipHandler('forward')}>Next</button>
        </div>
        <div className="progress">
          <input
            type="range"
            value={currentTime}
            max={duration}
            onChange={(e) => seekHandler(e.target.value)}
          />
          <div className="time">
            <span>{formatTime(currentTime)}</span> /{' '}
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Player;