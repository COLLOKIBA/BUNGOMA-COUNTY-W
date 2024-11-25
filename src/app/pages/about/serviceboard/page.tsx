
import React from 'react';
import DepartmentDescription from '../../../components/DepartmentDescription';
import Topbar from '../../../components/Topbar';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

const DepartmentPage: React.FC = () => {
  // Chief Officer Data
  const ChiefOfficerData1 = {
    name: 'Dr. Magrina Mayama',
    position: 'Chief Officer, Health Department',
    email: '@example.com',
    phone: '+254',
    description: 'Dr. Magrina Mayama is responsible for overseeing the ...',
    imageUrl: '/chiefhealth.jpg',
  };

  // CS Data
  const CS = {
    name: 'Mr. ',
    position: 'Chairman',
    email: '@example.com',
    phone: '+254',
    description: (
      <div>
        {/* <p>
        Mr. William Makhanu Nasong’o, the County Secretary and Head of Public Service, County Government of Bungoma joined the Public Service on Tuesday, 2nd January, 2024. This was after undergoing rigorous recruitment exercise by a select panel appointed by His Excellency the Governor. He underwent the vetting by County Assembly of Bungoma and eventually sworn in on 8th December, 2023 at Bungoma County Headquarters in an occasion presided over by H.E the Governor.

        Mr. Nasong’o, a Fourth born son of Mzee Fredrick Nasong’o Kwanusu and Mama Flora Nekesa was born in January 1974 in Misemwa Village, Ndivisi Ward in Webuye East Su-county. He hails from the Tachoni Subtribe of Luhya community.
        </p>
        <p>
          <strong>Educational Background:</strong>
        </p>
        <ul>
          <li>Degree in Anthropology – University of Nairobi .</li>
        </ul>
        <ul>
          <li>Master’s Degree in Sociology – University of Nairobi .</li>
        </ul> */}
        {/* <p>
          <strong>Professional Experience:</strong>
        </p> */}
        {/* <ul>
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
        departmentName="County Public Service Board"
        // chiefOfficers={[ChiefOfficerData1, ChiefOfficerData2]}
          // chiefOfficers={[ChiefOfficerData1]}
        cecm={CS}
      />
      <Footer />
    </div>
  );
};

export default DepartmentPage;
