/* eslint-disable jsx-a11y/alt-text */
'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function AboutMe() {
   const [userData, setUserData] = useState(null);

   useEffect(() => {
      fetch('/api/userInfo')
         .then((response) => response.json())
         .then((data) => setUserData(data));
   }, []);

   if (!userData) {
      return (
         <>
            <div className="flex-1 justify-center items-center ">
               <div className="relative flex flex-col items-center rounded-md w-[400px] mx-auto p-4 bg-gray-400">
                  {/* Arka plan rengini gri yaptık*/}
                  <Skeleton className="w-[87px] h-[87px] rounded-md mb-4" /> {/* Avatar iskeleti */}
                  <div className="mt-4 flex flex-col items-center">
                     <Skeleton width={150} height={20} /> {/* Kullanıcı adı  iskeleti */}
                     <Skeleton width={100} height={15} className="mt-2" /> {/* Kullanıcı ID iskeleti */}
                     <Skeleton width={200} height={15} className="mt-2" /> {/* Biyografi iskeleti */}
                  </div>
                  {/* ... diğer kısımlar */}
               </div>
            </div>
         </>
      );
   }

   //console.log(userData);
   return (
      <>
         <div className="flex-1 justify-center items-center">
            <div className="relative flex flex-col items-start rounded-md w-[400px] mx-auto p-4 bg-gray-900 bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none">
               <div className="flex flex-col justify-center items-center">
                  <p className="text-md font-bold text-navy-700 dark:text-white">Aktiviteler</p>
               </div>
               <div className="mt-6 mb-3 flex flex-col gap-4 md:flex-wrap md:flex-row">
                  {userData.activity && userData.activity.length > 0 ? (
                     userData.activity
                        .filter((activity) => activity.type !== 'CUSTOM')
                        .map((activity, index) => (
                           <div key={index} className="flex flex-row items-center gap-3">
                              <div>
                                 {activity.assets && (
                                    <div className="relative flex flex-col items-center">
                                       {activity.assets.largeImageURL && (
                                          <Image
                                             width={50}
                                             height={50}
                                             src={activity.assets.largeImageURL ? activity.assets.largeImageURL : <Image src="/no-data-2" alt="alt" width={50} height={50} />}
                                             alt="Large Activity"
                                             className="select-none relative rounded-md"
                                          />
                                       )}
                                       {activity.assets.smallImageURL && (
                                          <Image
                                             className="select-none absolute top-9 left-9 w-5 h-5 rounded-full border-2 border-gray-900"
                                             width={50}
                                             height={50}
                                             src={activity.assets.smallImageURL ? activity.assets.smallImageURL : <Image src="/no-data-2" alt="alt" width={50} height={50} />}
                                             alt="Small Activity"
                                          />
                                       )}
                                    </div>
                                 )}
                              </div>
                              <div className="flex flex-col">
                                 <p className={`select-none font-bold ${activity.name === 'Visual Studio Code' ? 'text-blue-500' : 'text-green-500'}`}>{activity.name ? activity.name : 'No data'}</p>
                                 <p className="select-none">{activity.details ? activity.details : 'No data'}</p>
                                 <p className="select-none">{activity.state ? activity.state : 'No data'}</p>
                                 <p className="select-none">Started Time: {activity.startedAt ? activity.startedAt : 'No data'}</p>
                              </div>
                           </div>
                        ))
                  ) : (
                     <div className="flex flex-col justify-center items-center text-white">
                        <p className="text-lg">
                           <b>{userData.username}</b> kullanıcısının herhangi bir aktivitesi yok.
                        </p>
                     </div>
                  )}
               </div>
            </div>
         </div>
      </>
   );
}
