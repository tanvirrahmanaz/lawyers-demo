import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LawyerDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [lawyer, setLawyer] = useState(null);
  const [isBooked, setIsBooked] = useState(false);
  const [loading, setLoading] = useState(true); // added loading state

  useEffect(() => {
    fetch('/lawyers.json')
      .then((response) => response.json())
      .then((data) => {
        const selectedLawyer = data.find((lawyer) => lawyer.id === parseInt(id));
        setLawyer(selectedLawyer);

        const savedAppointments = JSON.parse(localStorage.getItem("appointments")) || [];
        if (savedAppointments.some((appointment) => appointment.id === parseInt(id))) {
          setIsBooked(true);
        }
        setLoading(false); // loading done after data fetched
      })
      .catch((error) => {
        console.error('Error loading lawyers data:', error);
        setLoading(false);
      });
  }, [id]);

  const handleBooking = () => {
    if (isBooked) {
      toast.warning("You already have an appointment with this lawyer.");
      return;
    }

    const appointment = {
      id: lawyer.id,
      name: lawyer.name,
      speciality: lawyer.speciality,
      fee: lawyer.fee,
      date: new Date().toLocaleDateString(),
    };

    const savedAppointments = JSON.parse(localStorage.getItem("appointments")) || [];
    savedAppointments.push(appointment);
    localStorage.setItem("appointments", JSON.stringify(savedAppointments));

    toast.success(`Appointment with ${lawyer.name} booked successfully.`);
    setIsBooked(true);
    navigate('/my-appointments');
  };

  const handleAlreadyBookedClick = () => {
    if (isBooked) {
      toast.warning("You already have an appointment with this lawyer.");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-16 h-16 border-4 border-blue-400 border-dashed rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!lawyer) {
    return (
      <div className="text-center mt-10">
        <p className="text-lg text-gray-600">Lawyer not found.</p>
      </div>
    );
  }

  return (
    <div className="p-6 mt-2 rounded-b-2xl mx-auto space-y-12 bg-white text-black">
      {/* Lawyer Information Section */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-md space-y-4">
        <h3 className="text-xl font-bold text-center">Lawyer Information</h3>
        <p className="text-sm text-gray-600">
          Our lawyers are highly experienced professionals with extensive backgrounds in various areas of law. They specialize in providing strategic legal solutions to their clients, with a focus on delivering favorable outcomes in complex cases.
        </p>
        <p className="text-sm text-gray-600">
          Our lawyers are dedicated to offering expert legal guidance and are committed to protecting the rights and interests of their clients.
        </p>
      </div>

      {/* Lawyer's Profile Section */}
      <div className="text-center">
        <h2 className="text-3xl font-extrabold mb-4">Lawyer's Profile Details</h2>
        <div className="flex flex-col md:flex-row items-center gap-10">
          <img
            src={`/${lawyer.image}`}
            alt={lawyer.name}
            className="w-48 h-48 rounded-xl object-cover shadow-lg"
          />
          <div className="flex flex-col justify-start">
            <h3 className="text-2xl font-semibold">{lawyer.name}</h3>
            <p className="text-lg text-gray-600">{lawyer.speciality}</p>
            <p className="mt-2 text-sm text-gray-500">Experience: {lawyer.experience} years</p>
            <p className="text-sm text-gray-500">License No: {lawyer.license}</p>
            <p className="mt-2 text-lg font-semibold text-green-600">Consultation Fee: Taka {lawyer.fee}</p>

            <div className="mt-4">
              <h4 className="font-semibold">Availability:</h4>
              <div className="flex gap-2 mt-2 flex-wrap">
                {lawyer.availableDays.map((day) => (
                  <span key={day} className="badge badge-info text-xs bg-blue-100 px-2 py-1 rounded">
                    {day}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Book an Appointment Section */}
      <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
        <h3 className="text-xl font-bold">Book an Appointment</h3>
        <p className="text-sm text-orange-500">
          Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.
        </p>

        <div className="flex justify-between items-center mb-4">
          <p className="font-semibold">Availability:</p>
          <p className="text-green-600">Lawyer Available Today</p>
        </div>

        {isBooked ? (
          <button
            className="w-full py-2 text-white bg-green-500 hover:bg-green-700 rounded-full"
            onClick={handleAlreadyBookedClick}
          >
            Already Booked
          </button>
        ) : (
          <button
            className="w-full py-2 text-white bg-blue-600 hover:bg-blue-800 rounded-full"
            onClick={handleBooking}
          >
            Book Appointment Now
          </button>
        )}
      </div>
    </div>
  );
};

export default LawyerDetails;
