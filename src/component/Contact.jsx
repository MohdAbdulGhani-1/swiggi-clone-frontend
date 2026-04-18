
import { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add your API call here
        setFormData({ name: '', email: '', phone: '', message: '' });
    };

    return (
        <section className="contact">
            <div className="container">
                <h1>Contact Us</h1>
                <p>We'd love to hear from you. Get in touch with us today!</p>
                
                <div className="contact-wrapper">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required 
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required 
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input 
                                type="tel" 
                                id="phone" 
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea 
                                id="message" 
                                name="message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="submit-btn">Send Message</button>
                    </form>

                    <div className="contact-info">
                        <div className="info-item">
                            <h3>📍 Address</h3>
                            <p>shaalibanda, Hyderabad, India</p>
                        </div>
                        <div className="info-item">
                            <h3>📞 Phone</h3>
                            <p>123456789</p>
                        </div>
                        <div className="info-item">
                            <h3>✉️ Email</h3>
                            <p>support@swiggiclone.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;