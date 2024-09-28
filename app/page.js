import Buttons from '@/components/buttons';
import Profile from '@/components/profile';
import Image from 'next/image';

export default function Home() {
   return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
         <Profile />
      </main>
   );
}
