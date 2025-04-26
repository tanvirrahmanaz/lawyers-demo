import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import banner from "../assets/banner-img-1.png";
import SuccessSection from '../components/SuccessSection';

const Home = () => {
  const [lawyers, setLawyers] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("/lawyers.json")
      .then((res) => res.json())
      .then((data) => setLawyers(data));
  }, []);

  const displayedLawyers = showAll ? lawyers : lawyers.slice(0, 6);

  return (
    <div className="mt-2">
      {/* Hero Section */}
      <div
        className="w-full h-[500px] rounded-2xl flex items-center justify-center text-white text-center"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="bg-opacity-60 w-full h-full flex flex-col justify-center items-center p-4 rounded-2xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 max-w-4xl">
            It avoids subjective claims or exaggeration that might raise red flags legally
          </h1>
          <p className="max-w-2xl text-sm md:text-base">
            Our platform connects you with verified, experienced lawyers across various specialties — all at your convenience.
          </p>
        </div>
      </div>

      {/* All Lawyers Section */}
<div className="my-10 px-4 md:px-10 bg-gray-100 py-10 rounded-xl">
  <h2 className="text-3xl font-bold text-center mb-2 text-black">Our Best Lawyers</h2>
  <p className="text-center mb-6 text-gray-700">
    Connect with lawyers by specialty, experience, and availability.
  </p>

  <div className="grid md:grid-cols-2 gap-6">
    {displayedLawyers.map((lawyer) => (
      <div
        key={lawyer.id}
        className="bg-white text-black rounded-xl p-4 shadow-md flex gap-4 items-center"
      >
        <img
          src={lawyer.image}
          alt="lawyer"
          className="w-24 h-24 rounded-xl object-cover"
        />
        <div>
          <div className="flex gap-2 mb-1">
            <span className="badge badge-success">Available</span>
            <span className="badge badge-info">{lawyer.experience}+ Years</span>
          </div>
          <h3 className="text-xl font-bold">{lawyer.name}</h3>
          <p>{lawyer.speciality}</p>
          <p>📄 License: {lawyer.license}</p>
          <Link to={`/lawyer/${lawyer.id}`}>
            <button className="mt-2 btn btn-outline btn-info btn-sm">View Details</button>
          </Link>

        </div>
      </div>
    ))}
  </div>

  {!showAll && lawyers.length > 6 && (
    <div className="text-center mt-8">
      <button
        onClick={() => setShowAll(true)}
        className="btn btn-success rounded-full px-6"
      >
        Show All Lawyer
      </button>
    </div>
  )}
</div>
<SuccessSection />
    </div>
    
    
  );
};

export default Home;
