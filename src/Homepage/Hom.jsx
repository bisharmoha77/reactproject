import Home from "./pass/Home"
import React from "react"
import { Link } from "react-router-dom"
function Header(){

    return(
        <>
    <div className="bg-white font-sans">
  
      <header className="flex justify-between items-center px-8 py-6">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
          <span className="font-bold text-xl">Hodan</span>
        </div>

        {/* <nav link> className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <a href="#" className="hover:text-orange-500">
            Menu
          </a>
          <a href="#" className="hover:text-orange-500">
            Events
          </a>
          <a href="#" className="hover:text-orange-500">
            Gallery
          </a>
          <a href="#" className="hover:text-orange-500">
            About
          </a>
          <a href="#" className="hover:text-orange-500">
            Contact
          </a>
        </nav> */}
        <nav>
             <ul className="flex gap-10">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Foods">Foods</Link></li>
        <li><Link to ="/About">About</Link></li>
                <li><Link to ="/Contact">Contact</Link></li>
            </ul>
        </nav>

        <a
          href="#"
          className="bg-orange-500 text-white px-5 py-2 rounded-xl shadow-md hover:bg-orange-600"
        >
          Book a table
        </a>
      </header>

     
      <section className="grid md:grid-cols-2 gap-8 px-8 py-16 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
            We provide the <br /> best food for you
          </h1>
          <p className="text-gray-500 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="bg-gray-900 text-white px-5 py-3 rounded-lg hover:bg-gray-700"
            >
              Menu
            </a>
            <a
              href="#"
              className="bg-orange-500 text-white px-5 py-3 rounded-lg hover:bg-orange-600"
            >
              Book a table
            </a>
          </div>
          <div className="flex space-x-4 pt-4 text-gray-600 text-xl">
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        <div className="relative ml-30" >
          <img
            src="https://i.pinimg.com/736x/01/56/c1/0156c1d271f4f684b6c8a14615208057.jpg"
            alt="Restaurant interior"
            className="rounded-3xl shadow-lg h-[500px] w-[400px]"
          />
          <img
            src="https://i.pinimg.com/736x/52/1a/01/521a01d28f8bc09a8042ee20a0f6451c.jpg"
            alt="Food plate"
            className="absolute -bottom-12 -left-12 w-48 top-30 rounded-2xl shadow-xl"
          />
        </div>
      </section>
    </div>


        </>
    )
}
export default Header