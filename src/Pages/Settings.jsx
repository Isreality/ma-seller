// import { Link } from "react-router-dom";
import "../style.css";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import Heading from "../Components/Heading";
import { useState, useEffect } from 'react';
import { FaUsers } from "react-icons/fa";
import { TbCurrencyNaira } from "react-icons/tb";
import { FiBox } from "react-icons/fi";
import { RiListView } from "react-icons/ri";
import { FaCircleUser } from "react-icons/fa6";
import { RxCaretRight } from "react-icons/rx";
import { Link } from 'react-router-dom';
// import Skeleton from 'react-loading-skeleton';

const Settings = () => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
        setLoading(false)
    }, 1000)
  }, [])

    return ( 
        <div>

          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="flex flex-row">
              {/* Sidebar */}
              <div>
                <Sidebar/>
              </div>

              {/* Header */}
              <div className="w-full">
                <div className="mb-4 items-center"><Header title="Settings" link="/Settings"/></div>
                
                <div className="px-8">
                  <div className="mb-4"><Heading title="Settings"/></div>
                </div>
                
                {/* Body */}               
               <div className="border border-disable rounded-md px-10 py-8 mx-8">
                <div className="gap-5 flex flex-col">
                    {/* Manage Profile */}
                    <div className="flex flex-row justify-between bg-fa px-4 py-8 rounded-md">
                        <Link className="md:flex md:flex-row items-center text-md gap-2 text-black2">
                            <FaCircleUser className="text-primary font-xl size-8"/>
                            <p className="text-black2 font-medium">Manage Profile</p>
                        </Link>

                        <div className="flex flex-row items-center sm:ml-96 gap-3">
                            <RxCaretRight className="text-black2 font-medium cursor-pointer size-5"/>
                        </div>
                    </div>

                    {/* Payment Details */}
                    <div className="flex flex-row justify-between bg-fa px-4 py-8 rounded-md">
                        <Link className="md:flex md:flex-row items-center text-md gap-2 text-black2">
                            <FaCircleUser className="text-primary font-xl size-8"/>
                            <p className="text-black2 font-medium">Payment Details</p>
                        </Link>

                        <div className="flex flex-row items-center sm:ml-96 gap-3">
                            <RxCaretRight className="text-black2 font-medium cursor-pointer size-5"/>
                        </div>
                    </div>

                    {/* Change Password */}
                    <div className="flex flex-row justify-between bg-fa px-4 py-8 rounded-md">
                        <Link className="md:flex md:flex-row items-center text-md gap-2 text-black2">
                            <FaCircleUser className="text-primary font-xl size-8"/>
                            <p className="text-black2 font-medium">Change Password</p>
                        </Link>

                        <div className="flex flex-row items-center sm:ml-96 gap-3">
                            <RxCaretRight className="text-black2 font-medium cursor-pointer size-5"/>
                        </div>
                    </div>

                    {/* Delete Account */}
                    <div className="flex flex-row justify-between bg-fa px-4 py-8 rounded-md">
                        <Link className="md:flex md:flex-row items-center text-md gap-2 text-black2">
                            <FaCircleUser className="text-primary font-xl size-8"/>
                            <p className="text-black2 font-medium">Delete Account</p>
                        </Link>

                        <div className="flex flex-row items-center sm:ml-96 gap-3">
                            <RxCaretRight className="text-black2 font-medium cursor-pointer size-5"/>
                        </div>
                    </div>
                </div>  

                </div>
                
              </div>

            </div>
          )}

         
           
        </div>
     );
}
 
export default Settings;
