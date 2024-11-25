/* eslint-disable react/no-unescaped-entities */

  import React from 'react';
  import DepartmentDescription from '../../../components/DepartmentDescription';
  import Topbar from '../../../components/Topbar';
  import Navbar from '../../../components/Navbar';
  import Footer from '../../../components/Footer';
  
  const DepartmentPage: React.FC = () => {
    // Chief Officer Data
    const ChiefOfficerData1 = {
      name: 'Evelyn T. Wekesa',
      position: 'Chief Officer Public Service Management and Administration',
      email: '@example.com',
      phone: '+254',
      description: 'Evelyn T. Wekesa is responsible for overseeing the ...',
      imageUrl: '/.jpg',
    };
  
   
    const CECMData = {
      name: '',
      position: 'County Executive Committee Member Public Service Management and Administration',
      email: 'jane.smith@example.com',
      phone: '+254',
      description: (
        <div>
          {/* <p>
            Ms. Carolyne Makali Khalayi hails from the Luhya tribe and is a proud resident of Kabuchai Constituency. 
            She brings a wealth of experience and dedication to the Health Department.
          </p>
          <p>
            <strong>Educational Background:</strong>
          </p>
          <ul>
            <li>Bachelor's Degree in Business Commerce – Accounting Option from Kibabii University.</li>
          </ul>
          <p>
            <strong>Professional Experience:</strong>
          </p>
          <ul>
            <li>Former Records Management Officer at the National Government Constituency Development Fund, Kabuchai Constituency.</li>
            <li>Served as a Research Assistant at the National Taxpayers’ Association.</li>
          </ul> */}
        </div>
      ),
      imageUrl: '/.jpg',
    };
  
    return (
      <div>
        <Topbar />
        <Navbar />
        <DepartmentDescription
          departmentName="Public Service Management and Administration"
          // chiefOfficers={[ChiefOfficerData1, ChiefOfficerData2]}
            chiefOfficers={[ChiefOfficerData1]}
          cecm={CECMData}
        />
        <Footer />
      </div>
    );
  };
  
  export default DepartmentPage;
  