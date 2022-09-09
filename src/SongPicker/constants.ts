import { Song } from "./types";

export const makeDebut: Song = {
  name: "Make debut!",
  englishName: "Make debut!",
  imageSource: "images/songCovers/makeDebut.png",
  effect: "All Tokens +10",
  liveEffect: "Speciality Rate Up +5",
  cost: {da: 0, pa: 0, vo: 0, vi: 0, me: 0}
};

const kisekiWoShinjite: Song = {
  name: "奇跡を信じて！",
  englishName: "Kiseki wo Shinjite!",
  imageSource: "images/songCovers/kisekiWoShinjite.png",
  effect: "Extra Stat Gain (Wisdom) +1",
  liveEffect: "Speciality Rate Up +5",
  cost: {da: 0, pa: 21, vo: 0, vi: 0, me: 21}
};

const tachiichiZero: Song = {
  name: "立ち位置ゼロ番！順位は一番！",
  englishName: "Tachiichi zero-ban! Juni wa Ichiban!",
  imageSource: "images/songCovers/tachiichiZero.png",
  effect: "Extra Stat Gain (Speed) +1",
  liveEffect: "Support Event Chance Up Lv+1",
  cost: {da: 21, pa: 0, vo: 0, vi: 21, me: 0}
};

const nigekiri: Song = {
  name: "逃げ切りっ！Fallin'Love",
  englishName: "Nigekiri! Fallin' Love",
  imageSource: "images/songCovers/nigekiri.png",
  effect: "Extra Stat Gain (Guts) +1",
  liveEffect: "Support Event Chance Up Lv+1",
  cost: {da: 21, pa: 0, vo: 0, vi: 21, me: 0}
};

const goThisWay: Song = {
  name: "Go This Way",
  englishName: "Go This Way",
  imageSource: "images/songCovers/goThisWay.png",
  effect: "Extra Stat Gain (Power) +1",
  liveEffect: "Support Event Chance Up Lv+1",
  cost: {da: 0, pa: 0, vo: 21, vi: 0, me: 21}
};

const ringRingDiary: Song = {
  name: "Ring Ring ダイアリー",
  englishName: "Ring Ring Diary",
  imageSource: "images/songCovers/ringRingDiary.png",
  effect: "Extra Stat Gain (Stamina) +1",
  liveEffect: "Support Event Chance Up Lv+1",
  cost: {da: 0, pa: 21, vo: 0, vi: 21, me: 0}
};

const seishunGaMatteru: Song = {
  name: "青春が待ってる",
  englishName: "Seishun ga Matteru",
  imageSource: "images/songCovers/goThisWay.png",
  effect: "Power +22",
  liveEffect: "Friendship Bonus +5%",
  cost: {da: 0, pa: 0, vo: 32, vi: 0, me: 12}
};

const runXRun: Song = {
  name: "RUN×RUN!",
  englishName: "RUN×RUN!",
  imageSource: "images/songCovers/runXRun.png",
  effect: "Skill Pts +22",
  liveEffect: "Friendship Bonus +5%",
  cost: {da: 14, pa: 0, vo: 0, vi: 16, me: 14}
};

const zensokuZenshin: Song = {
  name: "全速！前進！ウマドルパワー☆",
  englishName: "Zensoku! Zenshin! Umadol Power☆",
  imageSource: "images/songCovers/zensokuZenshin.png",
  effect: "Speed +22",
  liveEffect: "Friendship Bonus +5%",
  cost: {da: 32, pa: 0, vo: 0, vi: 12, me: 0}
};

const songList1: Song[] = [
  kisekiWoShinjite,
  tachiichiZero,
  nigekiri,
  goThisWay,
  ringRingDiary,
  seishunGaMatteru,
  runXRun,
  zensokuZenshin
];

const yumeWoKakeru: Song = {
  name: "ユメヲカケル！",
  englishName: "Yume wo Kakeru!",
  imageSource: "images/songCovers/yumeWoKakeru.png",
  effect: "Extra Stat Gain (Skill Pts) +2",
  liveEffect: "Speciality Rate Up +5",
  cost: {da: 0, pa: 21, vo: 0, vi: 21, me: 0}
};

const anone: Song = {
  name: "A・NO・NE",
  englishName: "A・NO・NE",
  imageSource: "images/songCovers/anone.png",
  effect: "Extra Stat Gain (Guts) +2",
  liveEffect: "Speciality Rate Up +5",
  cost: {da: 42, pa: 0, vo: 0, vi: 21, me: 0}
};

const bluebird: Song = {
  name: "ぼくらのブルーバードデイズ",
  englishName: "Bokura no Bluebird Days",
  imageSource: "images/songCovers/bluebird.png",
  effect: "Extra Stat Gain (Speed) +2",
  liveEffect: "Speciality Rate Up +5",
  cost: {da: 21, pa: 0, vo: 0, vi: 42, me: 0}
};

const songList2: Song[] = [ 
  yumeWoKakeru,
  anone,
  bluebird
];

const growUpShine: Song = {
  name: "グロウアップ･シャイン！",
  englishName: "Grow Up, Shine!",
  imageSource: "images/songCovers/growUpShine.png",
  effect: "Extra Stat Gain (Skill Pts) +3",
  liveEffect: "Support Event Chance Up Lv+1",
  cost: {da: 21, pa: 0, vo: 21, vi: 0, me: 21}
};

