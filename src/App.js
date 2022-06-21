import "./App.css";
import AudioPlayer from "./components/AudioPlayer";

import { useState, useEffect } from "react";

import img1 from "./images/levi.png";
import img2 from "./images/eyes.jpg";
import img3 from "./images/theseDays.jpg";
import img4 from "./images/sunroof.png";

import song1 from "./music/song1.mp3";
import song2 from "./music/song2.mp3";
import song3 from "./music/song3.mp3";
import song4 from "./music/song4.mp3";

function App() {
  const [songs] = useState([
    {
      title: "Levitating",
      artist: "Dua Lipa",
      img_src: img1,
      src: song1,
    },
    {
      title: "Eyes off You-Cover",
      artist: "Concepcion & Yanna",
      img_src: img2,
      src: song2,
    },
    {
      title: "These Days",
      artist: "Rudimental",
      img_src: img3,
      src: song3,
    },
    {
      title: "Sunroof",
      artist: "Nicky Youre",
      img_src: img4,
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
      {
        <AudioPlayer
          songs={songs}
          currentSongIndex={currentSongIndex}
          setCurrentSongIndex={setCurrentSongIndex}
          nextSongIndex={nextSongIndex}
        />
      }
    </>
  );
}

export default App;
