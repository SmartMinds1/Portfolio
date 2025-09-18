import React from "react";

const BusinessCard = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10 justify-center items-center py-20">
      {/* Front Side */}
      <div className="w-[350px] h-[200px] bg-[aliceblue] rounded-2xl shadow-lg p-6 flex flex-col justify-between">
        {/* Logo + Brand Name */}
        <div>
          <div className="w-fit">
            {/* Add Logo Here */}
            <div className="w-40 flex-row-end justify-start">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[url('/bigStarBlack.png')] bg-contain bg-no-repeat bg-center rotate-270"></div>
                <p className="text-primary text-xl sm:text-2xl font-extrabold">bizN<span className="text-accent text-xl sm:text-2xl font-light">utritia</span></p>
            </div>
          </div>
          <br />
          <p className="text-sm text-gray-500">Full Stack Dev & Google Ads Expert</p>

        </div>

        {/* Tagline */}
        <div>
          <p className="text-sm text-gray-600 italic">
            Helping businesses grow online with smart code & ads
          </p>
        </div>
      </div>

      {/* Back Side */}
      <div className="w-[350px] h-[200px] bg-blue-600 rounded-2xl shadow-lg p-6 flex flex-col justify-between text-white">
        {/* Contact Info */}
        <div className="space-y-2 text-sm">
          <p className="font-semibold text-lg">Contact</p>
          <p>📞 +254 700 123 456</p>
          <p>📧 hello@yourbrand.com</p>
          <p>🌍 www.yourbrand.com</p>
        </div>

        {/* QR Code / Extra */}
        <div className="flex justify-end">
          <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
            {/* Add QR Code or Social Icon */}
            <span className="text-gray-600 text-xs">QR</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinessCard
