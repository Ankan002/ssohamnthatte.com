import React from 'react';

const PortfolioLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 p-8 relative">
      {/* Container with specific positioning */}
      <div className="relative w-full h-screen">
        {/* TOP LEFT - UNAGI Card */}
        <div className="absolute top-0 left-0 w-[350px] h-[280px] bg-gradient-to-br from-orange-600 to-orange-800 rounded-2xl flex flex-col items-center justify-center">
          <div className="w-24 h-24 bg-orange-400 rounded-full flex items-center justify-center mb-4">
            <span className="text-2xl">🧠</span>
          </div>
          <h1 className="text-white text-5xl font-bold tracking-wider">UNAGI</h1>
        </div>

        {/* BELOW UNAGI - Design Thinking */}
        <div className="absolute top-[300px] left-0 w-[350px] h-[120px] bg-slate-800 rounded-2xl p-6 border border-slate-700">
          <div className="flex items-center mb-3">
            <span className="text-green-400 text-2xl mr-3">+</span>
            <h3 className="text-white text-xl font-semibold">Design Thinking</h3>
          </div>
          <p className="text-slate-400 text-sm">Empathize, Define, Ideate, Prototype and Test</p>
        </div>

        {/* TOP CENTER - UX Research */}
        <div className="absolute top-0 left-[400px] w-[400px] h-[160px] bg-slate-800 rounded-2xl p-6 border border-slate-700">
          <div className="flex items-center mb-3">
            <span className="text-green-400 text-2xl mr-3">+</span>
            <h3 className="text-white text-xl font-semibold">UX Research</h3>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            Unveiling Insights through UX Research, bridging user desires with digital excellence.
          </p>
        </div>

        {/* BOTTOM LEFT - Visual Design with Browser */}
        <div className="absolute bottom-0 left-0 w-[500px] h-[350px] bg-slate-800 rounded-2xl p-6 border border-slate-700">
          <div className="flex items-center mb-3">
            <span className="text-green-400 text-2xl mr-3">+</span>
            <h3 className="text-white text-xl font-semibold">Visual Design</h3>
          </div>
          <p className="text-slate-400 text-sm mb-6">Impactful, Aesthetic, Visual Storytelling</p>
          <div className="bg-slate-700 rounded-lg overflow-hidden h-[220px] transform -rotate-2 hover:rotate-0 transition-transform duration-300">
            <div className="bg-slate-600 h-8 flex items-center px-3 space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div className="ml-4 text-xs text-slate-300 bg-slate-500 px-2 py-1 rounded text-center flex-1">
                Some portfolio
              </div>
            </div>
            <div className="bg-white h-full p-4">
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-4 h-4 bg-blue-500 rounded"></div>
                <span className="text-xs text-slate-600 font-medium">Some portfolio</span>
              </div>
              <div className="ml-6">
                <div className="text-xs text-slate-800 font-medium mb-2">Links</div>
                <div className="space-y-1 text-xs text-slate-600">
                  <div className="flex items-center space-x-2"><span>→</span><span>Navigation</span></div>
                  <div className="flex items-center space-x-2"><span>→</span><span>Page 1</span></div>
                  <div className="flex items-center space-x-2"><span>→</span><span>Page 2</span></div>
                  <div className="flex items-center space-x-2"><span>→</span><span>Page 3</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TOP RIGHT - Primary Research */}
        <div className="absolute top-0 right-[180px] w-[140px] h-[140px] bg-slate-700 rounded-2xl p-4 border border-slate-600">
          <div className="text-center h-full flex flex-col items-center justify-center">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-3">
              <span className="text-white text-lg">👥</span>
            </div>
            <div className="text-white text-xs font-medium text-center">Primary Research</div>
          </div>
        </div>

        {/* TOP RIGHT CORNER - User Testing */}
        <div className="absolute top-0 right-0 w-[140px] h-[200px] bg-slate-700 rounded-2xl p-4 border border-slate-600">
          <div className="text-center h-full flex flex-col items-center justify-center">
            <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-3">
              <span className="text-white text-lg">📱</span>
            </div>
            <div className="text-white text-xs font-medium text-center">User Testing</div>
          </div>
        </div>

        {/* MIDDLE RIGHT - Secondary Research */}
        <div className="absolute top-[160px] right-[180px] w-[140px] h-[140px] bg-slate-700 rounded-2xl p-4 border border-slate-600">
          <div className="text-center h-full flex flex-col items-center justify-center">
            <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center mb-3">
              <span className="text-white text-lg">🔍</span>
            </div>
            <div className="text-white text-xs font-medium text-center">Secondary Research</div>
          </div>
        </div>

        {/* MIDDLE RIGHT CORNER - Affinity Mapping */}
        <div className="absolute top-[160px] right-0 w-[140px] h-[140px] bg-slate-700 rounded-2xl p-4 border border-slate-600">
          <div className="text-center h-full flex flex-col items-center justify-center">
            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-3">
              <span className="text-white text-lg">🗺️</span>
            </div>
            <div className="text-white text-xs font-medium text-center">Affinity Mapping</div>
          </div>
        </div>

        {/* BOTTOM RIGHT - Large Device Mockup */}
        <div className="absolute bottom-[180px] right-0 w-[200px] h-[280px] bg-gradient-to-b from-slate-600 to-slate-800 rounded-3xl p-3 border border-slate-600">
          <div className="w-full h-full bg-slate-900 rounded-2xl flex items-center justify-center">
            <div className="text-slate-400 text-sm">Device Mockup</div>
          </div>
        </div>

        {/* BOTTOM RIGHT - Connection Lines and Prototyping */}
        <div className="absolute bottom-0 right-0 w-[400px] h-[160px]">
          <svg className="absolute top-0 left-0 w-full h-20" viewBox="0 0 400 80">
            <line x1="0" y1="20" x2="300" y2="20" stroke="#22c55e" strokeWidth="2"/>
            <circle cx="80" cy="20" r="4" fill="#22c55e"/>
            <circle cx="200" cy="20" r="4" fill="#22c55e"/>
            <line x1="20" y1="50" x2="350" y2="50" stroke="#22c55e" strokeWidth="2"/>
            <circle cx="120" cy="50" r="4" fill="#22c55e"/>
            <circle cx="280" cy="50" r="4" fill="#22c55e"/>
            <path d="M320 15 L335 35 L328 35 L328 45 L320 15" fill="#22c55e"/>
          </svg>
          <div className="absolute bottom-0 left-0 w-[350px] h-[100px] bg-slate-800 rounded-2xl p-6 border border-slate-700">
            <div className="flex items-center mb-2">
              <span className="text-green-400 text-2xl mr-3">+</span>
              <h3 className="text-white text-xl font-semibold">Prototyping</h3>
            </div>
            <p className="text-slate-400 text-sm">Turning Ideas into Interactive Prototypes that Spark User Love</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioLayout;











