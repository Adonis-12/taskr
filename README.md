# TASKR (A HELPER FINDER APP)
📌 Project Overview
A taskr web application built with:

Frontend: React + Vite

Routing: React Router

Styling: Tailwind CSS

API: JSONPlaceholder (mock data) , Robohash 

Live Demo: Deployed Link (Add your deployment link here)

#🚀 Features
✅ Landing Page - Introduction to the app
✅ Find Helper - Displays a list of helpers fetched from an API
✅ Navigation - Smooth scrolling between sections
✅ Authentication Pages - Login & Signup (UI only)

#🛠️ Installation & Setup
1. Clone the Repository
bash
git clone https://github.com/Adonis-12/taskr.git
cd helper-finder
2. Install Dependencies
bash
npm install
3. Run the Development Server
bash
npm run dev
Open http://localhost:3000 in your browser.

#4. Build for Production
bash
npm run build


#📂 Project Structure
src/
├── components/
│   ├── navigation/       # Navigation bar
│   ├── landingPage/      # Hero section
│   ├── findHelper/       # Helper listing
│   ├── footer/           # Footer
│   ├── login/            # Login page
│   └── signup/           # Signup page   
├── App.jsx               # Main app & router setup
├── main.jsx              # Vite entry point
└── styles/               # Global CSS (if any)


#🔧 Key Code Implementation
1. Data Fetching (API)
Fetches mock users from JSONPlaceholder

Handles loading & error states

#jsx
// Inside Home.jsx
useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((data) => setUsers(data))
    .catch((err) => setError(err));
}, []);


#2. Smooth Scrolling (react-scroll)
Navigation links scroll to sections smoothly

jsx
<Link to="findhelper-section" smooth={true} duration={500}>
  Find Helper
</Link>


#3. Routing (React Router)
Handles /, /login, /signup routes

jsx
const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/signup", element: <SignupPage /> }
]);


#🔗 Dependencies
Package	Usage
react	Core library
react-router-dom	Routing
react-scroll	Smooth scrolling
tailwindcss	Styling
vite	Build tool
📝 How to Contribute
Fork the repository

Create a new branch (git checkout -b feature/new-feature)

Commit changes (git commit -m "Add new feature")

Push to the branch (git push origin feature/new-feature)

Open a Pull Request

#📜 License
MIT License - Free to use and modify.

📬 Contact
Mayank Banga- mayankbanga84@gmail.com



