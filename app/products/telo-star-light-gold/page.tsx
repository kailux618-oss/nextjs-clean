export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        {/* Title */}
        <h1 className="text-4xl font-bold text-blue-900 mb-2">
          TELO STAR LIGHT GOLD
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Premium Oncology & Antioxidant Beverage
        </p>

        {/* Image + Content */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Side = Text */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Key Benefits</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Enhanced Immune Support</li>
              <li>Powerful Antioxidants</li>
              <li>Oncology Recovery Assistance</li>
              <li>Cellular Protection</li>
            </ul>

            <div className="mt-6 grid grid-cols-2 gap-4 text-blue-700 font-medium">
              <p>✓ Immune Support</p>
              <p>✓ Antioxidant Protection</p>
              <p>✓ Oncology Assistance</p>
              <p>✓ Brain Health</p>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg text-blue-800 font-semibold">
              NO Water → Enhanced Cellular Immunity
            </div>
          </div>

          {/* Right Side = Image */}
          <div className="flex justify-center">
            <img
              src="/250620_01_2.jpg?v=1"
             alt="TELO STAR LIGHT GOLD"
             className="rounded-lg shadow-md w-72"
             />
          </div>
        </div>

        {/* Usage */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-2">Usage</h2>
          <p className="text-gray-700">
            Take 1 vial per day — ideal for oncology patients or immune-compromised.
          </p>
        </div>
      </div>
    </div>
  );
}
