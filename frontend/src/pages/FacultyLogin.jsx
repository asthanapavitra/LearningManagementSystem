import React, { useContext, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import{Link} from 'react-router-dom'
import { FacultyDataContext } from '../context/FacultyContext';
const FacultyLogin = () => {
  const [facultyId, setfacultyId] = useState("");
    const [password, setPassword] = useState("");
    const { setfaculty } = useContext(FacultyDataContext);
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const res = await axios.post(
          `${import.meta.env.VITE_BASE_URL}/faculty/login`,
          {
           facultyId,
            password,
          }
        );
      
        if (res.status == 201) {
          localStorage.setItem("token",res.data.token);
          setfaculty(res.data.faculty);
          console.log(res.data.faculty);
          navigate("/faculty-dashboard");
        }
      } catch (err) {
        console.log(err.message);
      }
      setfacultyId("");
      setPassword("");
    };
  return (
    <div className="relative h-screen bg-[url('https://d2lk14jtvqry1q.cloudfront.net/media/slider21_139d43fffb.png')] bg-no-repeat bg-[length:100%_100%] md:bg-cover bg-center md:bg-fixed overflow-hidden">
    <div className="min-h-full w-full z-50 bg-black/70">
      <div className="h-screen flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          action=""
          className="bg-white/90 m-4 p-8 flex flex-col justify-center items-center rounded-lg gap-5 w-[80%] sm:w-[50%] md:w-[40%] lg:w-[30%]"
        >
          <div className="flex flex-col justify-center items-center gap-2">
            <h3 className="text-2xl font-bold text-gray-800">Faculty Login</h3>
            
          </div>
          <input
            type="text"
            value={facultyId}
            placeholder="Faculty Id"
            onChange={(e) => setfacultyId(e.target.value)}
            className="bg-emerald-800/10 px-2 py-1 outline-0 border-2 rounded-md border-[#135106] text-sm placeholder:text-emerald-900/50 w-full"
          />
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="bg-emerald-800/10 px-2 py-1 outline-0 border-2 rounded-md border-[#135106] text-sm placeholder:text-emerald-900/50 w-full"
          />
          <button
            type="submit"
            className="bg-[#135106] rounded-3xl text-center py-1 text-white text mt-2 hover:bg-[#22850f] w-[100%]"
          >
            Login
          </button>
          <Link className="text-sm text-blue-800 underline" to="/forgot-password">Forgot Password ?</Link>
        </form>
      </div>
    </div>
  </div>
  )
}

export default FacultyLogin;
