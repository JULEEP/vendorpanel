import { RadialBarChart, RadialBar, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';  

import { useState } from "react";

const Dashboard = () => {
  const [timeframe, setTimeframe] = useState("Yearly");
    const data = [
        { name: 'Finance', present: 0, absent: 0, leave: 0 },
        { name: 'Safety, Security', present: 0, absent: 0, leave: 0 },
        { name: 'S. Engineer', present: 0, absent: 0, leave: 0 },
        { name: 'Restaurants', present: 30, absent: 70, leave: 0 },
        { name: 'Electrical', present: 14, absent: 86, leave: 0 }
      ];
      const dataForCircular = [
        {
          name: "Loan Amount",
          value: 70, // Adjust percentage here
          fill: "#EAEAEA", // Change color if needed
        },
      ];
      const dataForBar = [
        { name: "Jan", value: 0 },
        { name: "Feb", value: 3, category: "ABC" },
        { name: "Mar", value: 0 },
        { name: "Apr", value: 0 },
        { name: "May", value: 0 },
        { name: "Jun", value: 0 },
        { name: "Jul", value: 0 },
        { name: "Aug", value: 0 },
        { name: "Sep", value: 0 },
        { name: "Oct", value: 0 },
        { name: "Nov", value: 0 },
        { name: "Dec", value: 0 },
      ];
      const COLORS = {
        ABC: "#FFCC00",
      };

      const notices = [
        { title: "bgvjhgc", subtitle: "bhubh", date: "31-Jan-25" },
        { title: "dededed", subtitle: "Policy", date: "16-Jan-25" },
        { title: "fasdf", subtitle: "dfgds", date: "23-Jan-25" },
      ];
      const awards = [
        { id: 1, name: "Amy Aphrodite Zamora Peck", department: "Production", award: "First Team", date: "18-02-2025", img: "https://hrm.bdtask-demoserver.com/assets/user-1.png" },
        { id: 2, name: "Maisha Lucy Zamora Gonzales", department: "", award: "Team Son", date: "17-02-2025", img: "https://hrm.bdtask-demoserver.com/assets/user-1.png" },
        { id: 3, name: "Maisha Lucy Zamora Gonzales", department: "", award: "Team Son", date: "17-02-2025", img: "https://hrm.bdtask-demoserver.com/assets/user-1.png" },
        { id: 4, name: "Amy Aphrodite Zamora Peck", department: "Production", award: "Stupid", date: "12-02-2025", img: "https://hrm.bdtask-demoserver.com/assets/user-1.png" },
        { id: 5, name: "Amy Aphrodite Zamora Peck", department: "Production", award: "fool", date: "12-02-2025", img: "https://hrm.bdtask-demoserver.com/assets/user-1.png" }
      ];
    
    // md:flex md:flex-col md:w-[100%] md:justify-between md:items-center space-y-4 w-[78vw]
      return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6 bg-gray-100">
      {/* Stats Section */}
      <div className="md:col-span-1 p-3 space-y-4 ">

        <div className="p-6 bg-white md:min-w-[90%] shadow rounded-lg text-center flex items-center gap-5 justify-between">
            <div className='flex flex-col items-start'>
                <h3 className="text-lg font-semibold ">Total Employees</h3>
                <p className="text-2xl font-bold">28</p>
            </div>
            <div className='p-2 bg-[#D9F3EA] text-[#00B074] rounded-md'>
            <i class="ri-group-fill text-3xl"></i>
            </div>
        </div>

        <div className="p-6 bg-white md:min-w-[90%] shadow rounded-lg text-center flex items-center gap-5 justify-between">
            <div className='flex flex-col items-start'>
                <h3 className="text-lg font-semibold">Today presents</h3>
                <p className="text-2xl font-bold">5</p>
            </div>
            <div className='p-2 bg-[#D9F3EA] text-[#00B074] rounded-md'>
                <i class="ri-fingerprint-line text-3xl"></i>
            </div>
        </div>
        <div className="p-6 bg-white md:min-w-[90%] shadow rounded-lg text-center flex items-center gap-5 justify-between">
            <div className='flex flex-col items-start'>
                <h3 className="text-lg font-semibold">Today absents</h3>
                <p className="text-2xl font-bold">20</p>
            </div>
            <div className='p-2 bg-[#D9F3EA] text-[#00B074] rounded-md'>
            <i class="ri-user-unfollow-fill text-3xl"></i>
            </div>
        </div>
        <div className="p-6 bg-white md:min-w-[90%] shadow rounded-lg text-center flex items-center gap-5 justify-between">
            <div className='flex flex-col items-start'>
                <h3 className="text-lg font-semibold">Today leave</h3>
                <p className="text-2xl font-bold">3</p>
            </div>
            <div className='p-2 bg-[#D9F3EA] text-[#00B074] rounded-md'>
                <i class="ri-user-fill  text-3xl"></i>
            </div>
        </div>
      </div>
      
      {/* Attendance Chart */}
      <div className="md:col-span-2  p-3 bg-white shadow rounded-lg">
        <h3 className="text-lg font-semibold mb-3 text-center">Daily Attendance Statistics</h3>
        <hr />
        <ResponsiveContainer className='text-sm mt-5' width="100%" height={350}>
          <BarChart  data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="present" fill="#00B074" name="Present %" />
            <Bar dataKey="absent" fill="#F7C604" name="Absent %" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      {/* Leave Applications */}
      <div className=" md:col-span-1 p-4 bg-white shadow rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Leave Applications</h3>
        <hr />
        <div className="space-y-6">
          {/* {['Maisha Lucy', 'Honorato Terry', 'Amy Peck'].map((name, index) => (
            <div key={index} className="flex justify-between">
              <p>{name}</p>
              <span className="text-green-500">Approved</span>
            </div>
          ))} */}
          <div className="flex items-center justify-between mt-4 border-b-[#E5E7EB] border-b-[1px]">
            <div className="flex items-center gap-2">
              <img src="https://hrm.bdtask-demoserver.com/assets/user-1.png" alt="" />
              <div className="flex flex-col">
                <h1 className="text-sm font-bold leading-none">Maisha Lucy Zamora Gonzales</h1>
                <p>Reason : <span>tt</span></p>

              </div> 
            </div>
            <button className="px-2 py-1 font-semibold bg-[#D9F3EA] text-[#00B074] rounded-md">Approved</button>
          </div>
          <div className="flex items-center justify-between mt-4 border-b-[#E5E7EB] border-b-[1px]">
            <div className="flex items-center gap-2">
              <img src="https://hrm.bdtask-demoserver.com/assets/user-1.png" alt="" />
              <div className="flex flex-col">
                <h1 className="text-sm font-bold leading-none">Maisha Lucy Zamora Gonzales</h1>
                <p>Reason : <span>tt</span></p>

              </div> 
            </div>
            <button className="px-2 py-1 font-semibold bg-[#D9F3EA] text-[#00B074] rounded-md">Approved</button>
          </div>
          <div className="flex items-center justify-between mt-4 border-b-[#E5E7EB] border-b-[1px]">
            <div className="flex items-center gap-2">
              <img src="https://hrm.bdtask-demoserver.com/assets/user-1.png" alt="" />
              <div className="flex flex-col">
                <h1 className="text-sm font-bold leading-none">Maisha Lucy Zamora Gonzales</h1>
                <p>Reason : <span>tt</span></p>

              </div> 
            </div>
            <button className="px-2 py-1 font-semibold bg-[#D9F3EA] text-[#00B074] rounded-md">Approved</button>
          </div>
          <div className="flex items-center justify-between mt-4 border-b-[#E5E7EB] border-b-[1px]">
            <div className="flex items-center gap-2">
              <img src="https://hrm.bdtask-demoserver.com/assets/user-1.png" alt="" />
              <div className="flex flex-col">
                <h1 className="text-sm font-bold leading-none">Maisha Lucy Zamora Gonzales</h1>
                <p>Reason : <span>tt</span></p>

              </div> 
            </div>
            <button className="px-2 py-1 font-semibold bg-[#D9F3EA] text-[#00B074] rounded-md">Approved</button>
          </div>
        </div>
        <p className="text-sm mt-4 text-center text-[#00B074] hover:text-black duration-300 font-semibold cursor-pointer">See All Requests <i class="ri-arrow-right-fill"></i></p>
      </div>
      
      {/* Position Wise Recruitments */}
      <div className="md:col-span-3 p-3 ">
      
      <div className="bg-white shadow-md rounded-2xl p-4 h-full">
        <div className="flex justify-between items-center pb-2 border-b">
          <h5 className="text-lg font-semibold">Position wise recruitment</h5>
          <select
            className="border px-3 py-1 rounded-md"
            value={timeframe}
            onChange={(e) => setTimeframe(e.target.value)}
          >
            <option value="Daily">Daily</option>
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
            <option value="Yearly">Yearly</option>
          </select>
        </div>
        <div className="relative py-4 min-h-[333px]">
          {/* Placeholder for ApexCharts */}
          <div className="w-full h-[318px] bg-gray-100 flex items-center justify-center">
            <p className="text-gray-500">Chart Placeholder</p>
          </div>
        </div>
      </div>
      </div>
      
      {/* New Recruitments */}
      <div className=" md:col-span-1 p-4 bg-white shadow rounded-lg">
        <h3 className="text-lg font-semibold mb-2">New Recruitment</h3>
        <hr />
        <div className="space-y-6">
          <div className="flex items-center justify-between mt-4 border-b-[#E5E7EB] border-b-[1px]">
            <div className="flex items-center gap-2">
              <img src="https://hrm.bdtask-demoserver.com/assets/user-1.png" alt="" />
              <div className="flex flex-col">
                <h1 className="text-sm font-bold leading-none">Maisha Lucy Zamora Gonzales</h1>
                <p>Date : <span>22-02-2025</span></p>

              </div> 
            </div>
            <button className="px-2 py-1 font-semibold bg-[#D9F3EA] text-[#00B074] rounded-md">Approved</button>
          </div>
          <div className="flex items-center justify-between mt-4 border-b-[#E5E7EB] border-b-[1px]">
            <div className="flex items-center gap-2">
              <img src="https://hrm.bdtask-demoserver.com/assets/user-1.png" alt="" />
              <div className="flex flex-col">
                <h1 className="text-sm font-bold leading-none">Maisha Lucy Zamora Gonzales</h1>
                <p>Date : <span>22-02-2025</span></p>

              </div> 
            </div>
            <button className="px-2 py-1 font-semibold bg-[#D9F3EA] text-[#00B074] rounded-md">Approved</button>
          </div>
          <div className="flex items-center justify-between mt-4 border-b-[#E5E7EB] border-b-[1px]">
            <div className="flex items-center gap-2">
              <img src="https://hrm.bdtask-demoserver.com/assets/user-1.png" alt="" />
              <div className="flex flex-col">
                <h1 className="text-sm font-bold leading-none">Maisha Lucy Zamora Gonzales</h1>
                <p>Date : <span>22-02-2025</span></p>

              </div> 
            </div>
            <button className="px-2 py-1 font-semibold bg-[#D9F3EA] text-[#00B074] rounded-md">Approved</button>
          </div>
          
        </div>
        <p className="text-sm mt-4 text-center font-semibold">See More</p>
      </div>

            {/* Awareded */}
      <div className="md:col-span-3 p-3 bg-white shadow-md rounded-lg">
        <h2 className="font-bold text-lg px-4">Awarded</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={dataForBar} margin={{ top: 20, right: 20, left: 0, bottom: 20 }}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill={COLORS["ABC"]} barSize={30} />
          </BarChart>
        </ResponsiveContainer>
      </div>


    {/* Loan Payment received */}
      <div className="md:col-span-1 p-3">
        
          <div className="flex flex-col items-center bg-white shadow-lg p-4 rounded-lg">
          <h2 className="font-bold text-lg">Loan Payment Received</h2>
          <RadialBarChart
            
            width={200}
            height={300}
            cx={100}
            cy={100}
            innerRadius="100%"
            outerRadius="100%"
            barSize={10}
            data={dataForCircular}
          >
            <RadialBar minAngle={15} background clockWise dataKey="value" />
            <text x={100} y={100} textAnchor="middle" dominantBaseline="middle">
              <tspan x="100" dy="-10" fontSize="12" fill="#666">
                Total Loan Amount
              </tspan>
              
              <tspan x="100" dy="20" fontSize="20" fontWeight="bold">
                {dataForCircular[0].value}%
              </tspan>
            </text>
          </RadialBarChart>
        </div>
      
      </div>
        {/* Notice */}
        <div className="md:col-span-1 bg-white shadow-lg rounded-xl p-4">
      <div className="flex items-center gap-2 text-lg font-semibold">
        <span className="text-green-500">
        <i class="ri-calendar-line"></i>
        </span>
        <span>Notice</span>
      </div>
      <div className="mt-4 space-y-4">
        {notices.map((notice, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg flex justify-between items-start">
            <div>
              <p className="font-bold">{notice.title}</p>
              <span className="bg-[#FFFFFF] text-xs px-3 py-2 rounded-lg inline-block mt-1">
                {notice.subtitle}
              </span>
            </div>
            <div className="flex flex-col items-end gap-1">
              <i class="ri-star-line text-2xl"></i>
              <span className="text-green-500 flex items-center gap-1">
              <i class="ri-calendar-line text-xl"></i>
                {notice.date}
              </span>
              <button>
                <i className="far fa-star text-gray-500"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
      <button className="w-full text-center text-sm text-gray-600 mt-4 hover:underline">
        See More
      </button>
    </div>
        {/* Employee Award List */}
        <div className="md:col-span-3 bg-white shadow-md rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Employee award list</h2>
        <button className="bg-green-600 text-white px-4 py-2 rounded flex items-center gap-2">
          <span>&#9776;</span> Award list
        </button>
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2 font-bold">Sl.</th>
            <th className="p-2 font-bold">Image</th>
            <th className="p-2 font-bold">Name</th>
            <th className="p-2 font-bold">Department name</th>
            <th className="p-2 font-bold">Award name</th>
            <th className="p-2 font-bold">Date</th>
          </tr>
        </thead>
        <tbody>
          {awards.map((award) => (
            <tr key={award.id} className="border-t">
              <td className="p-2">{award.id}</td>
              <td className="p-2"><img src={award.img} alt="Employee" className="w-10 h-10 rounded-lg" /></td>
              <td className="p-2">{award.name}</td>
              <td className="p-2">{award.department}</td>
              <td className="p-2 flex items-center gap-1">🏆 {award.award}</td>
              <td className="p-2">{award.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
      
    </div>
      );
    };

export default Dashboard