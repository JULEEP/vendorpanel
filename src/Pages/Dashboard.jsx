import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';   

const Dashboard = () => {
    const data = [
        { name: 'Finance', present: 0, absent: 0, leave: 0 },
        { name: 'Safety, Security', present: 0, absent: 0, leave: 0 },
        { name: 'S. Engineer', present: 0, absent: 0, leave: 0 },
        { name: 'Restaurants', present: 30, absent: 70, leave: 0 },
        { name: 'Electrical', present: 14, absent: 86, leave: 0 }
      ];
    
    
      return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6 bg-gray-100 min-h-screen">
      {/* Stats Section */}
      <div className="md:flex md:flex-col md:w-[100%] md:justify-between md:items-center space-y-4 w-[78vw] ">
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
      <div className="col-span-2 p-3 bg-white shadow rounded-lg">
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
      <div className="p-4 bg-white shadow rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Leave Applications</h3>
        <div className="space-y-2">
          {['Maisha Lucy', 'Honorato Terry', 'Amy Peck'].map((name, index) => (
            <div key={index} className="flex justify-between">
              <p>{name}</p>
              <span className="text-green-500">Approved</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* New Recruitments */}
      <div className="p-4 bg-white shadow rounded-lg">
        <h3 className="text-lg font-semibold mb-2">New Recruitment</h3>
        <div className="space-y-2">
          {['Mohmed Afif', 'Uma Stafford', 'Khuabib Ahmed'].map((name, index) => (
            <div key={index} className="flex justify-between">
              <p>{name}</p>
              <button className="px-3 py-1 text-white bg-blue-500 rounded text-sm">Recruit</button>
            </div>
          ))}
        </div>
      </div>
    </div>
      );
    };

export default Dashboard