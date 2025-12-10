import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import AppleLogo from '../components/AppleLogo';

const { Link } = ReactRouterDOM as any;

const ChooseCountry: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Simple Header for this page */}
      <div className="h-[44px] bg-[#1d1d1f] flex items-center justify-center">
        <Link to="/" aria-label="Apple">
          <AppleLogo className="fill-white h-[44px] w-[14px]" />
        </Link>
      </div>

      <div className="max-w-[980px] mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-semibold mb-12 text-[#1d1d1f]">
          Choose your country or region
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Asia Pacific */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 border-b border-gray-200 pb-4">Asia Pacific</h2>
            <ul className="space-y-3">
              <li>
                <Link to="/vn" className="text-base hover:text-apple-blue hover:underline">
                  Việt Nam
                </Link>
                <span className="text-gray-500 ml-2 text-sm">(Tiếng Việt)</span>
              </li>
              <li>
                <Link to="/" className="text-base hover:text-apple-blue hover:underline">
                    Australia
                </Link>
              </li>
              <li>
                <Link to="/" className="text-base hover:text-apple-blue hover:underline">
                    China mainland
                </Link>
              </li>
              <li>
                <Link to="/" className="text-base hover:text-apple-blue hover:underline">
                    Japan
                </Link>
              </li>
              <li>
                <Link to="/" className="text-base hover:text-apple-blue hover:underline">
                    Korea
                </Link>
              </li>
            </ul>
          </div>

          {/* Middle East */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 border-b border-gray-200 pb-4">Middle East</h2>
            <ul className="space-y-3">
               <li>
                <Link to="/om-ar" className="text-base hover:text-apple-blue hover:underline">
                  عمان
                </Link>
                <span className="text-gray-500 ml-2 text-sm">(Oman)</span>
              </li>
              <li>
                <Link to="/" className="text-base hover:text-apple-blue hover:underline">
                    United Arab Emirates
                </Link>
              </li>
               <li>
                <Link to="/" className="text-base hover:text-apple-blue hover:underline">
                    Saudi Arabia
                </Link>
              </li>
            </ul>
          </div>

          {/* The Americas */}
          <div>
             <h2 className="text-2xl font-semibold mb-6 border-b border-gray-200 pb-4">The Americas</h2>
             <ul className="space-y-3">
              <li>
                <Link to="/" className="text-base hover:text-apple-blue hover:underline">
                  United States
                </Link>
              </li>
              <li>
                <Link to="/" className="text-base hover:text-apple-blue hover:underline">
                  Canada
                </Link>
              </li>
               <li>
                <Link to="/" className="text-base hover:text-apple-blue hover:underline">
                  México
                </Link>
              </li>
             </ul>
          </div>

        </div>
        
        <div className="mt-20 pt-8 border-t border-gray-200 text-sm text-gray-500">
           <p>Copyright © 2024 Apple Inc. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default ChooseCountry;