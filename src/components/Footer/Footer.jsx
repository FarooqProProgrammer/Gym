import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-sm">Copyright © {new Date().getFullYear()} My App</div>
          <div className="flex">
            <a href="#" className="text-white mr-4">Terms</a>
            <a href="#" className="text-white">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
