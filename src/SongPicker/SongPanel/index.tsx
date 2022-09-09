import { Row, Col, Typography } from "antd";
import React from "react";
import { Song } from "../types";
import CostBar from "./CostBar";

type Props = {
  song: Song,
};

const { Text } = Typography;

const SongPanel = ({ song }: Props) => {
  return (
    <Row>
      <Col span="200px">
        <img src={song.imageSource}/>
      </Col>
      <Col style={{padding: 10}}>
        <div>
          <Text strong>{song.name}</Text>
        </div>
        <div>
          <Text type="secondary">{song.englishName}</Text>
        </div>
        <div>
          <img src="/images/songEffect.png" width={32} height={32} />
          <Text style={{paddingLeft: 5}}>{song.effect}</Text>
        </div>
        <div>
          <img src="/images/songLiveEffect.png" width={32} height={32} />
          <Text style={{paddingLeft: 5}}>{song.liveEffect}</Text>
        </div>
        <div>
          <CostBar cost={song.cost} />
        </div>
      </Col>
    </Row>
  );
};

export default SongPanel;