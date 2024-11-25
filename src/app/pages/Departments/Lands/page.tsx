
  import React from 'react';
  import DepartmentDescription from '../../../components/DepartmentDescription';
  import Topbar from '../../../components/Topbar';
  import Navbar from '../../../components/Navbar';
  import Footer from '../../../components/Footer';
  
  const DepartmentPage: React.FC = () => {
    // Chief Officer Data
    const ChiefOfficerData1 = {
      name: 'GEORGE KOMBO',
      position: 'Chief Officer, Lands ',
      email: '@example.com',
      phone: '+254722288349',
      description: 'George Kombo is responsible for overseeing the ...',
      imageUrl: '/chiefhealth.jpg',
    };
  
    const ChiefOfficerData2 = {
      name: 'Rashid Fwamba',
      position: 'Chief Officer, Housing, Municipalities & Urban Planning',
      email: 'jane.doe@example.com',
      phone: '+254727500745',
      description: 'Rashid Fwamba is responsible for educational initiatives ...',
      imageUrl: '/.jpg',
    };
  
    // CECM Data
    const CECMData = {
      name: 'Douglas Sasita',
      position: 'County Executive Committee Member, Health Department',
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
      imageUrl: '/SASITA.jpg',
    };
  
    return (
      <div>
        <Topbar />
        <Navbar />
        <DepartmentDescription
          departmentName="Lands,Urban & Physical Planning"
          // chiefOfficers={[ChiefOfficerData1, ChiefOfficerData2]}
            chiefOfficers={[ChiefOfficerData1,ChiefOfficerData2]}
          cecm={CECMData}
        />
        <Footer />
      </div>
    );
  };
  
  export default DepartmentPage;
  