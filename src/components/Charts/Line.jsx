import useDemoConfig from "../../common/useDemoConfig";

import React from "react";
import { Chart } from "react-charts";
import ResizableBox from "../ResizableBox";

export default function Line() {
  const { data, randomizeData } = useDemoConfig({
    series: 10,
    dataType: "time",
  });

  const primaryAxis = React.useMemo(
    () => ({
      getValue: (datum) => datum.primary,
    }),
    []
  );

  const secondaryAxes = React.useMemo(
    () => [
      {
        getValue: (datum) => datum.secondary,
      },
    ],
    []
  );

  return (
    <>
      {/* <button onClick={randomizeData}>Randomize Data</button> */}
      {/* <br /> */}
      {/* <br /> */}
        <Chart
          options={{
            data,
            primaryAxis,
            secondaryAxes,
          }}
        />
    </>
  );
}
