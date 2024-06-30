/* eslint-disable jsx-a11y/alt-text */
'use client';
import React, { useState, useEffect } from 'react';
import moment from 'moment';
moment.locale('tr');
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Image from 'next/image';
import Link from 'next/link';
import socialMediaAccounts from '@/utils/links';
import { Tooltip } from 'react-tooltip';
export default function Profile() {
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
                  <Skeleton className="w-[87px] h-[87px] rounded-md mb-4" />
                  <div className="mt-4 flex flex-col items-center">
                     <Skeleton width={150} height={20} />
                     <Skeleton width={100} height={15} className="mt-2" />
                     <Skeleton width={200} height={15} className="mt-2" />
                  </div>
               </div>
            </div>
         </>
      );
   }
   const statusColors = {
      online: 'bg-green-400',
      idle: 'bg-yellow-500',
      dnd: 'bg-red-500',
      offline: 'bg-gray-500',
   };
   const statusColor = statusColors[userData.status] || 'bg-gray-500';

   const dateObject = moment(userData.since);
   const readableDateTime = dateObject.locale('tr').format('LL');
   return (
      <>
         <div className="flex-1 justify-center items-center ">
            <div className="relative flex flex-col items-center rounded-md w-[400px] mx-auto p-4 bg-gray-900 bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none">
               <div className="relative flex h-32 w-full justify-center rounded-md bg-cover">
                  <Image
                     src={userData.banner ? userData.banner : <Image src="/no-data.png" alt="alt" width={300} height={300} />}
                     width={300}
                     height={300}
                     className="absolute flex h-32 w-full justify-center rounded-md bg-cover"
                  />

                  <div className="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-md border-[4px] border-gray-900 dark:!border-navy-700">
                     <Image
                        width={300}
                        height={300}
                        className="w-full h-full rounded-md"
                        src={userData.avatar ? userData.avatar : <Image src="https://i.pinimg.com/originals/ce/5c/ee/ce5cee4b4eab5058e858cbf8b65c39a4.png" alt="alt" width={300} height={300} />}
                        alt=""
                     />
                     <span
                        className={`absolute bottom-1 right-1 transform translate-x-1/2 translate-y-1/2 w-4 h-4 ${statusColor} border-2 border-white dark:border-gray-800 rounded-full user-status`}
                        alt={userData.status ? userData.status : 'Bulunamadı'}
                     ></span>
                     <Tooltip anchorSelect=".user-status" content={userData.status ? userData.status : 'Bulunamadı'} place="bottom" />
                  </div>
               </div>
               <div className="mt-16 flex flex-col items-center">
                  <h4 className="text-xl font-bold text-navy-700 dark:text-white">{userData.username ? userData.username : 'No data'}</h4>
                  <p className="text-xs font-sm text-gray-600 user-id">{userData.id ? userData.id : 'No data'}</p>
                  <Tooltip anchorSelect=".user-id" content="User ID" place="right" />
                  <p className="text-base font-normal text-gray-600 user-skill">Developer & Designer</p>
                  <Tooltip anchorSelect=".user-skill" content="Skills" place="left" />
               </div>
               <div className="mt-6 mb-3 flex gap-14 md:!gap-14">
                  <div className="flex flex-col items-center justify-center">
                     <p className="text-md font-bold text-navy-700 dark:text-white">{readableDateTime}</p>

                     <p className="text-sm font-normal text-gray-600">created at</p>
                  </div>
               </div>
               <div className="mt-3 mb-3 socials">
                  <p className="text-md font-bold text-navy-700 dark:text-white text-center justify-center">Social Media</p>
                  <div className="flex flex-wrap justify-center items-center space-x-4">
                     {socialMediaAccounts.map((account) => (
                        <div key={account.name} className="border border-gray-500 rounded flex flex-wrap justify-center items-center p-2 my-2 h-auto">
                           {account.icon}
                           <Link href={account.link} className="ml-2 text-gray-400">
                              <p className="font-bold text-xs mr-4"> {account.username ? account.username : 'No data'}</p>
                           </Link>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
