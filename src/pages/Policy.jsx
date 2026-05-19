export default function Policy() {
  return (
    <div className="min-h-screen bg-gray-50/50 flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full bg-white rounded-3xl border border-gray-100 shadow-md p-8 sm:p-12">
        
        {/* Header Title */}
        <div className="mb-8 text-center sm:text-left">
          <h1 className="text-4xl font-extrabold text-gray-950 tracking-tight">
            Privacy & <span className="text-red-500">Policy</span>
          </h1>
        </div>

        {/* Policy Items List */}
        <div className="space-y-4 mb-10">
          
          <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200">
            <span className="flex-shrink-0 text-emerald-500 bg-emerald-50 w-6 h-6 rounded-full flex items-center justify-center text-xs">
              <i className="fa-solid fa-check"></i>
            </span>
            <p className="text-gray-600 font-medium">This application is a strictly non-commercial, educational open-source project.</p>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200">
            <span className="flex-shrink-0 text-emerald-500 bg-emerald-50 w-6 h-6 rounded-full flex items-center justify-center text-xs">
              <i className="fa-solid fa-check"></i>
            </span>
            <p className="text-gray-600 font-medium">Recipe data is retrieved dynamically via a third-party API and may vary or change without notice.</p>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200">
            <span className="flex-shrink-0 text-emerald-500 bg-emerald-50 w-6 h-6 rounded-full flex items-center justify-center text-xs">
              <i className="fa-solid fa-check"></i>
            </span>
            <p className="text-gray-600 font-medium">We respect privacy. Absolutely no user accounts, tracking cookies, or personal data are stored.</p>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200">
            <span className="flex-shrink-0 text-emerald-500 bg-emerald-50 w-6 h-6 rounded-full flex items-center justify-center text-xs">
              <i className="fa-solid fa-check"></i>
            </span>
            <p className="text-gray-600 font-medium">Usage is strictly limited to portfolio exhibition, personal learning, and demonstration purposes.</p>
          </div>

        </div>

        {/* Alert Footer Box */}
        <div className="p-5 bg-red-50/50 rounded-2xl border border-red-100 flex items-start gap-4">
          <span className="text-xl text-red-500 mt-0.5">
            <i className="fa-solid fa-lightbulb"></i>
          </span>
          <p className="text-sm font-medium text-red-800 leading-relaxed">
            By interacting with this project, you automatically acknowledge and agree that it is designed solely for educational use.
          </p>
        </div>

      </div>
    </div>
  );
}
