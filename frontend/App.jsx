const API_BASE = "http://localhost:8001";

function App() {

    const [refreshKey, setRefreshKey] = React.useState(0);

    async function registerStudent(formData) {

        await fetch(
            API_BASE + "/register.php",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            }
        );

        setRefreshKey((key) => key + 1);
    }

    return (
        <div>

            <StudentForm
                registerStudent={registerStudent}
            />

            <h2>Student Directory</h2>

            <StudentList key={refreshKey} />

        </div>
    );
}

ReactDOM.createRoot(
    document.getElementById("root")
).render(<App />);