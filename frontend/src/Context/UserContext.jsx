import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = createContext()

function Userprovider({ children }) {
    const [trainers, setTrainer] = useState([])
    const [trainerFname, setTreainerFname] = useState("")
    const [trainerLname, setTreainerLname] = useState("")
    const [traineremail, setTreaineremail] = useState("")
    const [trainerphonenum, setTreainerphonenum] = useState("")
    const [traineraddress, setTreaineraddress] = useState("")
    const [trainerage, setTreainerage] = useState("")
    const [trainergender, setTreainergender] = useState("")
    const [traineryearofExpriance, setTreaineryearofExpriance] = useState("")
    const navigate = useNavigate()
    useEffect(() => {
        async function fetchtrainersData() {
            try {
                const res = await fetch("http://localhost:8000/trainers")
                const data = await res.json()
                console.log(data)
                setTrainer(data)
            } catch (error) {
                throw new Error("Error while fetching trainers data")
            }
        }
        fetchtrainersData()
    }, [])


    async function addtrainer() {
        const trainerInfo = {
            trainerFname,
            trainerLname,
            traineremail,
            trainerphonenum,
            traineraddress,
            trainerage,
            trainergender,
            traineryearofExpriance
        }

        try {
            const res = await fetch("http://localhost:8000/trainers", {
                method: 'POST',
                body: JSON.stringify(trainerInfo),
                headers: {
                    "Content-Type": "application/json"
                },
            })
            const data = await res.json()
            console.log(data)
            setTrainer([...trainers, trainerInfo])
            navigate(-1)
        }
        catch {
            throw new Error("There was an error add user date...")
        }

        console.log(trainerInfo)
    }
    async function deleteuser(id) {
        try {
            await fetch(`http://localhost:8000/trainers/${id}`, { method: "DELETE" })
            setTrainer((user) => user.filter((users) => users.id !== id))
        } catch (error) {
            throw new Error("There was an error deleting user")
        }
    }
    return (< UserContext.Provider
        value={{
            trainers,
            trainerFname,
            trainerLname,
            trainerage,
            traineremail,
            traineraddress,
            trainergender,
            trainerphonenum,
            setTreainerage,
            setTreaineremail,
            setTreainergender,
            setTreainerFname,
            setTreainerLname,
            setTreainerphonenum,
            setTreaineryearofExpriance,
            setTreaineraddress,
            deleteuser,
            addtrainer

        }}
    > {children}</ UserContext.Provider>)
}

function useTrainer() {
    const context = useContext(UserContext)
    if (!context) {
        throw new Error("useTrainer context must used within a UserProvider")
    }
    return context
}

export { Userprovider, useTrainer }
