import { setMode } from "@chrissgon/perfectui";
import { useState } from "react";

export default function DarkMode() {
  const [isDark, setIsDark] = useState(true);

  function changeTheme() {
    setIsDark((darkmode) => (darkmode = !darkmode));

    setMode(isDark ? "light" : "dark");
  }

  return (
    <button
      type="button"
      aria-label="Dark Mode"
      className="h-fit"
      onClick={changeTheme}
    >
      <i
        className={`bi text-xl leading-none ${
          isDark ? "bi-moon" : "bi-brightness-high"
        }`}
      />
    </button>
  );
}