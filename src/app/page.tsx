import Image from 'next/image';

import CategoryList from '@/components/categorylist.tsx';
import Footer from '@/components/footer.tsx';
import Navbar from '@/components/navbar.tsx';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Image
        src="/wallpaper.svg"
        alt="logo"
        width={200}
        height={200}
        className="w-full"
      />
      <p className="my-4 ml-4 text-lg font-bold">Browse By Category</p>
      <CategoryList />
      <p className="my-4 ml-4 text-lg font-bold">Popular Packages</p>
      <p className="text-center text-lg ">
        Dive into our inclusive event packages and let’s craft unforgettable
        memories together!!!
      </p>
      <Footer />
    </div>
  );
};

export default Home;
