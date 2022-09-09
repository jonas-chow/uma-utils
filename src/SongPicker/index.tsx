import React, { useMemo, useState } from "react";
import { Space } from "antd";
import { Song } from "./types";
import { 
  availableSongList,
  defaultSort, 
  makeDebut, 
  girlsLegendU, 
  girlsLegendUSpecial 
} from "./constants";
import PickList from "./PickList";
import SongDashboard from "./SongDashboard";

const SongPicker = () => {
  const [chosenSongs, setChosenSongs] = useState<Song[]>([makeDebut]);
  const [phase, setPhase] = useState<number>(0);
  const [previousPhaseCount, setPreviousPhaseCount] = useState<number>(0);
  const [availableSongs, setAvailableSongs] = useState<Song[]>(availableSongList[0]);
  const sortedSongs = useMemo(() => availableSongs.sort(
    (song1, song2) => defaultSort.indexOf(song1) - defaultSort.indexOf(song2)
  ), [availableSongs]);
  
  const pickSong = (song: Song) => {
    setChosenSongs([...chosenSongs, song]);
    setAvailableSongs(availableSongs.filter(avail => avail !== song));
  };

  const nextPhase = () => {
    if (phase < 4) {
      const toAdd = availableSongList[phase + 1]
      setAvailableSongs([...availableSongs, ...toAdd]);
    } else {
      setChosenSongs([...chosenSongs, chosenSongs.length >= 18
        ? girlsLegendUSpecial
        : girlsLegendU]
      );
    }

    setPreviousPhaseCount(chosenSongs.length);
    setPhase(phase + 1);
  };

  const reset = () => {
    setChosenSongs([makeDebut]);
    setPhase(0);
    setPreviousPhaseCount(0);
    setAvailableSongs(availableSongList[0]);
  }

  return (
    <Space direction="vertical" size="large">
      <SongDashboard 
        chosen={chosenSongs} 
        phase={phase} 
        previousPhaseCount={previousPhaseCount} 
        nextPhase={nextPhase}
        reset={reset}
      />
      <PickList songs={sortedSongs} selectSong={pickSong}/>   
    </Space> 
  );
};

export default SongPicker;