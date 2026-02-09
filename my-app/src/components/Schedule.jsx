import React from 'react';

const Schedule = () => {
  const scheduleData = [
    { month: 'April - May', country: 'Kuwait', flagCode: 'kw', status: 'Upcoming' },
    { month: 'June - July', country: 'Oman', flagCode: 'om', status: 'Planning' },
    { month: 'August - September', country: 'Qatar', flagCode: 'qa', status: 'Planning' },
    { month: 'October - November', country: 'Dubai', flagCode: 'ae', status: 'Planning' },
    { month: 'December', country: 'Saudi Arabia', flagCode: 'sa', status: 'Planning' },
  ];

  return (
    <section id="schedule" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold tracking-wide uppercase">Global Tour</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2">2026 Schedule</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Catch me live in your country. Join my sessions on corporate excellence and psychology.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            {/* Header - Hidden on Mobile */}
            <div className="hidden md:grid grid-cols-3 bg-gray-50 p-4 font-bold text-gray-700 border-b border-gray-200 uppercase tracking-wider text-sm">
              <div>Timeframe</div>
              <div>Location</div>
              <div className="text-right">Status</div>
            </div>

            {scheduleData.map((item, index) => (
              <div 
                key={index} 
                className="group flex flex-col md:grid md:grid-cols-3 p-6 border-b border-gray-100 last:border-0 hover:bg-blue-50 transition-colors gap-4 md:gap-0"
              >
                {/* Timeframe */}
                <div className="flex items-center gap-2 md:block">
                   <span className="md:hidden text-xs font-bold text-gray-400 uppercase w-24">Timeframe:</span>
                   <span className="text-gray-900 font-medium text-lg md:text-base">{item.month}</span>
                </div>

                {/* Location */}
                <div className="flex items-center gap-2">
                   <span className="md:hidden text-xs font-bold text-gray-400 uppercase w-24">Location:</span>
                   <div className="flex items-center gap-3 text-gray-700">
                    <img 
                      src={`https://flagcdn.com/w40/${item.flagCode}.png`}
                      srcSet={`https://flagcdn.com/w80/${item.flagCode}.png 2x`}
                      width="28"
                      height="21"
                      alt={item.country}
                      className="rounded-sm shadow-sm object-cover"
                    />
                    <span className="font-bold md:font-medium text-lg md:text-base">{item.country}</span>
                  </div>
                </div>

                {/* Status */}
                <div className="flex items-center gap-2 md:justify-end">
                   <span className="md:hidden text-xs font-bold text-gray-400 uppercase w-24">Status:</span>
                   <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                    item.status === 'Upcoming' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
