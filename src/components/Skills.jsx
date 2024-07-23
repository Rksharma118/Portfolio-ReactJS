// Skills.js
export default function Skills() {
	const skills = ["Python", "HTML", "CSS", "Javascript", "React", "ExpressJS","Rest API","OAuth","PostgreSQL","MongoDB"];
	return (
		<section id="skills"
			className="px-10 w-full my-10 max-w-5xl mx-auto">
			<h2 className="text-center text-5xl text-blue-500 font-bold">
				My Skills...
			</h2>
			<div className="mt-10 flex gap-6 justify-center 
							flex-wrap mx-auto max-w-xl">
				{skills.map((skill, index) => {
					return (
						<div key={index}
							className="cursor-pointer px-6 py-5 
										rounded-full bg-gray-200 text-lg 
										flex items-center justify-center 
										font-bold hover:shadow-xl">
							{skill}
						</div>
					)})}
			</div>
		</section>
	)
}
