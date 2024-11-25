
  import React from 'react';
  import DepartmentDescription from '../../../components/DepartmentDescription';
  import Topbar from '../../../components/Topbar';
  import Navbar from '../../../components/Navbar';
  import Footer from '../../../components/Footer';
  
  const DepartmentPage: React.FC = () => {
    // Chief Officer Data
    const ChiefOfficerData1 = {
      name: 'Andrew Musungu',
      position: 'Chief Officer,  Livestock Veterinary Services & Fisheries ',
      email: '@example.com',
      phone: '+254721297649',
      description: 'Andrew Musungu is responsible for overseeing the ...',
      imageUrl: '/.jpg',
    };
  
    const ChiefOfficerData2 = {
      name: 'Dinah Makokha',
      position: 'Chief Officer, Agriculture and Irrigation',
      email: 'jane.doe@example.com',
      phone: '+254714745196',
      description: 'Dinah Makokha is responsible for educational initiatives ...',
      imageUrl: '/.jpg',
    };
    const ChiefOfficerData3 = {
      name: 'Beatrice Nakhumicha',
      position: 'Chief Officer, Cooperatives',
      email: 'e@example.com',
      phone: '+254728954100',
      description: 'Jane Doe is responsible for educational initiatives ...',
      imageUrl: '/.jpg',
    };
  
    // CECM Data
    const CECMData = {
      name: 'Herbert Wanjala Kibunguchy',
      position: 'County Executive Committee Member, Agriculture, Livestock, Irrigation, Fisheries & Co-operative Development',
      email: '@gmail.com',
      phone: '+254',
      description: (
        <div>
          {/* <p>
            Mr. Herbert Wanjala Kibunguchy hails from the Luhya tribe and is a proud resident of Kabuchai Constituency. 
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
          departmentName="Agriculture, Livestock, Irrigation, Fisheries & Co-operative Development"
          // chiefOfficers={[ChiefOfficerData1, ChiefOfficerData2]}
            chiefOfficers={[ChiefOfficerData1,ChiefOfficerData2,ChiefOfficerData3]}
          cecm={CECMData}
        />
        <Footer />
      </div>
    );
  };
  
  export default DepartmentPage;
  