export default function Resume() {
  return (
    <div className="min-h-screen bg-gray-100 text-black p-6 flex justify-center">
      <div className="bg-white w-full max-w-5xl rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-3">
        {/* Sidebar */}
        <div className="bg-gray-800 text-white p-6 md:col-span-1">
          <div className="flex flex-col items-center">
            <div>
              <img
                src="images/sky.jpg"
                alt=""
                className="bg-red-700 rounded-full object-fit"
                width={150}
              />
            </div>
            <h1 className="text-3xl font-bold text-center">Amit Jalal</h1>
            <p className="text-gray-300 text-center mt-1">
              amitjalal93@email.com
              <br />
              +91 9720681376
            </p>
          </div>

          <h2 className="text-xl font-semibold mt-8 mb-2">Social Links</h2>
          <ul className="space-y-2">
            <li className="hover:text-blue-300 cursor-pointer">LinkedIn</li>
            <li className="hover:text-blue-300 cursor-pointer">GitHub</li>
            <li className="hover:text-blue-300 cursor-pointer">Portfolio</li>
          </ul>

          <button className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg">
            Download Resume
          </button>
        </div>

        {/* Main Content */}
        <main className="md:col-span-2 p-6">
          {/* Career Objective */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold border-b pb-2 mb-3">
              Career Objective
            </h2>
            <p className="text-gray-700">Write your career objective here...</p>
          </section>

          {/* Education */}
          <EducationComponent />

          {/* Skills with Progress Bars */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold border-b pb-2 mb-3">Skills</h2>

            <div>
              <p>HTML/CSS</p>
              <div className="bg-gray-200 h-3 rounded-lg">
                <div className="bg-blue-600 h-3 w-full rounded-lg"></div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <p>Tailwind CSS</p>
                <div className="bg-gray-200 h-3 rounded-lg">
                  <div className="bg-blue-600 h-3 w-full rounded-lg"></div>
                </div>
              </div>
              <div>
                <p>JavaScript</p>
                <div className="bg-gray-200 h-3 rounded-lg">
                  <div className="bg-blue-600 h-3 w-[90%] rounded-lg"></div>
                </div>
              </div>

              <div>
                <p>React</p>
                <div className="bg-gray-200 h-3 rounded-lg">
                  <div className="bg-blue-600 h-3 w-[85%] rounded-lg"></div>
                </div>
              </div>
              <div>
                <p>Next.js</p>
                <div className="bg-gray-200 h-3 rounded-lg">
                  <div className="bg-blue-600 h-3 w-[70%] rounded-lg"></div>
                </div>
              </div>
            </div>
          </section>

          {/* Experience Cards
          <section className="mb-8">
            <h2 className="text-2xl font-bold border-b pb-2 mb-3">
              Experience
            </h2>

            <div className="space-y-4">
              <div className="border p-4 rounded-xl shadow hover:shadow-md transition">
                <h3 className="font-bold text-xl">Job Title — Company Name</h3>
                <p className="text-gray-500">Year – Year</p>
                <ul className="list-disc ml-6 mt-2 text-gray-700">
                  <li>Work responsibility 1</li>
                  <li>Work responsibility 2</li>
                </ul>
              </div>
            </div>
          </section> */}

          {/* Projects Grid */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold border-b pb-2 mb-3">Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border p-4 rounded-xl shadow hover:shadow-md transition">
                <h3 className="font-semibold text-lg">Project Title 1</h3>
                <p className="text-gray-700 mt-1">Describe your project...</p>
              </div>

              <div className="border p-4 rounded-xl shadow hover:shadow-md transition">
                <h3 className="font-semibold text-lg">Project Title 2</h3>
                <p className="text-gray-700 mt-1">Describe your project...</p>
              </div>
            </div>
          </section>

          {/* Personal Details */}
          <section>
            <h2 className="text-2xl font-bold border-b pb-2 mb-3">
              Personal Details
            </h2>

            <ul className="space-y-1 text-gray-700">
              <li>Date of Birth: 01/04/2006</li>
              <li>Address: Your Address</li>
              <li>Languages: Hindi, English</li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
}

export const EducationComponent = () => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold border-b pb-2 mb-3">Education</h2>
      <ul className="space-y-2 text-gray-700">
        <li>
          <b>Degree / Course</b> — No
        </li>
        <li>
          <b>12th Class</b> — GIC Kunelakhet (2025)
        </li>
        <li>
          <b>10th Class</b> — GIC Kunelakhet (2020)
        </li>
      </ul>
    </section>
  );
};
