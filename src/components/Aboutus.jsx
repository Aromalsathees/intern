import MissionImg from "../assets/mission.jpeg";
import VisionImg from "../assets/vision.jpeg";
import ValueImg from "../assets/values.jpeg";
import Member1 from "../assets/member1.jpeg";


export default function Aboutus() {
  return (
    <div className="p-4">
      {/* Heading */}
      <div className="flex justify-center lg:ml-60 lg:mt-20">
        <h1 className="text-3xl font-semibold mb-6 text-center text-blue-300">
          About Study Material Hub
        </h1>
      </div>

      {/* Intro Paragraph */}
      <p className="mb-8 text-center font-medium text-gray-700 max-w-xl mx-auto lg:ml-100">
        Study Material Hub provides a centralized platform for accessing various
        study materials across different subjects, courses, and exams.
      </p>

      {/* Mission, Vision, Values Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center lg:ml-70">
        {/* Mission Card */}
        <div className="bg-white border border-gray-400 rounded-2xl p-6 w-72 hover:scale-105 transition-transform duration-300">
          <img
            src={MissionImg}
            alt="Mission Icon"
            className="w-24 h-24 mx-auto mb-4 rounded-full"
          />
          <h2 className="text-xl font-semibold text-center mb-3">Mission</h2>
          <p className="text-center text-gray-600">
            Provide quality resources for learners worldwide, ensuring equal
            opportunities to access academic materials and knowledge.
          </p>
        </div>

        {/* Vision Card */}
        <div className="bg-white border border-gray-400 rounded-2xl p-6 w-72 hover:scale-105 transition-transform duration-300">
          <img
            src={VisionImg}
            alt="Vision Icon"
            className="w-24 h-24 mx-auto mb-4 rounded-full"
          />
          <h2 className="text-xl font-semibold text-center mb-3">Vision</h2>
          <p className="text-center text-gray-600">
            Empower education by building a dynamic, accessible, and innovative
            platform for students across the globe.
          </p>
        </div>

        {/* Values Card */}
        <div className="bg-white border border-gray-400 rounded-2xl p-6 w-72 hover:scale-105 transition-transform duration-300">
          <img
            src={ValueImg}
            alt="Values Icon"
            className="w-24 h-24 mx-auto mb-4 rounded-full"
          />
          <h2 className="text-xl font-semibold text-center mb-3">Values</h2>
          <p className="text-center text-gray-600">
            Driven by Innovation, Inclusivity, and Integrity — we believe
            education should be available, reliable, and transformative for
            everyone.
          </p>
        </div>
      </div>

      {/* Our Team Section */}
      <div className="flex justify-center mt-12 mb-6 lg:ml-60">
        <h1 className="text-3xl font-semibold text-center">Our Team</h1>
      </div>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center lg:ml-60">
        {/* Member 1 */}
        <div className="bg-white shadow-lg rounded-2xl p-6 w-72 hover:scale-105 transition-transform duration-300 text-center">
          <img
            src={Member1}
            alt="Member 1"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h2 className="text-xl font-semibold mb-1">Aromal Satheesh</h2>
          <p className="text-gray-600">Team Leader</p>
        </div>

        {/* Member 2 */}
        <div className="bg-white shadow-lg rounded-2xl p-6 w-72 hover:scale-105 transition-transform duration-300 text-center">
          <img
            src={Member1}
            alt="Member 1"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h2 className="text-xl font-semibold mb-1">Athira Rajan</h2>
          <p className="text-gray-600">Team Member</p>
        </div>

        {/* Member 3 */}
        <div className="bg-white shadow-lg rounded-2xl p-6 w-72 hover:scale-105 transition-transform duration-300 text-center">
          <img
            src={Member1}
            alt="Member 1"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h2 className="text-xl font-semibold mb-1">Vyshagh C</h2>
          <p className="text-gray-600">Team Member</p>
        </div>
      </div>
    </div>
  );
}