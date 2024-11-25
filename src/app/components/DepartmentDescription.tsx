// // 'use client'

// // import React, { useState } from 'react';
// // import styles from './DepartmentDescription.module.css'; 

// // interface OfficerProps {
// //   name: string;
// //   position: string;
// //   email: string;
// //   phone: string;
// //   description: string | React.JSX.Element;
// //   imageUrl: string;
// // }

// // interface DepartmentDescriptionProps {
// //   departmentName: string;
// //   chiefOfficer: OfficerProps;
// //   cecm: OfficerProps;
// // }

// // const DepartmentDescription: React.FC<DepartmentDescriptionProps> = ({ departmentName, chiefOfficer, cecm }) => {
// //   const [showChiefOfficer, setShowChiefOfficer] = useState(true);

// //   const toggleOfficer = () => {
// //     setShowChiefOfficer(!showChiefOfficer);
// //   };

// //   const officer = showChiefOfficer ? chiefOfficer : cecm;

// //   return (
// //     <div className={styles.departmentDescription}>
// //       <h1 className={styles.departmentName}>{departmentName}</h1>

// //       <div className={styles.officerSection}>
// //         <img src={officer.imageUrl} alt={`${officer.name}`} className={styles.officerImage} />
// //         <div className={styles.officerInfo}>
// //           <h2 className={styles.officerName}>{officer.name}</h2>
// //           <p className={styles.officerPosition}>{officer.position}</p>
// //           <p className={styles.officerDescription}>{officer.description}</p>
// //           <p className={styles.officerContact}>
// //             <strong>Email:</strong> <a href={`mailto:${officer.email}`}>{officer.email}</a>
// //           </p>
// //           <p className={styles.officerContact}>
// //             <strong>Phone:</strong> {officer.phone}
// //           </p>
// //         </div>
// //       </div>

// //       <button className={styles.toggleButton} onClick={toggleOfficer}>
// //         Show {showChiefOfficer ? 'C.E.C.M' : 'Chief Officer'}
// //       </button>
// //     </div>
// //   );
// // };

// // export default DepartmentDescription;



// // // 'use client';

// // // import React, { useState, useEffect } from 'react';
// // // import styles from './DepartmentDescription.module.css';

// // // interface OfficerProps {
// // //   name: string;
// // //   position: string;
// // //   email: string;
// // //   phone: string;
// // //   description: string | React.JSX.Element;
// // //   imageUrl: string;
// // // }

// // // interface DepartmentDescriptionProps {
// // //   departmentName: string;
// // //   chiefOfficers?: OfficerProps[];  // Array of Chief Officers
// // //   cecm: OfficerProps;
// // //   additionalOfficer?: OfficerProps; // Add this to pass additional officer
// // // }

// // // const DepartmentDescription: React.FC<DepartmentDescriptionProps> = ({ departmentName, chiefOfficers = [], cecm }) => {
// // //   const [activeView, setActiveView] = useState<'cecm' | 'chiefOfficers'>('cecm');
// // //   const [showContent, setShowContent] = useState(false);

// // //   useEffect(() => {
// // //     setShowContent(true);
// // //   }, []);

// // //   const handleToggleView = () => {
// // //     setActiveView(activeView === 'cecm' ? 'chiefOfficers' : 'cecm');
// // //   };

// // //   if (!showContent) {
// // //     return null;
// // //   }

// // //   return (
// // //     <div className={styles.departmentDescription}>
// // //       <h1 className={styles.departmentName}>{departmentName}</h1>

// // //       {activeView === 'cecm' ? (
// // //         <div className={styles.officerSection}>
// // //           <img src={cecm.imageUrl} alt={cecm.name} className={styles.officerImage} />
// // //           <div className={styles.officerInfo}>
// // //             <h2 className={styles.officerName}>{cecm.name}</h2>
// // //             <p className={styles.officerPosition}>{cecm.position}</p>
// // //             <p className={styles.officerDescription}>{cecm.description}</p>
// // //             <p className={styles.officerContact}>
// // //               <strong>Email:</strong> <a href={`mailto:${cecm.email}`}>{cecm.email}</a>
// // //             </p>
// // //             <p className={styles.officerContact}>
// // //               <strong>Phone:</strong> {cecm.phone}
// // //             </p>
// // //           </div>
// // //         </div>
// // //       ) : (
// // //         <>
// // //           {chiefOfficers.length > 0 ? (
// // //             chiefOfficers.map((officer, index) => (
// // //               <div key={index} className={styles.officerSection}>
// // //                 <img src={officer.imageUrl} alt={officer.name} className={styles.officerImage} />
// // //                 <div className={styles.officerInfo}>
// // //                   <h2 className={styles.officerName}>{officer.name}</h2>
// // //                   <p className={styles.officerPosition}>{officer.position}</p>
// // //                   <p className={styles.officerDescription}>{officer.description}</p>
// // //                   <p className={styles.officerContact}>
// // //                     <strong>Email:</strong> <a href={`mailto:${officer.email}`}>{officer.email}</a>
// // //                   </p>
// // //                   <p className={styles.officerContact}>
// // //                     <strong>Phone:</strong> {officer.phone}
// // //                   </p>
// // //                 </div>
// // //               </div>
// // //             ))
// // //           ) : (
// // //             <p>No Chief Officers available.</p>
// // //           )}

