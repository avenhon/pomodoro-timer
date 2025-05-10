import { useRef, useState } from "react";
import Time from "./Time";
import Session from "./Session";

interface session {
  name: string;
  hours: number;
  minutes: number;
  seconds: number;
}

function Timer() {
  const [sessions, setSessions] = useState<session[]>([
    {
      name: "Focus",
      hours: 0,
      minutes: 25,
      seconds: 0,
    },
    {
      name: "Short Break",
      hours: 0,
      minutes: 5,
      seconds: 0,
    },
    {
      name: "Long Break",
      hours: 0,
      minutes: 15,
      seconds: 0,
    },
  ]);
  const [currentSession, setCurrentSession] = useState<session>(sessions[0]);
  const intervalRef = useRef(0);

  function changeSession(sessionName: string | null) {
    if (intervalRef.current != 0) clearInterval(intervalRef.current);

    let session = sessions.find((session) => session.name === sessionName);

    if (!session) {
      session = currentSession;
    }

    setCurrentSession(session);
  }

  function timerStartHandler() {
    intervalRef.current = setInterval(handleTimerChange, 1000);
  }

  function handleTimerChange() {
    setCurrentSession((prevSession) => {
      if (prevSession.seconds === 0) {
        if (prevSession.minutes === 0 && !prevSession.hours) {
          return { ...prevSession, minutes: 0, seconds: 0 };
        } else if (prevSession.hours) {
          return {
            ...prevSession,
            hours: prevSession.hours - 1,
            minutes: 59,
            seconds: 59,
          };
        }

        return {
          ...prevSession,
          minutes: prevSession.minutes - 1,
          seconds: 59,
        };
      } else {
        return {
          ...prevSession,
          seconds: prevSession.seconds - 1,
        };
      }
    });
  }

  return (
    <div className={"flex flex-col w-sm items-center"}>
      <div className={"flex gap-0.5"}>
        {sessions.map((session, id) => (
          <Session
            sessionName={session.name}
            key={id}
            changeSession={changeSession}
          />
        ))}
        {/* <button
          className={
            "font-(family-name:--font-family) border-2 px-3 py-1 rounded-xl bg-black text-white"
          }
        >
          +
        </button> */}
      </div>
      <Time
        hours={currentSession.hours}
        minutes={currentSession.minutes}
        seconds={currentSession.seconds}
      />
      <button
        onClick={() => timerStartHandler()}
        className={
          "font-(family-name:--font-family) border-2 px-3 py-1 rounded-xl bg-black text-white"
        }
      >
        Start Timer
      </button>
    </div>
  );
}

export default Timer;
