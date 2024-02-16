import Image from "next/image";
import { techStack } from "../lib/techStackConstants";

export const tabContents = {
  "ABOUTME.md": (
    <div className="mx-3">
      <p className="italic text-gray-700">{`// Here goes about me tab`}</p>
      <p className="text-cyan-500 font-bold text-sm"># ME</p>
      <p className="text-white text-sm">
        Hi there! I am Giorgi Shatirishvili, a dedicated frontend developer with
        a knack for crafting immersive user experiences. With a solid foundation
        in JavaScript and expertise in React and Next.js, I thrive on turning
        ideas into polished, dynamic web applications. I am deeply passionate
        about clean code, intuitive designs, and staying at the forefront of
        emerging web technologies.
      </p>
      <br />
      <p className="text-cyan-500 font-bold text-sm">## Experience</p>
      <p className="text-white text-sm">
        I have 4 years of experience in frontend development. My projects range
        from building interactive web interfaces to optimizing performance and
        scalability. In addition to frontend work, I bring valuable full-stack
        capabilities to the table. I am proficient in Node.js and have hands-on
        experience with Express and MongoDB, enabling me to contribute
        effectively to backend development tasks and deliver end-to-end
        solutions.
      </p>
      <br />
      <p className="text-cyan-500 font-bold text-sm">## Currently Seeking:</p>
      <p className="text-white text-sm">
        I am actively seeking opportunities to leverage my skills and expertise
        in a collaborative and innovative environment. Whether it is building
        captivating user interfaces or architecting robust backend systems, I am
        eager to tackle new challenges and make meaningful contributions to
        impactful projects.
      </p>
      <br />
      <p className="text-cyan-500 font-bold text-sm">## Let{"'"}s Connect:</p>
      <p className="text-white text-sm">
        I am always open to connecting with fellow developers, designers, and
        tech enthusiasts. Whether you are looking to discuss industry trends,
        explore potential collaborations, or simply exchange ideas, feel free to
        reach out! Let{"'"}s connect and inspire each other to push the
        boundaries of what is possible in web development.
      </p>
    </div>
  ),
  "skills.json": (
    <div className="mx-3 w-auto">
      <p className="italic text-gray-700">{`// My skill set`}</p>
      <p className="text-blue-300 text-sm">{"["}</p>
      {techStack.map((skill) => {
        if (skill) {
          return (
            <div key={skill.name}>
              <p className="text-blue-300 text-sm indent-4">{"{"}</p>
              <p className="text-cyan-500 text-sm indent-8">
                name:
                <span className="text-lime-300">
                  {'"'}
                  {skill.name}
                  {'",'}
                </span>
              </p>
              <p className="text-cyan-500 text-sm indent-8">
                level:
                <span className="text-lime-300">
                  {'"'}
                  {skill.level}
                  {'",'}
                </span>
              </p>
              <p className="text-blue-300 text-sm indent-4">{"},"}</p>
            </div>
          );
        }
      })}
      <p className="text-blue-300 text-sm">{"]"}</p>
    </div>
  ),
  "my-pic.png": (
    <div className="flex items-center justify-center h-full">
      <Image
        src="/assets/images/my-pic.png"
        alt="shatira"
        priority
        width={223}
        height={300}
      />
    </div>
  ),
};
