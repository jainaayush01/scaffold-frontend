const Home = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        Welcome to Your React App
      </h1>
      <div className="prose">
        <p className="text-gray-600 mb-4">
          This is a modern React application built with:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>React 18 with TypeScript</li>
          <li>Vite for fast development</li>
          <li>Tailwind CSS for styling</li>
          <li>Recoil for state management</li>
          <li>React Query for server state</li>
          <li>React Router v6 for routing</li>
          <li>Zod for validation</li>
          <li>Axios for API calls</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;