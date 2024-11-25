import React from 'react';
import DepartmentDescription from '../../../components/DepartmentDescription';
import Topbar from '../../../components/Topbar';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

const DepartmentPage: React.FC = () => {
  // Chief Officer Data
  const ChiefOfficerData1 = {
    name: 'Stephen Makhanu',
    position: 'Chief Officer, Water',
    email: '@example.com',
    phone: '+254712638217',
    description: 'Stephen Makhanu is responsible for overseeing the ...',
    imageUrl: '/.jpg',
  };

  const ChiefOfficerData2 = {
    name: 'Nicholas Kiboi',
    position: 'Chief Officer, Environment and Natural Resources',
    email: 'jane.doe@example.com',
    phone: '+254725159153',
    description: 'Nicholas Kiboi is responsible for educational initiatives ...',
    imageUrl: '/.jpg',
  };

  // CECM Data
  const CECMData = {
    name: 'KENNETH MAKELO LUSAKA',
    position: 'GOVERNOR, BUNGOMA COUNTY.',
    email: '@example.com',
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
        departmentName="Governor"
        // chiefOfficers={[ChiefOfficerData1, ChiefOfficerData2]}
          chiefOfficers={[ChiefOfficerData1,ChiefOfficerData2]}
        cecm={CECMData}
      />
      <Footer />
    </div>
  );
};

export default DepartmentPage;
