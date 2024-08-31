import Header from "./partials/Header.tsx";
import Footer from "./partials/Footer.tsx";
import Home from "./pages/Home.tsx"
import Register from "./pages/Register.tsx"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="min-h-screen flex flex-col">
                <Header />

                <main className="flex-grow p-4">
                    <div className="container mx-auto">
                        <Routes>
                            <Route path="/" element={<Home/>} />
                            <Route path="/inscription" element={<Register />} />
                        </Routes>
                    </div>
                </main>

                <Footer />
            </div>
        </Router>
    );
}

export default App
