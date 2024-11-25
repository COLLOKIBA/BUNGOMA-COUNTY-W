  import React from 'react';
  import DepartmentDescription from '../../../components/DepartmentDescription';
  import Topbar from '../../../components/Topbar';
  import Navbar from '../../../components/Navbar';
  import Footer from '../../../components/Footer';
  
  const DepartmentPage: React.FC = () => {
    // Chief Officer Data
    const ChiefOfficerData1 = {
      name: 'RJ Simiyu',
      position: 'Chief Officer, Finance',
      email: '@example.com',
      phone: '+254722898317',
      description: 'Dr. Magrina Mayama is responsible for overseeing the ...',
      imageUrl: '/chiefhealth.jpg',
    };
  
    const ChiefOfficerData2 = {
      name: 'Andrew Wamukoya',
      position: 'Chief Officer, Economic Planning',
      email: 'jane.doe@example.com',
      phone: '+254790604088',
      description: 'Jane Doe is responsible for educational initiatives ...',
      imageUrl: '/chiefofeducation.jpg',
    };
  
    // CECM Data
    const CECMData = {
      name: 'Barasa Chrispinus',
      position: 'County Executive Committee Member, Finance and Economic Planning,County Government of Bungoma.',
      email: 'jane.smith@example.com',
      phone: '+254',
      description: (
        <div>
          <p>
          He has over a decade of experience in Matters Financing and project Management .
          </p>
          <p>Chrispinus has been both an accountant and Acting Manager of Bungoma Teachers.</p>
          <p>He also served as the Chief Executive Officer from Oct 2010 to April 2014 at Ng’arisha Sacco.</p>
          <p>Between April 2014 to Oct 2019 he served as chief officer in charge of Finance and Economic Planning ,Bungoma County Government.</p>
          <p>He has also served as a Finance manager at Friends Lugulu Mission Hospital between Oct 2021 to end of August 2022.</p>
          <p>
            <strong>Educational Background:</strong>
          </p>
          {/* <ul>
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
      imageUrl: '/barasa.jpg',
    };
  
    return (
      <div>
        <Topbar />
        <Navbar />
        <DepartmentDescription
          departmentName="Finance and Economic Planning"
          // chiefOfficers={[ChiefOfficerData1, ChiefOfficerData2]}
            chiefOfficers={[ChiefOfficerData1,ChiefOfficerData2]}
          cecm={CECMData}
        />
        <Footer />
      </div>
    );
  };
  
  export default DepartmentPage;
  