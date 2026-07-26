function Header({ setView }) {
    return (
        <header className="header">
            <h1>Student Registration System</h1>

            <nav className="nav">
                <button onClick={() => setView("form")}>
                    Register Student
                </button>

                <button onClick={() => setView("list")}>
                    View Students
                </button>
            </nav>
        </header>
    );
}
