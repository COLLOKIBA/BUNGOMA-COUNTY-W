/* eslint-disable react/no-unescaped-entities */


  import React from 'react';
  import DepartmentDescription from '../../../components/DepartmentDescription';
  import Topbar from '../../../components/Topbar';
  import Navbar from '../../../components/Navbar';
  import Footer from '../../../components/Footer';
  
  const DepartmentPage: React.FC = () => {
    // Chief Officer Data
    const ChiefOfficerData1 = {
      name: 'Timothy Wanjala',
      position: 'Chief Officer, Youth and Sports',
      email: '@example.com',
      phone: '+254',
      description: 'Timothy Wanjala is responsible for overseeing the ...',
      imageUrl: '/.jpg',
    };
  
    const ChiefOfficerData2 = {
      name: 'David Maling&apos;a',
      position: 'Chief Officer, Gender & Culture',
      email: '@example.com',
      phone: '',
      description: 'David Malinga is responsible for educational initiatives ...',
      imageUrl: '/chiefofeducation.jpg',
    };
  
    // CECM Data
    const CECMData = {
      name: 'Ms. Carolyne Makali Khalayi',
      position: 'County Executive Committee Member, Health Department',
      email: 'jane.smith@example.com',
      phone: '+254',
      description: (
        <div>
          <p>
            Ms. Carolyne Makali Khalayi hails from the Luhya tribe and is a proud resident of Kabuchai Constituency. 
            She brings a wealth of experience and dedication to the Health Department.
          </p>
          <p>
            <strong>Educational Background:</strong>
          </p>
          <ul>
            <li>Bachelor&apos;s Degree in Business Commerce &apos; Accounting Option from Kibabii University.</li>
          </ul>
          <p>
            <strong>Professional Experience:</strong>
          </p>
          <ul>
            <li>Former Records Management Officer at the National Government Constituency Development Fund, Kabuchai Constituency.</li>
            <li>Served as a Research Assistant at the National Taxpayers Association.</li>
          </ul>
        </div>
      ),
      imageUrl: '/carolynemakalakhalayi.jpg',
    };
  
    return (
      <div>
        <Topbar />
        <Navbar />
        <DepartmentDescription
          departmentName="Gender, Youth, Culture & Sports"
          chiefOfficers={[ChiefOfficerData1, ChiefOfficerData2]}
          cecm={CECMData}
        />
        <Footer />
      </div>
    );
  };
  
  export default DepartmentPage;
  