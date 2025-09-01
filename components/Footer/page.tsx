import Link from 'next/link';
import {FaGithub, FaLinkedin} from 'react-icons/fa';

export function Footer() {

  return (
    <footer className=" flex flex-row justify-center w-full py-6 mt-20 bg-gray-100 text-center text-gray-600 text-sm">
     <Link href="https://github.com/mustafa-asif">
      <FaGithub className="inline mx-2 size-6 hover:text-gray-800" />
     </Link>
     <Link href="https://www.linkedin.com/in/mustafa-asif-warind/">
      <FaLinkedin className="inline mx-2 size-6 hover:text-gray-800" />
     </Link>

      <p className='text-center'>© {new Date().getFullYear()} Mustafa. All rights reserved.</p>
    </footer>
  );
}