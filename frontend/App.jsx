

const API_BASE = "http://localhost:8001";

function App() {

    const [refreshKey, setRefreshKey] = React.useState(0);
    const [view, setView] = React.useState("form"); //for the header

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
        setView("list"); //after registering set view to list
    }

    return (
        <div>

            <Header setView={setView} />

            {view === "form" && (
                <StudentForm registerStudent={registerStudent} />
            )}

            {view === "list" && (
                <>
                    <h2>Student Directory</h2>
                    <StudentList key={refreshKey} />
                </>
            )}

            <Footer />

        </div>
    );
}
ReactDOM.createRoot(
    document.getElementById("root")
).render(<App />);