const komorebi: Song = {
  name: "木漏れ日のエール",
  englishName: "Komorebi no Yell",
  imageSource: "images/songCovers/komorebi.png",
  effect: "Extra Stat Gain (Wisdom) +2",
  liveEffect: "Support Event Chance Up Lv+1",
  cost: {da: 0, pa: 42, vo: 0, vi: 0, me: 21}
};

const pyoitto: Song = {
  name: "ぴょいっと♪はれるや！",
  englishName: "Pyoitto ♪ Hallelujah!",
  imageSource: "images/songCovers/pyoitto.png",
  effect: "Extra Stat Gain (Stamina) +2",
  liveEffect: "Speciality Rate Up +5",
  cost: {da: 0, pa: 42, vo: 21, vi: 0, me: 0}
};

const nanairo: Song = {
  name: "七色の景色",
  englishName: "Nanairo no Keshiki",
  imageSource: "images/songCovers/nanairo.png",
  effect: "Extra Stat Gain (Power) +2",
  liveEffect: "Speciality Rate Up +5",
  cost: {da: 0, pa: 0, vo: 21, vi: 0, me: 42}
};

const songList3: Song[] = [
  growUpShine,
  komorebi,
  pyoitto,
  nanairo
];

const yumezora: Song = {
  name: "ユメゾラ",
  englishName: "Yumezora",
  imageSource: "images/songCovers/yumezora.png",
  effect: "Wisdom +22",
  liveEffect: "Friendship Bonus +5%",
  cost: {da: 0, pa: 22, vo: 0, vi: 0, me: 22}
};

const presentMarch: Song = {
  name: "PRESENT MARCH♪",
  englishName: "PRESENT MARCH♪",
  imageSource: "images/songCovers/presentMarch.png",
  effect: "Power +22",
  liveEffect: "Friendship Bonus +5%",
  cost: {da: 0, pa: 0, vo: 22, vi: 0, me: 22}
};

const takarabako: Song = {
  name: "大好きのタカラバコ",
  englishName: "Daisuki no Takarabako",
  imageSource: "images/songCovers/takarabako.png",
  effect: "Speed +26",
  liveEffect: "Friendship Bonus +10%",
  cost: {da: 42, pa: 0, vo: 0, vi: 26, me: 0}
};

const iinari: Song = {
  name: "世界は僕らの言いなりさ",
  englishName: "Sekai wa Bokura no Iinari Sa",
  imageSource: "images/songCovers/iinari.png",
  effect: "Stamina +22",
  liveEffect: "Friendship Bonus +5%",
  cost: {da: 0, pa: 32, vo: 12, vi: 0, me: 0}
};

const harusora: Song = {
  name: "春空BLUE",
  englishName: "Harusora BLUE",
  imageSource: "images/songCovers/harusora.png",
  effect: "Guts +22",
  liveEffect: "Friendship Bonus +5%",
  cost: {da: 12, pa: 0, vo: 0, vi: 32, me: 0}
};

const fanfare: Song = {
  name: "Fanfare for Future!",
  englishName: "Fanfare for Future!",
  imageSource: "images/songCovers/fanfare.png",
  effect: "Guts +26",
  liveEffect: "Friendship Bonus +10%",
  cost: {da: 26, pa: 0, vo: 0, vi: 42, me: 0}
};

const songList4: Song[] = [
  yumezora,
  presentMarch,
  takarabako,
  iinari,
  harusora,
  fanfare
];

export const girlsLegendUSpecial: Song = {
  name: "GIRLS' LEGEND U",
  englishName: "GIRLS' LEGEND U",
  imageSource: "images/songCovers/girlsLegendUSpecial.png",
  effect: "All Stats +10",
  liveEffect: "Friendship Bonus +10%",
  cost: {da: 0, pa: 0, vo: 0, vi: 0, me: 0}
};

export const girlsLegendU: Song = {
  name: "GIRLS' LEGEND U",
  englishName: "GIRLS' LEGEND U",
  imageSource: "images/songCovers/girlsLegendU.png",
  effect: "All Stats +10",
  liveEffect: "Friendship Bonus +10%",
  cost: {da: 0, pa: 0, vo: 0, vi: 0, me: 0}
};

export const availableSongList = [
  songList1,
  songList2,
  songList3,
  songList4,
  [],
];

export const friendshipSongList1 = [
  seishunGaMatteru,
  zensokuZenshin,
  runXRun
];

export const friendshipSongList2 = [
  ...friendshipSongList1,
  takarabako,
  fanfare,
  iinari,
  harusora,
  yumezora,
  presentMarch
];

export const defaultSort: Song[] = [
  growUpShine,
  yumeWoKakeru,
  takarabako,
  fanfare,
  iinari,
  harusora,
  yumezora,
  presentMarch,
  seishunGaMatteru,
  zensokuZenshin,
  runXRun,
  bluebird,
  tachiichiZero,
  kisekiWoShinjite,
  nanairo,
  pyoitto,
  anone,
  goThisWay,
  ringRingDiary,
  nigekiri,
  komorebi
];
