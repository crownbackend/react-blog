import Header from "./partials/Header.tsx";
import Footer from "./partials/Footer.tsx";
import Home from "./pages/Home.tsx"
import Register from "./pages/Register.tsx"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./pages/Login.tsx";
import {AuthProvider} from "./context/AuthContext.tsx";
import {Users} from "./pages/user/Users.tsx";
import PrivateRoute from "./components/PrivateRoute.tsx";

function App() {
    return (
        <AuthProvider>
            <Router>
                <div className="min-h-screen flex flex-col">
                    <Header />

                    <main className="flex-grow p-4">
                        <div className="container mx-auto">
                            <Routes>
                                <Route path="/" element={<Home/>} />
                                <Route element={<PrivateRoute/>}>
                                    <Route path="/users" element={<Users/>} />
                                </Route>
                                <Route path="/inscription" element={<Register />} />
                                <Route path="/connexion" element={<Login />} />
                            </Routes>
                        </div>
                    </main>

                    <Footer />
                </div>
            </Router>
        </AuthProvider>
    );
}

export default App
