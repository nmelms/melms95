import React, { useState, useEffect } from "react";

export default function Time() {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    let timer = setInterval(() => setDate(new Date()), 1000);

    return function cleanup() {
      clearInterval(timer);
    };
  });
  return (
    <div>
      {date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
    </div>
  );
}
