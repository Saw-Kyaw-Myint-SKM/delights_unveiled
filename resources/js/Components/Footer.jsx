import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <footer data-aos="fade-up"  data-aos-duration="500" className="bg-white py-10 px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-red-600">
            <span className="text-base md:text-lg text-red-500 font-bold">Delights</span> 
            <span className="text-base md:text-lg text-gray-500 font-bold">Unveiled</span>
          </h2>
          <p className="text-gray-500 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, hic?
          </p>
          <div className="flex mt-4 space-x-3">
            <a href="#" className="text-gray-500 hover:text-gray-900"><FaFacebookF /></a>
            <a href="#" className="text-gray-500 hover:text-gray-900"><FaTwitter /></a>
            <a href="#" className="text-gray-500 hover:text-gray-900"><FaInstagram /></a>
            <a href="#" className="text-gray-500 hover:text-gray-900"><FaLinkedinIn /></a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-700">SOLUTIONS</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="text-gray-500 hover:text-gray-900">Marketing</a></li>
            <li><a href="#" className="text-gray-500 hover:text-gray-900">Analytics</a></li>
            <li><a href="#" className="text-gray-500 hover:text-gray-900">Commerce</a></li>
            <li><a href="#" className="text-gray-500 hover:text-gray-900">Insights</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-700">SUPPORT</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="text-gray-500 hover:text-gray-900">Pricing</a></li>
            <li><a href="#" className="text-gray-500 hover:text-gray-900">Documentation</a></li>
            <li><a href="#" className="text-gray-500 hover:text-gray-900">Guides</a></li>
            <li><a href="#" className="text-gray-500 hover:text-gray-900">API Status</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-700">SOLUTIONS</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="text-gray-500 hover:text-gray-900">Marketing</a></li>
            <li><a href="#" className="text-gray-500 hover:text-gray-900">Analytics</a></li>
            <li><a href="#" className="text-gray-500 hover:text-gray-900">Commerce</a></li>
            <li><a href="#" className="text-gray-500 hover:text-gray-900">Insights</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;