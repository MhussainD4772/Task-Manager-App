interface NavBarProps {
  theme: string;
  setTheme: (mode: string) => void;
}

function Navbar({ theme, setTheme }: NavBarProps) {
  return (
    <nav className="navbar navbar-dark bg-primary px-3 py-2">
      <h3 className="text-white mb-0">Task Manager</h3>

      <div className="form-check form-switch text-white">
        <input
          className="form-check-input"
          type="checkbox"
          id="themeSwitch"
          checked={theme === "dark"}
          onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
        />
        <label className="form-check-label" htmlFor="themeSwitch">
          {theme === "dark" ? "Dark Mode" : "Light Mode"}
        </label>
      </div>
    </nav>
  );
}

export default Navbar;
