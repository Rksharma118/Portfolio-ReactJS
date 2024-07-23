// About.js
export default function About() {
  return (
    <section
      id="about"
      className="px-10 w-full flex flex-col lg:flex-row py-20 max-w-5xl mx-auto border-2 bg-white p-6 rounded-lg shadow-md">
      <div className="flex-1 flex flex-col gap-5 px-6">
        <div>
          <h2 className="text-center text-blue-500 text-5xl font-bold">
            About Me :
          </h2>
        </div>
        <p>
          I am currently pursuing a Bachelor's degree in Electronics and
          Communication Engineering at UIET Chandigarh, Panjab University. My
          coursework has equipped me with a strong foundation in Signal
          Processing, Embedded systems, Computer Networks and Circuit Design.
          <br />
          Alongside my academic pursuits, I have developed proficiency in web
          development technologies. I am proficient in Frontend like HTML, CSS,
          JavaScript, and React.js and in Backend like Nodejs, ExpressJs, EJS,
          RestAPI, PostgreSQL, MongoDB and OAuth. I have hands-on experience in
          building responsive and user-friendly web applications
        </p>
      </div>
    </section>
  );
}
