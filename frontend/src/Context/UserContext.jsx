import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();
const Base_urlTrainer = "http://localhost:8000";
const Base_urlTrainee = "http://localhost:8002";

function Userprovider({ children }) {
    const [trainers, setTrainer] = useState([]);
    const [trainees, setTrainees] = useState([]);

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [phonenumber, setPhonenumber] = useState("");
    const [city, setCity] = useState("");
    const [region, setRegion] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [gender, setGender] = useState("");

    const [yearofExpriance, setyearofExpriance] = useState("");
    const [certfication, setCertfication] = useState("");
    const [introductionVideo, setIntroductionVideo] = useState("");
    const [categories, setCategories] = useState("");

    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [bmi, setBmi] = useState("");
    const [allergic, setAllergic] = useState("");
    const [medicalCondtion, setMedicalCondition] = useState("");
    const [medication, setMedication] = useState("");
    const [goalWeight, setGoalWeight] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        async function fetchtrainersData() {
            try {
                const res = await fetch(`${Base_urlTrainer}/trainers`);
                const data = await res.json();
                console.log(data);
                setTrainer(data);
            } catch (error) {
                throw new Error("Error while fetching trainers data");
            }
        }
        fetchtrainersData();
    }, []);

    async function addtrainer() {
        const trainerInfo = {
            fname,
            lname,
            email,
            phonenumber,
            city,
            dateOfBirth,
            gender,
            region,
            certfication,
            yearofExpriance,
            introductionVideo,
            categories
        };

        try {
            const res = await fetch(`${Base_urlTrainer}/trainers`, {
                method: 'POST',
                body: JSON.stringify(trainerInfo),
                headers: {
                    "Content-Type": "application/json"
                },
            });
            const data = await res.json();
            console.log(data);
            setTrainer([...trainers, trainerInfo]);
            // navigate('/admin/trainerList');
        } catch {
            throw new Error("There was an error adding user data...");
        }
    }

    async function deleteuser(id) {
        try {
            await fetch(`${Base_urlTrainer}/trainers/${id}`, { method: "DELETE" });
            setTrainer((user) => user.filter((users) => users.id !== id));
        } catch (error) {
            throw new Error("There was an error deleting user");
        }
    }

    useEffect(() => {
        async function fetchtraineesData() {
            try {
                const res = await fetch(`${Base_urlTrainee}/trainee`);
                const data = await res.json();
                console.log(data);
                setTrainees(data);
            } catch (error) {
                throw new Error("Error while fetching trainee data");
            }
        }
        fetchtraineesData();
    }, []);

    async function addtrainee() {
        const traineeInfo = {
            fname,
            lname,
            email,
            phonenumber,
            city,
            dateOfBirth,
            gender,
            region,
            weight,
            height,
            medicalCondtion,
            medication,
            bmi,
            allergic,
            goalWeight,
        };

        try {
            const res = await fetch(`${Base_urlTrainee}/trainee`, {
                method: 'POST',
                body: JSON.stringify(traineeInfo),
                headers: {
                    "Content-Type": "application/json"
                },
            });
            const data = await res.json();
            console.log(data);
            setTrainees([...trainees, traineeInfo]);
            navigate('/admin/traineeList');
        } catch {
            throw new Error("There was an error adding user data...");
        }
    }

    return (
        <UserContext.Provider
            value={{
                fname, lname, email, phonenumber, city, region, dateOfBirth, gender,
                setFname, setLname, setEmail, setPhonenumber, setCity, setRegion, setGender, setDateOfBirth,
                trainers, certfication, yearofExpriance, introductionVideo, categories,
                setyearofExpriance, setCertfication, setIntroductionVideo, setCategories,
                deleteuser, addtrainer, addtrainee,
                trainees, setTrainees, weight, height, medicalCondtion, medication, bmi, allergic, goalWeight,
                setGoalWeight, setAllergic, setBmi, setMedicalCondition, setMedication, setHeight, setWeight
            }}
        >
            {children}
        </UserContext.Provider>
    );
}

function useTrainer() {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useTrainer must be used within a UserProvider");
    }
    return context;
}

export { Userprovider, useTrainer };
