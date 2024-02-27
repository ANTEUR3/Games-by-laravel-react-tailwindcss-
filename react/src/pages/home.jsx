import "bootstrap/dist/css/bootstrap.min.css";

import english from "../assets/img/english.png";
import map from "../assets/img/map.png";
import mathematic from "../assets/img/mathematic.png";
import sport from "../assets/img/sport.png";
import { Link } from "react-router-dom";

export default function Home() {


    return (
        <>

<div className=" grid lg:grid-cols-2  grid-cols-1  w-4/5   md:h-1/2 h-full      mx-auto   mt-10">
    <Link to={'/Mathematic'} className="col-span-1 mb-4 ">
      <div href="#" className="py-8 mx-auto flex flex-col items-center bg-white   rounded-lg  md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={mathematic}  />
          <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold hover:text-orange-600 tracking-tight text-gray-900 dark:text-white">Numbers and arithmetic</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          </div>
      </div>
      </Link>
    <Link to={'/myCv'} className="col-span-1 mb-4">
      <div href="#" className="py-8 mx-auto flex flex-col items-center bg-white hover:bg-gray-100   rounded-lg  md:flex-row md:max-w-xl  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={map} />
        <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold hover:text-orange-600 tracking-tight text-gray-900 dark:text-white">Maps and countries</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        </div>
    </div>
    </Link>
    <Link to={'/myCv'} className="col-span-1 mb-4">
      <div href="#" className="py-8 mx-auto flex flex-col items-center bg-white   rounded-lg  md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={sport} />
          <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold hover:text-orange-600 tracking-tight text-gray-900 dark:text-white">sport</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          </div>
      </div>
      </Link>
    <Link to={'/myCv'} className="col-span-1 mb-4">
      <div href="#" className="py-8 mx-auto flex flex-col items-center bg-white   rounded-lg  md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={english} />
        <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold hover:text-orange-600 tracking-tight text-gray-900 dark:text-white">english</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        </div>
    </div>
    </Link>
  </div>

        </>
    );
}
