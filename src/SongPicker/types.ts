export type Song = {
  name: string,
  englishName: string,
  imageSource: string,
  effect: string,
  liveEffect: string,
  cost: SongCost,
};

export type SongCost = {
  da: number,
  pa: number,
  vo: number,
  vi: number,
  me: number
};

