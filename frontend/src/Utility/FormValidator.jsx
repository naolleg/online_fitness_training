const FormValidator = {
    adduser: (form) => {
        if (form.fname === "") {
            return {
                success: false,
                error: { fname: "First name is required" }
            };
        } else if (!/^[a-zA-Z]{3,10}$/.test(form.fname)) {
            return {
                success: false,
                error: {
                    fname: "First name should consist of 3 to 10 alphabetic characters only",
                },
            };
        }

        if (form.lname === "") {
            return {
                success: false,
                error: { lname: "Last name is required" }
            };
        } else if (!/^[a-zA-Z]{3,10}$/.test(form.lname)) {
            return {
                success: false,
                error: {
                    lname: "Last name should consist of 3 to 10 alphabetic characters only",
                },
            };
        }

        if (form.phonenumber === "") {
            return {
                success: false,
                error: { phonenumber: "Phone number is required" }
            };
        }

        const phoneRegex = /^[+]*[(]{0,1}[0-9]{3,4}[)]{0,1}[-\s./0-9]*$/;

        if (!phoneRegex.test(form.phonenumber)) {
            return {
                success: false,
                error: { phonenumber: "Invalid phone number format" }
            };
        }

        if (form.email === "") {
            return {
                success: false,
                error: { email: "Email is required" }
            };
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(form.email)) {
            return {
                success: false,
                error: { email: "Invalid email format" }
            };
        }

        if (form.gender === "") {
            return {
                success: false,
                error: { gender: "The gender sholud be selected" }
            };
        }
        if (form.city === "") {
            return {
                success: false,
                error: { city: "The city sholud be selected" }
            };
        }

        if (form.categories === "") {
            return {
                success: false,
                error: { categories: "Select what you want to traine" }
            };
        }


        if (form.yearofExpriance === "") {
            return {
                success: false,
                error: { yearofExpriance: "Insert your expriance" }
            };
        }
        else if (form.yearofExpriance <= 1) {
            return {
                success: false,
            };
        }


        if (form.introductionVideo === "") {
            return {
                success: false,
                error: { introductionVideo: "Need this " }

            }
        }

        if (form.certfication === "") {
            return {
                success: false,
                error: { certfication: "Need this " }

            }
        }

        if (form.weight === "") {
            return {
                success: false,
                error: { weight: "Insert you current weight" }

            }
        }
        if (form.height === "") {
            return {
                success: false,
                error: { height: "Insert you current height" }
            }
        }
        if (form.medicalCondtion === "") {
            return {
                success: false,
                error: { medicalCondtion: "write your medical condtion" }

            }
        }

        return { success: true, error: {} };
    }
}




export default FormValidator;
