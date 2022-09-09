import { PhaseObjective } from "./types";
import { Song } from "../types";
import { friendshipSongList1, friendshipSongList2 } from "../constants";

export const objectives: PhaseObjective[][] = [
  [
    {
      title: "Buy 3 songs (total 4 songs with Make Debut!)",
      condition: (songs: Song[], previousPhaseCount: number) => songs.length - previousPhaseCount >= 4,
    }
  ],
  [
    {
      title: "Buy 3 songs",
      condition: (songs: Song[], previousPhaseCount: number) => songs.length - previousPhaseCount >= 3,
    },
    {
      title: "Buy ユメヲカケル！",
      condition: (songs: Song[], previousPhaseCount: number) => !!songs.find(song => song.name === "ユメヲカケル！"),
    },
    {
      title: "Buy all 3 friendship bonus songs",
      condition: (songs: Song[], previousPhaseCount: number) => 
        friendshipSongList1
          .reduce((previous, friendshipSong) => 
            previous && songs.indexOf(friendshipSong) !== -1, 
          true),
    }
  ],
  [
    {
      title: "Buy 3 songs",
      condition: (songs: Song[], previousPhaseCount: number) => songs.length - previousPhaseCount >= 3,
    },
    {
      title: "Buy グロウアップ･シャイン！",
      condition: (songs: Song[], previousPhaseCount: number) => !!songs.find(song => song.name === "グロウアップ･シャイン！")    }
  ],
  [
    {
      title: "Buy 3 songs",
      condition: (songs: Song[], previousPhaseCount: number) => songs.length - previousPhaseCount >= 3,
    },
    {
      title: "Buy as many friendship bonus songs as possible",
      condition: (songs: Song[], previousPhaseCount: number) => 
        friendshipSongList2
          .reduce((previous, friendshipSong) => 
            previous && songs.indexOf(friendshipSong) !== -1, 
          true),
    }
  ],
  [
    {
      title: "Buy 2 songs",
      condition: (songs: Song[], previousPhaseCount: number) => songs.length - previousPhaseCount >= 2,
    },
    {
      title: "Have 18 songs in total by December",
      condition: (songs: Song[], previousPhaseCount: number) => songs.length >= 18,
    }
  ],
  [
    {
      title: "Finish the run",
      condition: (songs: Song[], previousPhaseCount: number) => true,
    }
  ]
];