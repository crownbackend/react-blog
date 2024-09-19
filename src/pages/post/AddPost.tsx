import {useState} from "react";
import Input from "../../components/forms/Input";
import TextArea from "../../components/forms/Textarea.tsx";

export default function AddPost() {

    const apiUrl = import.meta.env.VITE_APP_API_URL;

    const [formData, setFormData] = useState({
        title: '',
        content: '',
    });

    const info = JSON.parse(localStorage.getItem("user"))
    const headers = {
        'Content-Type': 'application/json',
        "Authorization": "Bearer " + info.token
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value, // Met à jour la valeur correspondante dans l'état
        });
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(formData)
        fetch(apiUrl + '/posts/add', {
                method: 'POST',
                headers: headers
            }).then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
                .then((data) => {
                    console.log(data)
                })
                .catch(err => {
                    console.error('There was a problem with the fetch operation:', err);
                });
    };


    return (
        <>
             <div className="flex items-center justify-center min-h-screen">
            <div className="card w-full max-w-md shadow-2xl bg-base-100">
                <div className="card-body">
                    <h2 className="card-title text-center">Ajouter un article</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-control mb-4">
                            <Input placeholder="Titre"
                                   value={formData.title}
                                   onChange={handleChange}
                                   name="title"
                                   type="text"
                                   required={true}
                                   className="input input-bordered w-full"/>
                        </div>

                        <div className="form-control mb-4">
                            <TextArea placeholder="Contenu"
                                   value={formData.content}
                                   onChange={handleChange}
                                   name="content"
                                   required={true}
                            />
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary w-full">S'inscrire</button>
                        </div>
                    </form>
                </div>
            </div>
             </div>
        </>
    )
}