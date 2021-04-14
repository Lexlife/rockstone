import React, { useEffect, useState } from 'react';

export const SwipeCurrentTime = () => {
  const [move, setMove] = useState(null);

  const onTouchMoveHandler = () => {
    const Data = new Date();
    const Hour = Data.getHours();
    const Minutes = Data.getMinutes();
    const Seconds = Data.getSeconds();
    const time = `${Hour} час. ${Minutes} мин. ${Seconds} сек.`;
    const result = setMove(time);
    return result;
  };

  useEffect(() => {
    setInterval(() => {
      onTouchMoveHandler();
    }, 1000);
  }, []);

  return (
    <>
      {move}
    </>
  );
};
