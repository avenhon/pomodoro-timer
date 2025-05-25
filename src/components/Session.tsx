import { TSession } from "./Timer";

function Session({
  sessionName,
  changeSession,
  sessions,
  setSessions,
}: {
  sessionName: string;
  changeSession: (sessionName: string | null) => void;
  sessions: TSession[];
  setSessions: React.Dispatch<React.SetStateAction<TSession[]>>;
}) {
  const handleDeleteSession = () => {
    const updatedSessions = sessions.filter(
      (currSession) => currSession.name !== sessionName
    );
    setSessions(updatedSessions);
    changeSession("Focus");
    localStorage.setItem("sessions", JSON.stringify(updatedSessions));
  };

  const isDefaultSession =
    sessionName === "Focus" ||
    sessionName === "Short Break" ||
    sessionName === "Long Break";

  return (
    <div aria-label="session" className="bg-(--components-bg-color) rounded-xl">
      <button
        className={
          isDefaultSession
            ? "px-3 py-1 font-(family-name:--font-family) text-(--text-color) font-semibold"
            : "pl-3 py-1 font-(family-name:--font-family) text-(--text-color) font-semibold"
        }
        onClick={(e) =>
          changeSession((e.target as HTMLInputElement).textContent)
        }
      >
        <span className={isDefaultSession ? "" : "pr-2"}>{sessionName}</span>
      </button>
      {isDefaultSession ? null : (
        <button
          onClick={() => handleDeleteSession()}
          className="bg-neutral-100 px-2 mr-1 rounded-xl font-(family-name:--font-family) text-(--text-color) font-semibold"
        >
          x
        </button>
      )}
    </div>
  );
}

export default Session;
