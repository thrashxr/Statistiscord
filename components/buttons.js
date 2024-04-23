/* eslint-disable jsx-a11y/alt-text */
'use client';
import { FaHouse, FaInfo, FaEnvelope } from 'react-icons/fa6';
import Link from 'next/link';
export default function Buttons() {
   return (
      <>
         <div className="flex justify-center ">
            <div className="flex justify-center relative top-[1px] z-50">
               <Link href="/" className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded shadow-lg hover:shadow-2xl flex items-center mx-2">
                  <FaHouse className="text-white" />
                  Home
               </Link>
               <Link href="/activity" className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded shadow-lg hover:shadow-2xl flex items-center">
                  <FaInfo className="text-white" />
                  Activities
               </Link>
            </div>
         </div>
      </>
   );
}
