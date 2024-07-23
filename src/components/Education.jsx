
const Education = () => {
  return (
    <section id="education" className="py-12 my-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-center text-blue-500 mb-6">
          Education
        </h2>
        <div className="flex flex-wrap -mx-4">
          {/* Education Item 1 */}
          <div className="w-full md:w-1/2 px-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                UIET , Chandigarh
              </h3>
              <p className="text-lg text-gray-700 mb-2">
                Bachelor of Engineering in ECE
              </p>
              <p className="text-sm text-gray-600">
                Dec 2021 - Present
              </p>
              <p className="text-sm py-2 text-gray-600">
               CGPA - 8.45
              </p>
            </div>
          </div>

          {/* Education Item 2 */}
          <div className="w-full md:w-1/2 px-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Aadarsh High School
              </h3>
              <p className="text-lg text-gray-700 mb-2">
                Higher Education 
              </p>
              <p className="text-sm text-gray-600">
                July 2018 - May 2020
              </p>
              <p className="text-sm py-2 text-gray-600">
               Percentage -83.20%
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Shree Krishna Public Sr. Sec. School
              </h3>
              <p className="text-lg text-gray-700 mb-2">
                Secondary Education 
              </p>
              <p className="text-sm text-gray-600">
                July 2006 - April 2018
              </p>
              <p className="text-sm py-2 text-gray-600">
               Percentage - 92.33%
              </p>
            </div>
          </div>

          {/* Add more education items as needed */}
        </div>
      </div>
    </section>
  )
}

export default Education
