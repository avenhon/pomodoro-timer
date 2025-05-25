function Time({
  hours,
  minutes,
  seconds,
}: {
  hours: number;
  minutes: number;
  seconds: number;
}) {
  const timeClass =
    "font-(family-name:--font-family) text-8xl font-semibold mt-2 mb-2 text-(--text-color)";

  return hours ? (
    <p aria-label="time" className={timeClass}>
      {hours < 10 ? `0${hours}` : hours}:
      {minutes < 10 ? `0${minutes}` : minutes}:
      {seconds < 10 ? `0${seconds}` : seconds}
    </p>
  ) : (
    <p aria-label="time" className={timeClass}>
      {minutes < 10 ? `0${minutes}` : minutes}:
      {seconds < 10 ? `0${seconds}` : seconds}
    </p>
  );
}

export default Time;
