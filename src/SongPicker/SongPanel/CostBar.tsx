import { Space } from "antd";
import React from "react";
import { SongCost } from "../types";
import danceIcon from "./images/dance.png";
import passionIcon from "./images/passion.png";
import vocalIcon from "./images/vocal.png";
import visualIcon from "./images/visual.png";
import mentalIcon from "./images/mental.png";

type Props = {
  cost: SongCost,
};

const CostBar = ({ cost }: Props) => {
  return (
    <Space size="large">
      <div>
        {cost.da}
        <img src={danceIcon} />
      </div>
      <div>
        {cost.pa}
        <img src={passionIcon} />
      </div>
      <div>
        {cost.vo}
        <img src={vocalIcon} />
      </div>
      <div>
        {cost.vi}
        <img src={visualIcon} />
      </div>
      <div>
        {cost.me}
        <img src={mentalIcon} />
      </div>
    </Space>
  );
};

export default CostBar;