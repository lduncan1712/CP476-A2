/* create StudentForm component */
function StudentForm() {
    /* Create state object */
    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        program: ""
    });

    /* Handling any inputs */
    function handleChange(event) {
        const { name, value } = event.target;

        /* To update the values */
        setFormData({
            ...formData,
            [name]: value
        });
    }

    function handleSubmit(event) {
        event.preventDefault();

        console.log(formData);
    }

    return (
        <div className="form-card">
            <h2>Student Registration</h2>

            <form onSubmit={handleSubmit}>

                <label>First Name</label>
                <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                />

                <label>Last Name</label>
                <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                />

                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />

                <label>Program</label>
                <input
                    type="text"
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                />

                <button type="submit">
                    Register
                </button>

            </form>
        </div>
    );
}