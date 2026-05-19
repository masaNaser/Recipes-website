export default function About() {
  return (
    <div className="min-h-screen bg-gray-50/50 flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full bg-white rounded-3xl border border-gray-100 shadow-md p-8 sm:p-12 transition-all duration-300">
        
        {/* Header Title */}
        <div className="mb-10 text-center sm:text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-950 tracking-tight">
            About <span className="text-red-500">Us</span>
          </h1>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-12 text-center sm:text-left">
          This project is a premium recipe browsing application built using <span className="font-semibold text-gray-900">React</span> and a high-performance public API. 
          It beautifully demonstrates Modern SPA architecture, seamless API integration, and fully reusable components.
        </p>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="group p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-red-100 hover:-translate-y-1 transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-red-500 mb-4 group-hover:bg-red-500 group-hover:text-white transition-colors duration-300">
              <i className="fa-solid fa-bolt text-lg"></i>
            </div>
            <h3 className="font-bold text-gray-950 mb-2 text-lg">SPA Structure</h3>
            <p className="text-sm text-gray-500 leading-relaxed">Fast navigation and instant transitions without page reloads.</p>
          </div>

          {/* Card 2 */}
          <div className="group p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-red-100 hover:-translate-y-1 transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-red-500 mb-4 group-hover:bg-red-500 group-hover:text-white transition-colors duration-300">
              <i className="fa-solid fa-globe text-lg"></i>
            </div>
            <h3 className="font-bold text-gray-950 mb-2 text-lg">API Driven</h3>
            <p className="text-sm text-gray-500 leading-relaxed">Dynamic, real-time data fetched directly from external services.</p>
          </div>

          {/* Card 3 */}
          <div className="group p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-red-100 hover:-translate-y-1 transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-red-500 mb-4 group-hover:bg-red-500 group-hover:text-white transition-colors duration-300">
              <i className="fa-solid fa-cubes text-lg"></i>
            </div>
            <h3 className="font-bold text-gray-950 mb-2 text-lg">Reusable UI</h3>
            <p className="text-sm text-gray-500 leading-relaxed">Highly scalable and clean components built for future growth.</p>
          </div>

        </div>

      </div>
    </div>
  );
}
