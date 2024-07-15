import { useState } from 'react';
import './Contact.css';

/* Contact page */
export function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    /* Form submit */
    function handleSubmit() {
        const body = {
            name,
            email,
            phone,
            message,
        };
        const contentType = 'application/json';
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': contentType,
            },
            body: JSON.stringify(body),
        };

        fetch('/api/contact', options)
            .then((response) => {
                if (!response.ok) {
                    throw 'error';
                }

                return response.json();
            })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div className="Contact">
            <h1 className="pattern-typography-title-l Contact--heading">
                Contactez-moi!
            </h1>
            <form className="Contact--form">
                <label>
                    <span className="label">Votre nom *</span>
                    <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <label>
                    <span className="label">Votre adresse email *</span>
                    <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label>
                    <span className="label">Votre numéro de téléphone</span>
                    <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </label>
                <label>
                    <span className="label">Dites-moi tout</span>
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </label>
                <label>
                    <span className="label">Ajouter une pièce jointe ?</span>
                    <input type="file" />
                </label>
                <button type="button" onClick={handleSubmit}>
                    Envoyer
                </button>
            </form>
        </div>
    );
}
