import "./App.css";

import { useState, useEffect } from "react";

import MusicCard from "./components/musicCard/MusicCard";
import cat from "./images/kitten.png";
import song1 from "./music/song1.mp3";
import song2 from "./music/song2.mp3";
import song3 from "./music/song3.mp3";
import song4 from "./music/song4.mp3";

function App() {
  const [songs] = useState([
    {
      title: "Levitating",
      artist: "Machine Gun Kelly",
      img_src: cat,
      src: song1,
    },
    {
      title: "Song2",
      artist: "Artist2",
      img_src: "./images/song-2.jpg",
      src: song2,
    },
    {
      title: "Song3",
      artist: "Artist3",
      img_src: "./images/song-3.jpg",
      src: song3,
    },
    {
      title: "Song3",
      artist: "Artist3",
      img_src: "./images/song-3.jpg",
      src: song4,
    },
  ]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);
  useEffect(() => {
    if (currentSongIndex === songs.length - 1) {
      setNextSongIndex(0);
    } else {
      setNextSongIndex(currentSongIndex + 1);
    }
  }, [currentSongIndex]);
  return (
    <>
      <MusicCard
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </>
  );
}

export default App;