// // //           {/* Display additional Chief Officer data */}
// // //           <div className={styles.officerSection}>
// // //             <img src={ChiefOfficerData2.imageUrl} alt={ChiefOfficerData2.name} className={styles.officerImage} />
// // //             <div className={styles.officerInfo}>
// // //               <h2 className={styles.officerName}>{ChiefOfficerData2.name}</h2>
// // //               <p className={styles.officerPosition}>{ChiefOfficerData2.position}</p>
// // //               <p className={styles.officerDescription}>{ChiefOfficerData2.description}</p>
// // //               <p className={styles.officerContact}>
// // //                 <strong>Email:</strong> <a href={`mailto:${ChiefOfficerData2.email}`}>{ChiefOfficerData2.email}</a>
// // //               </p>
// // //               <p className={styles.officerContact}>
// // //                 <strong>Phone:</strong> {ChiefOfficerData2.phone}
// // //               </p>
// // //             </div>
// // //           </div>
// // //         </>
// // //       )}

// // //       <button className={styles.toggleButton} onClick={handleToggleView}>
// // //         Show {activeView === 'cecm' ? 'Chief Officers' : 'C.E.C.M'}
// // //       </button>
// // //     </div>
// // //   );
// // // };

// // // export default DepartmentDescription;



// 'use client';

// import React, { useState, useEffect } from 'react';
// import styles from './DepartmentDescription.module.css';

// interface OfficerProps {
//   name: string;
//   position: string;
//   email: string;
//   phone: string;
//   description: string | React.JSX.Element;
//   imageUrl: string;
// }

// interface DepartmentDescriptionProps {
//   departmentName: string;
//   chiefOfficers?: OfficerProps[];  // Array of Chief Officers
//   cecm: OfficerProps;
// }

// // Define the chief officer data
// const ChiefOfficerData1: OfficerProps = {
//   name: 'Dr. Magrina Mayama',
//   position: 'Chief Officer, Health Department',
//   email: '@example.com',
//   phone: '+254',
//   description: 'is responsible for overseeing the ...',
//   imageUrl: '/chiefhealth.jpg',
// };

// const ChiefOfficerData2: OfficerProps = {
//   name: 'Jane Doe',
//   position: 'Chief Officer, Education Department',
//   email: 'jane.doe@example.com',
//   phone: '+254123456789',
//   description: 'Responsible for educational initiatives ...',
//   imageUrl: '/chiefofeducation.jpg',
// };

// const DepartmentDescription: React.FC<DepartmentDescriptionProps> = ({ departmentName, chiefOfficers = [], cecm }) => {
//   const [activeView, setActiveView] = useState<'cecm' | 'chiefOfficers'>('cecm');
//   const [showContent, setShowContent] = useState(false);

//   useEffect(() => {
//     setShowContent(true);
//   }, []);

//   const handleToggleView = () => {
//     setActiveView(activeView === 'cecm' ? 'chiefOfficers' : 'cecm');
//   };

//   if (!showContent) {
//     return null;
//   }

//   return (
//     <div className={styles.departmentDescription}>
//       <h1 className={styles.departmentName}>{departmentName}</h1>

