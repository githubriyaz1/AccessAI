import { Moon, Sun } from "lucide-react";
import useTheme from "../../hooks/useTheme";

function ThemeToggle() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="w-12 h-12 rounded-xl bg-slate-100 hover:bg-slate-200 transition flex items-center justify-center"
    >
      {darkMode ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}

export default ThemeToggle;