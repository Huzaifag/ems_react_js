import React from 'react';
import Header from '../Others/Header';
import CreateTasks from '../Others/CreateTasks';
import AllTasks from '../Others/AllTasks';

const AdminDashboard = () => {
  return (
    <div className="p-5 h-screen w-full bg-[#1c1c1c]">
      <Header />
      <CreateTasks />
      <AllTasks />
    </div>
  );
};

export default AdminDashboard;
