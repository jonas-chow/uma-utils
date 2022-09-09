import { Song } from "../types";

export type PhaseObjective = {
  title: string,
  condition: (songs: Song[], previousPhaseCount: number) => boolean,
};