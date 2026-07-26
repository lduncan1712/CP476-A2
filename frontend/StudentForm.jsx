/* create StudentForm component */
function StudentForm({registerStudent}) {
    /* Create state object */
    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        program: ""
    });

    //Create an errors state
    const [errors, setErrors] = React.useState({});

    /* Handling any inputs */
    function handleChange(event) {
        const { name, value } = event.target;

        /* To update the values */
        setFormData({
            ...formData,
            [name]: value
        });
    }

    /* Handing regsitering the student */
    function handleSubmit(event) {
        event.preventDefault();

        const newErrors = {};

        // Check if First Name is 
        //trim removes spaces from beginning and end
        if (!formData.firstName.trim()) {
            newErrors.firstName = "First name is required";
        }

        // Check if Last Name is empty
        if (!formData.lastName.trim()) {
            newErrors.lastName = "Last name is required";
        }

        // Check if Email is empty
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        }
        // Check if Email contains @
        else if (!formData.email.includes("@")) {
            newErrors.email = "Email must contain @";
        }

        // Check if Program is empty
        if (!formData.program.trim()) {
            newErrors.program = "Program is required";
        }

        // Store the errors in React state
        setErrors(newErrors);

        // If there are errors, stop here
        if (Object.keys(newErrors).length > 0) {
            return;
        }
        // If validation succeeds 
        registerStudent(formData);
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
                {errors.firstName && (
                    <p className="error">
                        {errors.firstName}
                    </p>
                )}

                <label>Last Name</label>
                <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                />

                {errors.lastName && (
                    <p className="error">
                        {errors.lastName}
                    </p>
                )}

                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />

                {errors.email && (
                    <p className="error">
                        {errors.email}
                    </p>
                )}


                <label>Program</label>
                <input
                    type="text"
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                />

                {errors.program && (
                    <p className="error">
                        {errors.program}
                    </p>
                )}

                <button type="submit">
                    Register
                </button>

            </form>
        </div>
    );
}