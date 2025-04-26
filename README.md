📚 Lawyer Appointment Booking Web Application
A simple, clean, and fully functional Lawyer Appointment Booking application built with React, Vite, Tailwind CSS, and deployed on Netlify.

🔗 Live Website: <a href="https://glittering-pegasus-404c8b.netlify.app/">Visit Now </a>
🚀 Features
🧭 Navbar and Footer present on all pages (except 404 page)

🎯 Homepage with:

Hero Banner

Display 6 Lawyers initially

"Show All" button to load 12 Lawyers

Success Stats Section with animated counters

⚖️ Lawyers Section

Each Lawyer card shows Name, Image, Experience, License Number, Speciality

View Details button to see full profile

👨‍⚖️ Lawyer Details Page

Profile Details including Availability

Booking Card with Booking Logic (localStorage-based)

🧾 Booking System

Book appointment (with success toast)

Prevent duplicate booking

Cancel appointment (with success toast)

Appointments persist after reload (localStorage)

📅 Bookings Page

List of booked appointments

Fee visualization using Recharts

Cancel button removes booking and updates chart

📚 Blogs Page

5 blog articles about core React concepts (useState, useEffect, custom hook, controlled vs uncontrolled components, useFormStatus)

❌ 404 Error Page

Custom error page on invalid routes

Navbar present, Footer hidden

🔄 Loading Animations

Loading spinner on route changes and data fetches

🌍 Single Page Application (SPA)

Client-side routing handled using React Router

SPA fallback (_redirects file used)

🛠️ Tech Stack
React (with Hooks and Functional Components)

React Router DOM (for routing)

Vite (for fast bundling)

Tailwind CSS (for responsive, utility-first styling)

Recharts (for Appointment Fees BarChart)

React Toastify (for success and error notifications)

React CountUp (for counting animations)

LocalStorage (to save appointments data)

Netlify (for live deployment)

📂 Folder Structure Overview
plaintext
Copy
Edit
/src
  /assets        # Static images, logos
  /components    # Navbar, Footer, Spinner Loader etc
  /pages         # Home, Blogs, MyAppointments, LawyerDetails, ErrorPage
/public
  lawyers.json   # Static lawyer data
  CNAME          # (optional if using custom domain)


🧡 Thank you for visiting!
Built with passion for learning and improving React skills.
