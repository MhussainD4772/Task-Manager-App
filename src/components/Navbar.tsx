interface NavBarProps {
  theme: string;
  setTheme: (mode: string) => void;
}

function Navbar({ theme, setTheme }: NavBarProps) {
  return (
    <nav className="navbar navbar-dark navbar-enhanced">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <i
            className="bi bi-check2-square me-2"
            style={{ fontSize: "1.5rem" }}
          ></i>
          <h3 className="text-white mb-0">Task Manager</h3>
        </div>

        <div className="form-check form-switch text-white d-flex align-items-center">
          <i
            className={`bi me-2 ${theme === "dark" ? "bi-sun" : "bi-moon"}`}
            style={{ fontSize: "1.1rem" }}
          ></i>
          <input
            className="form-check-input"
            type="checkbox"
            id="themeSwitch"
            checked={theme === "dark"}
            onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
            style={{ cursor: "pointer", width: "3rem", height: "1.5rem" }}
          />
          <label
            className="form-check-label ms-2"
            htmlFor="themeSwitch"
            style={{ cursor: "pointer" }}
          >
            {theme === "dark" ? "Light" : "Dark"}
          </label>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
