import { List, Button } from "antd";
import React from "react";
import SongPanel from "../SongPanel";
import { Song } from "../types";

type Props = {
  songs: Song[],
  selectSong: (song: Song) => void,
};

const PickList = ({ songs, selectSong }: Props) => {
  return (
    <>
      <div>
        <strong>{"Available Songs (Higher is better)"}</strong>
      </div>
      <List
        dataSource={songs}
        renderItem={item => (
          <Button block onClick={() => selectSong(item)} style={{height: 200, padding: 0, minWidth: 700}}>
            <SongPanel song={item} />
          </Button>
        )}
      />
    </>
  );
};

export default PickList;