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
    <section id="schedule" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">Global Tour</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-2">2026 Schedule</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            Catch me live in your country. Join my sessions on corporate excellence and psychology.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            {/* Header - Hidden on Mobile */}
            <div className="hidden md:grid grid-cols-3 bg-gray-50/50 p-6 font-bold text-gray-500 uppercase tracking-wider text-xs border-b border-gray-100">
              <div>Timeframe</div>
              <div>Location</div>
              <div className="text-right">Status</div>
            </div>

            <div className="divide-y divide-gray-100">
              {scheduleData.map((item, index) => (
                <div 
                  key={index} 
                  className="group flex flex-col md:grid md:grid-cols-3 p-6 hover:bg-blue-50/50 transition-colors gap-4 md:gap-0 items-center"
                >
                  {/* Timeframe */}
                  <div className="flex items-center gap-3 md:block w-full">
                     <div className="p-2 bg-blue-100 text-blue-600 rounded-lg md:hidden">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                     </div>
                     <span className="text-gray-900 font-semibold text-lg">{item.month}</span>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-4 w-full">
                     <div className="md:hidden p-2 bg-purple-100 text-purple-600 rounded-lg">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                     </div>
                     <div className="flex items-center gap-3 text-gray-700">
                      <img 
                        src={`https://flagcdn.com/w40/${item.flagCode}.png`}
                        srcSet={`https://flagcdn.com/w80/${item.flagCode}.png 2x`}
                        width="32"
                        height="24"
                        alt={item.country}
                        className="rounded shadow-sm object-cover ring-1 ring-gray-200"
                      />
                      <span className="font-bold text-lg text-gray-800">{item.country}</span>
                    </div>
                  </div>

                  {/* Status */}
                  <div className="flex items-center justify-between md:justify-end w-full">
                     <span className="md:hidden text-sm font-bold text-gray-400 uppercase tracking-wider">Status</span>
                     <span className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm ${
                      item.status === 'Upcoming' 
                        ? 'bg-green-100 text-green-700 ring-1 ring-green-200' 
                        : 'bg-blue-50 text-blue-600 ring-1 ring-blue-100'
                    }`}>
                      {item.status === 'Upcoming' && <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>}
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
