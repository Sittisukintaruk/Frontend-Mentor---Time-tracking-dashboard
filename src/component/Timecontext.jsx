import { createContext, useState } from "react";

const TimeContext = createContext();

export function TimeProvider({ children }) {
  const [timeFrames, setTimeFrames] = useState("weekly");

 
  const setTimeFremesbyinput = (time) => {
    setTimeFrames(time);
  };

  return (
    <TimeContext.Provider value={{ timeFrames, setTimeFremesbyinput }}>
      {children}
    </TimeContext.Provider>
  );
}

export default TimeContext;
