import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();

const FAKE_USER = [
    {
        name: "naol",
        email: "naol@example.com",
        password: "naolleg",
        role: 'admin',
        avatar: "https://i.pravatar.cc/100?u=zz",
    },
    {
        name: "sikar",
        email: "sikar@example.com",
        password: "sikary",
        role: 'trainee',
        avatar: "https://i.pravatar.cc/100?u=zz",
    },
    {
        name: "mahi",
        email: "mahi@example.com",
        password: "mahi",
        role: 'trainer',
        avatar: "https://i.pravatar.cc/100?u=zz",
    },
];

const initialState = {
    user: null,
    isAuthenticated: false,
    role: null,
};

function reducer(state, action) {
    switch (action.type) {
        case 'login':
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true,
                role: action.payload.role,
            };
        case 'logout':
            return {
                ...state,
                user: null,
                isAuthenticated: false,
                role: null,
            };
        default:
            throw new Error('Unknown action type');
    }
}

function AuthProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { user, isAuthenticated, role } = state;

    function login(email, password) {
        const foundUser = FAKE_USER.find(user => user.email === email && user.password === password);
        if (foundUser) {
            dispatch({ type: 'login', payload: foundUser });
        }
    }

    function logout() {
        dispatch({ type: 'logout' });
    }

    return (
        <AuthContext.Provider value={{ login, logout, isAuthenticated, user, role }}>
            {children}
        </AuthContext.Provider>
    );
}

function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}

export { useAuth, AuthProvider };
