import { useRef, useState } from "react";
import Time from "./Time";
import Session from "./Session";
import SessionCreateModal from "./SessionCreateModal";

export type TSession = {
  name: string;
  hours: number;
  minutes: number;
  seconds: number;
};

interface ITimerStatus {
  isStarted: boolean;
  isPaused: boolean;
}

function Timer() {
  const [sessions, setSessions] = useState<TSession[]>(() => {
    const localStorageSessions = localStorage.getItem("sessions");
    const initialValue = localStorageSessions
      ? JSON.parse(localStorageSessions)
      : null;
    return (
      initialValue || [
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
      ]
    );
  });
  const [currentSession, setCurrentSession] = useState<TSession>(sessions[0]);
  const intervalRef = useRef(0);
  const [timerStatus, setTimerStatus] = useState<ITimerStatus>({
    isPaused: false,
    isStarted: false,
  });
  const timerEndSound = new Audio(
    "https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-69838/zapsplat_multimedia_alert_ping_chime_correct_answer_check_positive_003_70192.mp3"
  );
  const [isSessionCreationActive, setIsSessionCreationActive] =
    useState<boolean>(false);

  function changeSession(sessionName: string | null) {
    if (intervalRef.current != 0) clearInterval(intervalRef.current);

    let session = sessions.find((session) => session.name === sessionName);

    if (!session) {
      session = currentSession;
    }

    setCurrentSession(session);
    setTimerStatus({ ...timerStatus, isStarted: false });
  }

  function timerStartHandler() {
    intervalRef.current = setInterval(handleTimerChange, 1000);
    setTimerStatus({ ...timerStatus, isStarted: true });
  }

  function timerPauseHandler() {
    clearInterval(intervalRef.current);
    setTimerStatus({ ...timerStatus, isPaused: true });
  }

  function timerResumeHandler() {
    intervalRef.current = setInterval(handleTimerChange, 1000);
    setTimerStatus({ ...timerStatus, isPaused: false });
  }

  function timerResetHandler() {
    clearInterval(intervalRef.current);
    setTimerStatus({ isStarted: false, isPaused: false });
    let session = sessions.find(
      (session) => session.name === currentSession.name
    );

    if (!session) {
      session = currentSession;
    }

    setCurrentSession(session);
  }

  function handleTimerChange() {
    setCurrentSession((prevSession) => {
      if (prevSession.seconds === 0) {
        if (prevSession.minutes === 0 && !prevSession.hours) {
          clearInterval(intervalRef.current);
          timerResetHandler();
          timerEndSound.play();
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
    <div className={"flex flex-col items-center justify-center h-full"}>
      <div
        className={
          "flex relative gap-1 flex-wrap items-center justify-center max-md:static"
        }
      >
        {sessions.map((session, id) => (
          <Session
            sessionName={session.name}
            key={id}
            changeSession={changeSession}
            sessions={sessions}
            setSessions={setSessions}
          />
        ))}
        <button
          onClick={() => setIsSessionCreationActive(!isSessionCreationActive)}
          className={
            "relative font-(family-name:--font-family) px-3 py-1 rounded-xl bg-(--components-bg-color) text-(--text-color) font-semibold"
          }
        >
          +
        </button>
        <SessionCreateModal
          isVisible={isSessionCreationActive}
          setVisible={setIsSessionCreationActive}
          sessions={sessions}
          setSessions={setSessions}
        />
      </div>
      <Time
        hours={currentSession.hours}
        minutes={currentSession.minutes}
        seconds={currentSession.seconds}
      />
      {timerStatus.isStarted ? (
        <div className="flex gap-1">
          {timerStatus.isPaused ? (
            <button
              onClick={() => timerResumeHandler()}
              className={
                "font-(family-name:--font-family) px-3 py-1 rounded-xl bg-(--components-bg-color) text-(--text-color) font-semibold"
              }
            >
              Resume
            </button>
          ) : (
            <button
              onClick={() => timerPauseHandler()}
              className={
                "font-(family-name:--font-family) px-3 py-1 rounded-xl bg-(--components-bg-color) text-(--text-color) font-semibold"
              }
            >
              Pause
            </button>
          )}
          <button
            onClick={() => timerResetHandler()}
            className={
              "font-(family-name:--font-family) px-3 py-1 rounded-xl bg-(--components-bg-color) text-(--text-color) font-semibold"
            }
          >
            Reset
          </button>
        </div>
      ) : (
        <button
          onClick={() => timerStartHandler()}
          className={
            "font-(family-name:--font-family) px-3 py-1 rounded-xl bg-(--components-bg-color) text-(--text-color) font-semibold"
          }
        >
          Start Timer
        </button>
      )}
    </div>
  );
}

export default Timer;
