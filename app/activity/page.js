import AboutMe from '@/components/activity';
import Buttons from '@/components/buttons';

export default function About() {
   return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
         <Buttons />
         <AboutMe />
      </main>
   );
}
