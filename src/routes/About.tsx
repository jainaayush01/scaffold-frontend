const About = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">About</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-gray-600 mb-4">
          This is a modern React frontend application template with all the essential tools and
          libraries pre-configured.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Features
        </h2>
        <div className="space-y-3">
          <div className="p-4 bg-gray-50 rounded">
            <h3 className="font-semibold text-gray-800 mb-1">
              Type Safety
            </h3>
            <p className="text-gray-600">
              Full TypeScript support with strict mode enabled
            </p>
          </div>
          <div className="p-4 bg-gray-50 rounded">
            <h3 className="font-semibold text-gray-800 mb-1">
              Modern Tooling
            </h3>
            <p className="text-gray-600">
              Vite for lightning-fast development and building
            </p>
          </div>
          <div className="p-4 bg-gray-50 rounded">
            <h3 className="font-semibold text-gray-800 mb-1">
              State Management
            </h3>
            <p className="text-gray-600">
              Recoil for client state and React Query for server state
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;