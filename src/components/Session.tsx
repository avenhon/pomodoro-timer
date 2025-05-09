function Session({
  sessionName,
  changeSession,
}: {
  sessionName: string;
  changeSession: (sessionName: string | null) => void;
}) {
  return (
    <button
      className={
        "font-(family-name:--font-family) border-2 px-3 py-1 rounded-xl bg-black text-white"
      }
      onClick={(e) => changeSession((e.target as HTMLInputElement).textContent)}
    >
      {sessionName}
    </button>
  );
}

export default Session;
