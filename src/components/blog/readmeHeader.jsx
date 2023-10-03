import React from 'react';
import { Navbar } from '../NavModule/Navbar';
import bannerImage from '../../images/banner.jpg';
function ReadmeHeader() {
  return (
    <>
    <Navbar/>
    <section className="relative flex items-center bg-gradient-to-l from-opacity-10 via-opacity-30 to-opacity-100 bg-cover bg-center bg-no-repeat">
      <div className="w-1/2 p-16">
        {/* Content */}
        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Let us find your
            <strong className="block font-extrabold text-rose-700">
              Github Readme?
            </strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl/relaxed text-white">
            Explore fancy Github readme and feel free to share yours!
          </p>

          <div className="mt-8 md:ml-16 flex flex-wrap gap-4 text-center">
            <a
              href="https://github.com/Ghat0tkach/FirstPR/tree/main/readme"
              className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              target='_blank'
            >
              Get Started
            </a>

            <a
              href="https://hacktoberfest.com/"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
              target='_blank'
            >
              Register For HacktoberFest
            </a>
          </div>
        </div>
      </div>

      <div className="w-1/2 mt-8">
        {/* Banner */}
        <div className="bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bannerImage})`, paddingTop: '50%', marginTop: '10%' }}></div>
      </div>
    </section>
    </>
  );
}

export default ReadmeHeader;
