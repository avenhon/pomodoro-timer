import { useState } from "react";
import { TSession } from "./Timer";

function SessionCreateModal({
  isVisible,
  setVisible,
  sessions,
  setSessions,
}: {
  isVisible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  sessions: TSession[];
  setSessions: React.Dispatch<React.SetStateAction<TSession[]>>;
}) {
  const [session, setSession] = useState<TSession>({
    name: "",
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const handleSessionCreation = () => {
    if (sessions.find((currSession) => currSession.name === session.name))
      return;
    const updatedSessions = [...sessions, session];
    setSessions(updatedSessions);
    setSession({ name: "", hours: 0, minutes: 0, seconds: 0 });
    setVisible(false);
    localStorage.setItem("sessions", JSON.stringify(updatedSessions));
  };

  if (isVisible) {
    return (
      <div
        aria-label="session create modal"
        className="flex flex-col p-2 absolute border-2 rounded-xl border-(--components-bg-color) top-0.5 -right-55 max-md:top-0 max-md:right-0 max-md:left-0 max-md:bottom-0 max-md:backdrop-blur-3xl max-md:border-0 max-md:rounded-none max-md:flex max-md:items-center max-md:justify-center"
      >
        <button
          aria-label="Close modal window"
          onClick={() => setVisible(false)}
          className="hidden max-md:inline-block z-20 absolute top-2 right-3 text-(--text-color) font-semibold"
        >
          Close
        </button>
        <input
          className="text-(--text-color) pl-1 mb-2 outline-0"
          type="text"
          placeholder="Session name"
          value={session.name}
          onChange={(e) => setSession({ ...session, name: e.target.value })}
          aria-label="session name"
        />
        <div className="flex max-w-2xs gap-2 mb-2">
          <div>
            <p className="text-(--text-color) font-semibold">hours:</p>
            <input
              aria-label="hours for new session"
              className="text-(--text-color) font-semibold max-w-14"
              type="text"
              placeholder="hrs"
              value={session.hours}
              onChange={(e) =>
                setSession({ ...session, hours: +e.target.value })
              }
            />
          </div>
          <div>
            <p className="text-(--text-color) font-semibold">minutes:</p>
            <input
              aria-label="minutes for new session"
              className="text-(--text-color) font-semibold max-w-14"
              type="text"
              placeholder="min"
              value={session.minutes}
              onChange={(e) =>
                setSession({
                  ...session,
                  minutes: +e.target.value < 60 ? +e.target.value : 0,
                })
              }
            />
          </div>
          <div>
            <p className="text-(--text-color) font-semibold">seconds:</p>
            <input
              aria-label="seconds for new session"
              className="text-(--text-color) font-semibold max-w-14"
              type="text"
              placeholder="sec"
              value={session.seconds}
              onChange={(e) =>
                setSession({
                  ...session,
                  seconds: +e.target.value < 60 ? +e.target.value : 0,
                })
              }
            />
          </div>
        </div>
        <button
          onClick={() => handleSessionCreation()}
          className={
            "relative font-(family-name:--font-family) transition-all duration-300 px-3 py-1 rounded-xl bg-(--components-bg-color) text-(--text-color) font-semibold disabled:opacity-20"
          }
          disabled={session.name.length < 3}
        >
          Save new session
        </button>
      </div>
    );
  }
}

export default SessionCreateModal;
