import React, { useState, useEffect } from 'react';
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from 'emailjs-com'

export const Contact = () => {

    const [formData, setFormData] = useState({
        Name: "",
        Email: "",
        message: ""
    });

        const [isLoading, setIsLoading] = useState(false);

    const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;
    // Initialize EmailJS when component mounts
    useEffect(() => {
        emailjs.init(PUBLIC_KEY);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Using send method with template params that match your template
        const templateParams = {
            to_name: 'Kanishk', // {{to_name}} in your template
            from_name: formData.Name, // {{from_name}} in your template
            email: formData.Email, // {{email}} in your template
            message: formData.message // {{message}} in your template
        };

        emailjs
            .send(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, templateParams, import.meta.env.VITE_PUBLIC_KEY)
            .then((result) => {
                console.log('Success:', result.text);
                alert("Message Sent!");
                setFormData({ Name: "", Email: "", message: "" }); 
            })
            .catch((error) => {
                console.error('Error:', error.text);
                alert("Oops! Something went wrong. Please try again later.");
            });
    };

    return (
        <section
         id="contact"
         className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="px-4 w-full md:w-150">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    Get in Touch
                </h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="relative">  
                        <input 
                            type="text" 
                            id="Name" 
                            name="Name" 
                            required 
                            value={formData.Name}
                            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" 
                            placeholder="Name..."
                            onChange={(e)=> setFormData({ ...formData, Name: e.target.value })}
                        />
                    </div>
                    <div className="relative">  
                        <input 
                            type="email" 
                            id="Email" 
                            name="Email" 
                            required 
                            value={formData.Email}
                            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" 
                            placeholder="example@gmail.com"
                            onChange={(e)=> setFormData({ ...formData, Email: e.target.value })}
                        />
                    </div>
                    <div className="relative">  
                        <textarea
                            id="message" 
                            name="message" 
                            required 
                            value={formData.message}
                            rows={5}
                            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" 
                            placeholder="Your Message..."
                            onChange={(e)=> setFormData({ ...formData, message: e.target.value })}
                        />
                    </div>

                    <button 
                        type="submit"  
                        className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                    >
                        Send Message..
                    </button>
                </form>
                </div>
            </RevealOnScroll>
        </section>
    );
};