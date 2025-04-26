import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true); // added loading state

  useEffect(() => {
    const savedAppointments = JSON.parse(localStorage.getItem("appointments")) || [];
    setAppointments(savedAppointments);
    setLoading(false); // loading complete
  }, []);

  const handleCancel = (appointmentId) => {
    const updatedAppointments = appointments.filter(item => item.id !== appointmentId);
    setAppointments(updatedAppointments);
    localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
    toast.success("Appointment cancelled successfully.");
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-4">My Appointments</h2>
      <div>
        {appointments.map((appointment) => (
          <div key={appointment.id} className="flex justify-between items-center p-4 mb-4">
            <div>
              <p>{appointment.name}</p>
              <p>{appointment.speciality}</p>
              <p>Fee: Taka {appointment.fee}</p>
            </div>
            <button onClick={() => handleCancel(appointment.id)} className="btn btn-danger">
              Cancel Appointment
            </button>
            <Link to={`/lawyer/${appointment.id}`}>
              <button className="btn btn-info">View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointments;
