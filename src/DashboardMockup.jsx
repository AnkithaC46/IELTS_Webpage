import { ThumbsUp } from "lucide-react";
import React from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, LineChart, Line
} from "recharts";

const barData = [
  { name: "Mon", uv: 15 },
  { name: "Tue", uv: 20 },
  { name: "Wed", uv: 24 },
  { name: "Thu", uv: 20 },
  { name: "Fri", uv: 10 },
];

const bigBarData = [
  { name: "Jan", uv: 20, pv: 18 },
  { name: "Feb", uv: 24, pv: 22 },
  { name: "Mar", uv: 18, pv: 20 },
  { name: "Apr", uv: 27, pv: 25 },
  { name: "May", uv: 22, pv: 20 },
];

const pieData = [
  { name: "Active", value: 70 },
  { name: "Inactive", value: 30 },
];

const lineData = [
  { name: "W1", uv: 5 },
  { name: "W2", uv: 9 },
  { name: "W3", uv: 6 },
  { name: "W4", uv: 10 },
];

const COLORS = ["#27C0EF", "#1AA8D4"];

const DashboardMockup = () => {
  return (
   <div className="relative bg-white rounded-2xl shadow-2xl p-4 w-full max-w-6xl">

  {/* Overview Header */}
  <h2 className="text-xl font-bold mb-4">Overview</h2>

  {/* Floating Left Card - Desktop */}
  <div className="hidden md:block absolute -left-20 top-50 bg-white rounded-xl shadow-lg p-4 w-48 h-56">
    <p className="text-2xl text-blue-500 font-bold mb-3">20 Days</p>
    <p className="text-sm text-gray-500 mb-3">Average likes gained</p>
    <span className="text-green-600 text-xs bg-green-100 px-2 py-1 rounded-lg">
      +10.5%
    </span>
    <div className="mt-4">
      <ResponsiveContainer width="100%" height={80}>
        <BarChart data={barData}>
          <XAxis dataKey="name" hide />
          <YAxis hide />
          <Tooltip />
          <Bar dataKey="uv" fill="#27C0EF" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>

  {/* Floating Right Card - Desktop */}
  <div className="hidden md:flex absolute -right-10 top-12 bg-white rounded-xl shadow-lg p-4 w-64 items-center">
    <div className="text-blue-500 bg-gray-200 p-3 rounded-full text-3xl">
      <ThumbsUp />
    </div>
    <div className="ml-4">
      <p className="text-lg font-bold">398K</p>
      <p className="text-sm text-gray-500">Total Likes</p>
    </div>
  </div>

  {/* Mobile Stat Cards (stacked inside layout) */}
  <div className="grid grid-cols-2 gap-4 mb-6 md:hidden">
    <div className="bg-white rounded-xl shadow-lg p-4">
      <p className="text-lg text-blue-500 font-bold">20 Days</p>
      <p className="text-sm text-gray-500">Avg likes gained</p>
    </div>
    <div className="bg-white rounded-xl shadow-lg p-4 flex items-center">
      <ThumbsUp className="text-blue-500 mr-2" />
      <div>
        <p className="text-lg font-bold">398K</p>
        <p className="text-sm text-gray-500">Total Likes</p>
      </div>
    </div>
  </div>

  {/* Ads Statuses */}
  <div className="flex flex-wrap gap-2 justify-start mb-6">
    {["Courses", "Classes", "Users", "Inactive", "Suspended"].map(
      (status, i) => (
        <span
          key={i}
          className="px-3 py-1 bg-blue-50 text-blue-600 text-xs sm:text-sm rounded-full border border-blue-200"
        >
          {status}
        </span>
      )
    )}
  </div>

  {/* Main Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Big Bar Chart */}
    <div className="sm:col-span-2 bg-blue-50 rounded-xl p-4 shadow focus:outline-none">
      <ResponsiveContainer width="100%" height={200} className="focus:outline-none">
        <BarChart data={bigBarData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="uv" fill="#27C0EF" />
          <Bar dataKey="pv" fill="#F6B93B" />
        </BarChart>
      </ResponsiveContainer>
    </div>

    {/* Pie Chart */}
    <div className="bg-blue-50 rounded-xl p-4 shadow">
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie data={pieData} dataKey="value" outerRadius={70} label>
            {pieData.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  </div>

  {/* Line Chart Section */}
  <div className="mt-6 bg-blue-50 rounded-xl p-4 shadow">
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={lineData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="uv" stroke="#27C0EF" />
      </LineChart>
    </ResponsiveContainer>
  </div>
</div>

  );
};

export default DashboardMockup;  
