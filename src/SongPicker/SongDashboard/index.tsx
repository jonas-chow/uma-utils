import { Avatar, Button, Typography, Space, Popconfirm } from "antd";
import React from "react";
import { Song } from "../types";
import Objectives from "./Objectives";

const { Text } = Typography;

type Props = {
  chosen: Song[],
  phase: number,
  previousPhaseCount: number,
  nextPhase: () => void,
  reset: () => void,
};

const SongDashboard = ({ chosen, phase, previousPhaseCount, nextPhase, reset }: Props) => {
  const isLastPhase = phase === 5;

  return (
    <Space direction="vertical" size="large">
      <div>
        <Text strong style={{paddingRight: 10}}>Chosen: </Text>
        {chosen.map((song, index) => 
          <Avatar key={`chosen${index}`} src={song.imageSource} shape="square" size={50} />
        )}
      </div>
      <Objectives chosen={chosen} phase={phase} previousPhaseCount={previousPhaseCount} />
      <div>
        <Button type="primary" onClick={nextPhase} disabled={isLastPhase}>
          Live!
        </Button>
        <Popconfirm
          title="Are you sure?"
          onConfirm={reset}
          okText="Yes"
          cancelText="No"
          okButtonProps={{danger: true}}
          disabled={isLastPhase}
        >
          <Button danger onClick={() => isLastPhase && reset()}>
            Reset
          </Button>
        </Popconfirm>
      </div>
    </Space>
  );
};

export default SongDashboard;