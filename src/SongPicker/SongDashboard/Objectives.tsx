import { Space, Typography } from "antd";
import { CloseSquareOutlined, CheckSquareOutlined } from "@ant-design/icons";
import React from "react";
import { Song } from "../types";
import { objectives } from "./constants";
import { PhaseObjective } from "./types";

const { Text } = Typography;

type Props = {
  chosen: Song[],
  phase: number,
  previousPhaseCount: number,
};

const Objectives = ({ chosen, phase, previousPhaseCount }: Props) => {
  const allClear = objectives[phase].reduce((prev, objective) => objective.condition(chosen, previousPhaseCount) && prev, true);

  return (
    <>
      {objectives[phase].map(
        ({title, condition}: PhaseObjective, index: number) => {
          const isSatisfied = condition(chosen, previousPhaseCount);
          return (
            <div key={`objective ${index}`}>
              <Space style={{color: isSatisfied ? "green" : "red"}}>
                {isSatisfied ? <CheckSquareOutlined /> : <CloseSquareOutlined />}
                {title}
              </Space>
            </div>
          )
        }
      )}
      {allClear && <Text strong type="danger">DO NOT BUY ANY MORE SONGS THIS LIVE</Text>}
    </>
  );
};

export default Objectives;