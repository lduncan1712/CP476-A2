const API_BASE = "http://localhost:8001";

function App() {
    const [result, setResult] = React.useState(null);

    async function getStudents() {
        const response = await fetch(API_BASE + "/students.php");
        setResult(await response.json());
    }

    async function registerStudent() {
        const response = await fetch(API_BASE + "/register.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                firstName: "Test",
                lastName: "Student",
                email: "jane@example.com",
                program: "Data Science"
            })
        });
        setResult(await response.json());
    }

    return (
        <div>
            <h2>TOBE Done Via Form Eventually, and Each Moved To Its Own Component But For Now Just To Confirm this works</h2>
            <button onClick={registerStudent}>Register Student</button>
            <button onClick={getStudents}>Get Students</button>
            <h3>{result ? JSON.stringify(result) : null}</h3>
        </div>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
