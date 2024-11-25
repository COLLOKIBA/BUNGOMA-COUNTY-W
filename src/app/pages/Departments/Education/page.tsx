import React from 'react';

import DepartmentDescription from '../../../components/DepartmentDescription';
import Topbar from '../../../components/Topbar';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import SwiperCarousel from '../../../components/departments/CustomCarousel';
import EducationDetails from '../../../components/departments/EducationDetail';
import Gallery from '../../../components/departments/Gallery';
import GrievanceForm from '../../../components/departments/EducationGrievanceForm';


const DepartmentPage: React.FC = () => {
  // Chief Officer Data
  const ChiefOfficerData1 = {
    name: 'Sam Nalwa',
    position: 'Chief Officer, Education and Vocational Training',
    email: '@example.com',
    phone: '+254722898317',
    description: '... is responsible for overseeing the ...',
    imageUrl: '/.jpg',
  };

  // CECM Data
  const CECMData = {
    name: 'Agnes Naliaka Wachie (PEng. Tech, MIET)',
    position: 'County Executive Committee Member Public Service Management and Administration',
    email: 'naliaka@yahoo.com',
    phone: '+254',
    description: (
      <div>
        <p>She is a holder of Bachelor of Philosophy Technology (Electrical & Electronics Engineering Technology) from the Technical University of Kenya,  
          Higher National Diploma Electrical & Electronis Engineering (Kenya Polytechnic).</p>
          <p>She has over 30 years of working experience in the Energy Sector, initially Kenya Power and Lighting Company (KPLC) 
            and lately Energy and Petroleum Regulatory Authority (EPRA)</p>
            <p>She has served as the Regional Manager EPRA North Rift covering 5 Counties and also served as Chairperson Kenya Engineering Technology Registration Board,  
              Council Member at TVET Curriculum Development and Certification Council (CDACC).</p>
            <p>Naliaka is an accomplished Engineering Technologist, licensed Class A1 electrical worker and a Solar PV T3 Technician.</p>
          <p>Naliaka is professionally affiliated to the Kenya Engineering Technology Registration Board (KETRB) where she served as founding Chairperson, the Institute of Engineering Technologists (IET), and 
            member of the Association of Energy Professionals of East Africa (AEPEA).</p>
      </div>
    ),
    imageUrl: '/agnes.jpg',
  };
  
  return (
    <div>
      <Topbar />
      <Navbar />
      <SwiperCarousel/>
      <div className="department-details">
        {/* {educationDetails}
        {ictDetails}
        {grievanceRedressMechanism} */}

      </div>
      <EducationDetails/>
      <GrievanceForm/>
      <Gallery />
      <DepartmentDescription
        departmentName="Education and Vocational Training"
        chiefOfficers={[ChiefOfficerData1]}
        cecm={CECMData}
      />
      <Footer />
    </div>
  );
};

export default DepartmentPage;


