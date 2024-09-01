import Input from "../components/forms/Input.tsx";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function Register() {

    const apiUrl = import.meta.env.VITE_APP_API_URL;

    const navigate = useNavigate();


    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value, // Met à jour la valeur correspondante dans l'état
        });
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        fetch(apiUrl + '/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(() => {
                // Rediriger vers la page d'accueil après la soumission réussie
                navigate('/');
            })
            .catch(err => {
                console.error('There was a problem with the fetch operation:', err);
            });
    };


    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="card w-full max-w-md shadow-2xl bg-base-100">
                <div className="card-body">
                    <h2 className="card-title text-center">Inscription</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-control mb-4">
                            <Input placeholder="John"
                                   value={formData.firstName}
                                   onChange={handleChange}
                                   name="firstName"
                                   type="text"
                                   required={true}
                                   className="input input-bordered w-full"/>
                        </div>

                        <div className="form-control mb-4">
                            <Input placeholder="John"
                                   value={formData.lastName}
                                   onChange={handleChange}
                                   name="lastName"
                                   type="text"
                                   required={true}
                                   className="input input-bordered w-full"/>
                        </div>

                        <div className="form-control mb-4">
                            <Input placeholder="John@doe.fr"
                                   value={formData.email}
                                   onChange={handleChange}
                                   name="email"
                                   type="email"
                                   required={true}
                                   className="input input-bordered w-full"/>
                        </div>

                        <div className="form-control mb-4">
                            <Input placeholder="*********"
                                   value={formData.password}
                                   onChange={handleChange}
                                   name="password"
                                   type="password"
                                   required={true}
                                   className="input input-bordered w-full"/>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary w-full">S'inscrire</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}