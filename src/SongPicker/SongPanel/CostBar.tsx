import { Space } from "antd";
import React from "react";
import { SongCost } from "../types";

type Props = {
  cost: SongCost,
};

const CostBar = ({ cost }: Props) => {
  return (
    <Space size="large">
      <div>
        {cost.da}
        <img src="/images/currency/dance.png" />
      </div>
      <div>
        {cost.pa}
        <img src="/images/currency/passion.png" />
      </div>
      <div>
        {cost.vo}
        <img src="/images/currency/vocal.png" />
      </div>
      <div>
        {cost.vi}
        <img src="/images/currency/visual.png" />
      </div>
      <div>
        {cost.me}
        <img src="/images/currency/mental.png" />
      </div>
    </Space>
  );
};

export default CostBar;