export default function ContactForm(){
  return (
    <form className="space-y-4 max-w-lg">
      <input className="w-full p-3 border rounded" placeholder="Name" />
      <input className="w-full p-3 border rounded" placeholder="Email" />
      <textarea className="w-full p-3 border rounded" placeholder="Message" rows="4"></textarea>
      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Send Message</button>
    </form>
  )
}