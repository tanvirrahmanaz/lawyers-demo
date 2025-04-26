import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const colors = [
  '#8884d8', '#82ca9d', '#ffc658', '#ff7300', '#ff0000',
  '#00c0ff', '#ff6f61', '#ff00ff', '#006400', '#1e90ff',
  '#f0e68c', '#ff1493'
];

const getPath = (x, y, width, height) =>
  `M${x},${y + height}
   C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2},${y}
   C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width},${y + height}
   Z`;

const TriangleBar = (props) => {
  const { x, y, width, height, index } = props;
  return (
    <path
      d={getPath(x, y, width, height)}
      stroke="none"
      fill={colors[index % colors.length]}
    />
  );
};

const MyAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedAppointments = JSON.parse(localStorage.getItem("appointments")) || [];
    setAppointments(savedAppointments);
    setLoading(false);
  }, []);

  const handleCancel = (appointmentId) => {
    const updatedAppointments = appointments.filter((item) => item.id !== appointmentId);
    setAppointments(updatedAppointments);
    localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
    toast.success("Appointment cancelled successfully.");
  };

  const chartData = appointments.map((appointment, index) => ({
    ...appointment,
    index,
  }));

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-16 h-16 border-4 border-blue-400 border-dashed rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center mb-4">My Appointments</h2>

      {appointments.length === 0 ? (
        <div className="text-center text-xl text-gray-500 mt-10">
          <p className="font-semibold">🕊️ No appointments booked yet.</p>
          <p>Start booking and visualize your lawyer consultation fees here!</p>
          <button
            onClick={() => window.location.href = '/'}
            className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-800 transition"
          >
            Return to Homepage
          </button>
        </div>
      ) : (
        <>
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-center mb-4">Lawyer Appointment Fees</h3>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="fee"
                  shape={(props) => <TriangleBar {...props} index={props.payload.index} />}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div>
            {appointments.map((appointment) => (
              <div key={appointment.id} className="p-4 mb-4 border-b">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="font-semibold">{appointment.name}</p>
                    <p>{appointment.speciality}</p>
                  </div>
                  <p className="font-bold text-lg">Fee: Taka {appointment.fee}</p>
                </div>
                <button
                  onClick={() => handleCancel(appointment.id)}
                  className="text-red-600 border-2 border-red-600 px-4 py-2 rounded-lg hover:bg-red-600 hover:text-white transition w-full"
                >
                  Cancel Appointment
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MyAppointments;
