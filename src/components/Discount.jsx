import React from 'react';
import { Sparkles, Users, Star, Zap, Award, CheckCircle2, Gift } from 'lucide-react';

const Discount = () => {
  const discounts = [
    { text: "On Annual payment you save 20%", icon: <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /> },
    { text: "On Six months payment you save 10%", icon: <Zap className="w-5 h-5 text-blue-600" /> },
    { text: "On Quarterly Payment you save 5%", icon: <Sparkles className="w-5 h-5 text-purple-600" /> },
  ];

  const referrals = [
    { text: "On one student referral you get 15% discount", icon: <CheckCircle2 className="w-6 h-6 text-blue-600" /> },
    { text: "On two students referral you get 25% discount", icon: <Award className="w-6 h-6 text-purple-600" /> },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-10 items-stretch">
        
        {/* --- DISCOUNT POLICY CARD --- */}
        <div className="group relative overflow-hidden rounded-3xl bg-white p-1 transition-all duration-500 hover:shadow-2xl">
          {/* Theme Gradient Border Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700 opacity-10 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative h-full bg-white rounded-[1.4rem] p-8 md:p-10 flex flex-col">
            <div className="flex items-center gap-5 mb-8">
              <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-700 text-white shadow-lg transform group-hover:rotate-6 transition-transform duration-500">
                <Gift className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 tracking-tight">Discount Policy</h3>
                <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-purple-700 mt-1" />
              </div>
            </div>

            <div className="space-y-6 flex-grow">
              {discounts.map((item, index) => (
                <div key={index} className="flex items-center gap-4 group/item">
                  <div className="flex-shrink-0 transform group-hover/item:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-gray-700 font-bold text-lg">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-6 border-t border-gray-100 italic text-sm text-gray-400">
              * Savings are automatically applied to your selected plan.
            </div>
          </div>
        </div>

        {/* --- REFERRAL PROGRAM CARD --- */}
        <div className="group relative overflow-hidden rounded-3xl bg-white p-1 transition-all duration-500 hover:shadow-2xl">
          {/* Theme Gradient Border Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-700 to-blue-600 opacity-10 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative h-full bg-white rounded-[1.4rem] p-8 md:p-10 flex flex-col">
            <div className="flex items-center gap-5 mb-6">
              <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-white border-2 border-blue-600 text-blue-600 shadow-md group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                <Users className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 tracking-tight">Referral Program</h3>
                <div className="w-12 h-1 bg-gradient-to-r from-purple-700 to-blue-600 mt-1" />
              </div>
            </div>

            <p className="text-gray-600 mb-8 leading-relaxed font-medium">
              Quran Sabaq offers attractive referral discounts. Join our mission to spread Quranic knowledge and enjoy exclusive benefits.
            </p>

            <div className="space-y-4">
              {referrals.map((item, index) => (
                <div key={index} className="flex items-center gap-4 p-5 rounded-2xl bg-gray-50 border border-transparent group-hover:border-blue-100 group-hover:bg-white transition-all duration-300 shadow-sm">
                  <div className="flex-shrink-0">
                    {item.icon}
                  </div>
                  <span className="text-gray-800 font-extrabold text-lg">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Discount;