//       {activeView === 'cecm' ? (
//         <div className={styles.officerSection}>
//           <img src={cecm.imageUrl} alt={cecm.name} className={styles.officerImage} />
//           <div className={styles.officerInfo}>
//             <h2 className={styles.officerName}>{cecm.name}</h2>
//             <p className={styles.officerPosition}>{cecm.position}</p>
//             <p className={styles.officerDescription}>{cecm.description}</p>
//             <p className={styles.officerContact}>
//               <strong>Email:</strong> <a href={`mailto:${cecm.email}`}>{cecm.email}</a>
//             </p>
//             <p className={styles.officerContact}>
//               <strong>Phone:</strong> {cecm.phone}
//             </p>
//           </div>
//         </div>
//       ) : (
//         <>
//           {chiefOfficers.length > 0 ? (
//             chiefOfficers.map((officer, index) => (
//               <div key={index} className={styles.officerSection}>
//                 <img src={officer.imageUrl} alt={officer.name} className={styles.officerImage} />
//                 <div className={styles.officerInfo}>
//                   <h2 className={styles.officerName}>{officer.name}</h2>
//                   <p className={styles.officerPosition}>{officer.position}</p>
//                   <p className={styles.officerDescription}>{officer.description}</p>
//                   <p className={styles.officerContact}>
//                     <strong>Email:</strong> <a href={`mailto:${officer.email}`}>{officer.email}</a>
//                   </p>
//                   <p className={styles.officerContact}>
//                     <strong>Phone:</strong> {officer.phone}
//                   </p>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p>No Chief Officers available.</p>
//           )}
//         </>
//       )}

//       <button className={styles.toggleButton} onClick={handleToggleView}>
//         Show {activeView === 'cecm' ? 'Chief Officers' : 'C.E.C.M'}
//       </button>
//     </div>
//   );
// };

// export default DepartmentDescription;

'use client';

import React, { useState, useEffect } from 'react';
import styles from './DepartmentDescription.module.css';

interface OfficerProps {
  name: string;
  position: string;
  email: string;
  phone: string;
  description: string | React.JSX.Element;
  imageUrl: string;
}

interface DepartmentDescriptionProps {
  departmentName: string;
  chiefOfficers?: OfficerProps[];  // Array of Chief Officers
  cecm: OfficerProps;
}

const DepartmentDescription: React.FC<DepartmentDescriptionProps> = ({ departmentName, chiefOfficers = [], cecm }) => {
  const [activeView, setActiveView] = useState<'cecm' | 'chiefOfficers'>('cecm');
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);

  const handleToggleView = () => {
    setActiveView(activeView === 'cecm' ? 'chiefOfficers' : 'cecm');
  };

  if (!showContent) {
    return null;
  }

  return (
    <div className={styles.departmentDescription}>
      <h1 className={styles.departmentName}>{departmentName}</h1>

      {activeView === 'cecm' ? (
        <div className={styles.officerSection}>
          <img src={cecm.imageUrl} alt={cecm.name} className={styles.officerImage} />
          <div className={styles.officerInfo}>
            <h2 className={styles.officerName}>{cecm.name}</h2>
            <p className={styles.officerPosition}>{cecm.position}</p>
            <p className={styles.officerDescription}>{cecm.description}</p>
            <p className={styles.officerContact}>
              <strong>Email:</strong> <a href={`mailto:${cecm.email}`}>{cecm.email}</a>
            </p>
            <p className={styles.officerContact}>
              <strong>Phone:</strong> {cecm.phone}
            </p>
          </div>
        </div>
      ) : (
        <>
          {chiefOfficers.length > 0 ? (
            chiefOfficers.map((officer, index) => (
              <div key={index} className={styles.officerSection}>
                <img src={officer.imageUrl} alt={officer.name} className={styles.officerImage} />
                <div className={styles.officerInfo}>
                  <h2 className={styles.officerName}>{officer.name}</h2>
                  <p className={styles.officerPosition}>{officer.position}</p>
                  <p className={styles.officerDescription}>{officer.description}</p>
                  <p className={styles.officerContact}>
                    <strong>Email:</strong> <a href={`mailto:${officer.email}`}>{officer.email}</a>
                  </p>
                  <p className={styles.officerContact}>
                    <strong>Phone:</strong> {officer.phone}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p>No Chief Officers available.</p>
          )}
        </>
      )}

      {/* Conditionally render the toggle button based on the department name */}
      {departmentName !== 'County Public Service Board' && departmentName !== 'Governor' && departmentName !== 'Deputy Governor' && departmentName !== 'County Secretaty & Head of Public Service' && departmentName !=='County Attorney' && (
        <button className={styles.toggleButton} onClick={handleToggleView}>
          Show {activeView === 'cecm' ? 'Chief Officers' : 'C.E.C.M'}
        </button>
      )}
    </div>
  );
};

export default DepartmentDescription;
