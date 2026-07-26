function StudentList() {
    const [students, setStudents] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:8001/students.php').then(r => r.json()).then(setStudents)
    }, []);

    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>Student ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Program</th>
                </tr>
                </thead>
                <tbody>
                {students.map((student) => (
                    <tr key={student.studentID}>
                        <td>{student.studentID}</td>
                        <td>{student.firstName}</td>
                        <td>{student.lastName}</td>
                        <td>{student.program}</td>
                    </tr>
                ))}
                </tbody>
            </table>


        </div>
    )
}
