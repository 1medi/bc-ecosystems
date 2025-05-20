export default function Footer() {
    return (
      <footer className="bg-gray-100 py-10 px-6 mt-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0">
          <div>
            <h4 className="font-bold mb-2">Quick Links</h4>
            <ul className="space-y-1">
              <li><a href="/" className="text-sm text-gray-700 hover:underline">Home</a></li>
              <li><a href="/about" className="text-sm text-gray-700 hover:underline">About</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Contact</h4>
            <p className="text-sm text-gray-600">123 Nature Way, BC<br />info@ecosystems.ca</p>
          </div>
          <div>
            <h4 className="font-bold mb-2">Newsletter</h4>
            <input type="email" placeholder="Your email" className="border px-2 py-1 rounded text-sm" />
            <button className="ml-2 px-3 py-1 bg-green-600 text-white text-sm rounded">Subscribe</button>
          </div>
        </div>
      </footer>
    );
  }
  