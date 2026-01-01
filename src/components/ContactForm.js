import { useState } from "react";

export default function ContactForm(){
  const [status, setStatus] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setStatus('Sending...');
  
      const formData = {
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
      };
  
      const response = await fetch('/api/contactApi', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
      if (result.success) {
        setStatus('Message sent successfully!');
        e.target.reset();
      } else {
        setStatus('Error: ' + result.message);
      }
    };
  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
      <input name="name" className="w-full p-3 border rounded" required placeholder="Name" />
      <input name="email" type="email" className="w-full p-3 border rounded" required placeholder="Email" />
      <textarea name="message" className="w-full p-3 border rounded" required placeholder="Message" rows="4"></textarea>
      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Send Message</button>
      {status && <p className="text-sm mt-2">{status}</p>}
    </form>
  )
}