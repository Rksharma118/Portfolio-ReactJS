// Projects.
import {
  BrowserRouter, Routes,
  Route, Link
} from 'react-router-dom'
import Project1 from './Projects/Project1';
import image2 from "../assets/Screenshot (69).png";
export default function Projects() {
  return (
    <section
      id="projects"
      className="my-20 w-full flex flex-col gap-5 align-center max-w-5xl mx-auto"
    >
      <h2 className="text-5xl text-blue-500 font-bold text-center">
        My Projects
      </h2>
      <div
        className="p-10 bg-slate-200 rounded flex flex-col justify-center items-center 
							gap-5 lg:flex-row max-w-5xl mx-auto shadow transition 
							hover:shadow-xl hover:scale-[102%] w-full"
      >
        <div className="w-80 rounded">
          <a href="/Project1" className="w-full h-full">
            <img
              src={image2}
              alt="Project 1"
              className=" bg-cover rounded h-21 w-21"
            />
          </a>
        </div>
        <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
          <h2 className="font-bold text-3xl text-center px-4">
            <div >
            Calculator
               </div>
          </h2>
          <p className="px-20">
            A web-based calculator app built using HTML, CSS, and JavaScript.
            Allows users to perform basic arithmetic operations with a clean and
            intuitive user interface.
            <p className="font-bold">Technologies: </p>
            <span>Frontend: HTML, CSS for structure and styling.</span>
            <p>
              JavaScript: Implemented logic for handling user inputs and
              performing calculations.
            </p>
          </p>
        </div>
      </div>
      <div
        className="p-10 bg-slate-200 rounded flex flex-col justify-center items-center gap-5 
							lg:flex-row-reverse max-w-5xl mx-auto shadow transition hover:shadow-xl 
							hover:scale-[102%] w-full"
      >
        <div className="w-80 rounded">
          <a
            href="https://www.geeksforgeeks.org/15-puzzle-game-using-reactjs/"
            className="w-full h-full"
          >
            <img
              src="./src/assets/img2.png"
              alt="Project 2"
              className=" bg-cover rounded h-21 w-21 border-solid border-slate-400 border-2"
            />
          </a>
        </div>
        <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
          <h2 className="font-bold text-3xl text-center">
            <a
              className="hover:underline"
              href="https://www.geeksforgeeks.org/15-puzzle-game-using-reactjs/"
            >
              Real Time Chat App
            </a>
          </h2>
          <p>
            A real-time chat application using Node.js and Socket.IO to
            facilitate instant messaging between users.
            <p className="font-bold">Technologies: </p>
            <span>
              <p> Backend: Node.js, Express.js for RESTful API development.</p>
              <p>
                Real-Time Communication: Socket.IO for bi-directional
                communication between clients and the server.
              </p>
              <p>
                Frontend: HTML, CSS, JavaScript for building the user interface.
              </p>{" "}
            </span>
          </p>
        </div>
      </div>
      <div
        className="p-10 bg-slate-200 rounded flex flex-col justify-center items-center 
							gap-5 lg:flex-row max-w-5xl mx-auto shadow transition 
							hover:shadow-xl hover:scale-[102%] w-full"
      >
        <div className="w-80 rounded">
          <a href="/Project1" className="w-full h-full">
            <img
              src="./src/assets/image.png"
              alt="Project 1"
              className=" bg-cover rounded h-21 w-21 border-solid border-slate-400 border-2"
            />
          </a>
        </div>
        <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
          <h2 className="font-bold text-3xl text-center px-4">
            <a className="hover:underline" href="#project1">
              Weather API
            </a>
          </h2>
          <p className="px-20">
            A web application that fetches and displays current weather
            information for a specified location using a Weather API.
            <p className="font-bold">Technologies: </p>
            <span>
              {" "}
              Backend: Node.js, Express.js for server-side development.
            </span>
            <p>Frontend: EJS for templating and dynamic content rendering.</p>
            <p>
              API Integration: Integrated with a OpenWeather API to fetch
              real-time weather data.
            </p>
          </p>
        </div>
      </div>
    </section>
  );
}
