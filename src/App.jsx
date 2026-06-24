import profilePic from "./assets/profilePic.png";

export default function App() {
  
  const projects = [
    {
      title: "MCBA Banking App",
      description:
        "Enterprise banking platform built with .NET 9, Azure SQL and Clean Architecture.",
      tech: [".NET 9", "Azure SQL", "Clean Architecture"],
    },
    {
      title: "Trainstop Club Portal",
      description:
        "Sports recruitment platform connecting clubs and athletes through smart matching.",
      tech: ["Flutter", "Supabase", "AI"],
    },
    {
      title: "SunSafe AU",
      description:
        "Australian UV tracking application using weather APIs and real-time forecasts.",
      tech: ["Flutter", "Weather API", "Supabase"],
    },
  ];

  return (
    <div className="bg-slate-950 text-white min-h-screen font-sans overflow-x-hidden">

      {/* BACKGROUND GLOWS */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-sky-500/10 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[140px]" />
      </div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur-xl bg-slate-950/70">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="font-bold text-xl">
            <span className="bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent">
              Samitha Gunarathna
            </span>
          </h1>

          <nav className="hidden md:flex gap-8 text-slate-300">
            <a href="#about" className="hover:text-white transition">
              About
            </a>
            <a href="#education" className="hover:text-white transition">
              Education
            </a>
            <a href="#skills" className="hover:text-white transition">
              Skills
            </a>
            <a href="#experience" className="hover:text-white transition">
              Experience
            </a>
            <a href="#projects" className="hover:text-white transition">
              Projects
            </a>
            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </nav>
        </div>
      </header>

      

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <div className="inline-flex border border-white/10 rounded-full px-4 py-2 text-sm text-slate-300 bg-white/5">
              Software Engineer / Developer Programmer • Melbourne, Australia 🇦🇺
            </div>

            <h1 className="mt-8 text-6xl md:text-7xl font-black leading-tight">
              Full-Stack
              <span className="block bg-gradient-to-r from-sky-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Software Engineer
              </span>
            </h1>

            <p className="mt-8 text-xl text-slate-300 leading-relaxed max-w-xl">
              Software Engineer with experience building
              enterprise platforms, microservices architectures,
              cloud solutions and modern web applications across
              multiple industries.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="https://github.com/1samitha1"
                target="_blank"
                rel="noreferrer"
                className="px-7 py-3 rounded-xl bg-green-800 hover:bg-green-500 transition font-medium"
              >
                GitHub
              </a>
            
            <a
                href="https://www.linkedin.com/in/1samz1/"
                target="_blank"
                rel="noreferrer"
                className="px-7 py-3 rounded-xl bg-sky-900 hover:bg-sky-400 transition font-medium"
              >
                LinkedIn
              </a>

              <a
                href="#about"
                className="px-7 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white hover:text-black transition"
              >
                About Me
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-[350px] h-[360px] rounded-3xl bg-gradient-to-br from-sky-500/20 to-purple-500/20 border border-white/10 backdrop-blur-xl flex flex-col items-center justify-center overflow-hidden">

              <img
                src={profilePic}
                alt="Profile"
                className="w-60 h-60 object-cover rounded-2xl border border-white/10"
              />

              <p className="mt-6 text-slate-300">
                Samitha Mihiranga Gunarathna
              </p>

            </div>
          </div>

        </div>
      </section>

      {/* STATS */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-6">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h3 className="text-4xl font-bold text-sky-400">7+</h3>
            <p className="text-slate-400 mt-2">Years Experience</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h3 className="text-4xl font-bold text-purple-400">20+</h3>
            <p className="text-slate-400 mt-2">Professional & Technical Skills</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h3 className="text-4xl font-bold text-pink-400">10+</h3>
            <p className="text-slate-400 mt-2">Technologies</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h3 className="text-4xl font-bold text-green-400">AU</h3>
            <p className="text-slate-400 mt-2">Melbourne Based</p>
          </div>

        </div>
      </section>

      {/* Highlights */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="max-w-3xl mx">
          <div className="rounded-2xl border border-sky-500/20 bg-sky-500/5 p-6 backdrop-blur-xl">
            <p className="text-orange-400 font-semibold">
              Australian Computer Society (ACS) Assessed (2023)
            </p>

            <p className="mt-2 text-slate-300">
              Professionally assessed and recognised as a qualified Software Engineer by
              the Australian Computer Society (ACS).
            </p>
            <br></br>
            <p className="text-red-400 font-semibold">
              Peer Mentor - RMIT University, Australia
            </p>

            <p className="mt-2 text-slate-300">
              Volunteered across two academic semesters during the Master of
              Information Technology program at RMIT University, mentoring fellow students and
              providing academic guidance, study support and assistance in
              navigating university life.
            </p>
          </div>
          
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="max-w-7xl mx-auto px-6 py-12"
      >
        <h2 className="text-5xl font-bold mb-10">
          About Me
        </h2>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
          <p className="text-slate-300 text-lg leading-relaxed">
            Software Engineer with experience building scalable web, cloud and
            enterprise applications across multiple industries. Experienced in
            React, Node.js, TypeScript, .NET, Flutter, MongoDB, SQL databases and
            microservices architecture. Passionate about designing maintainable
            systems, solving complex technical challenges and delivering high-quality
            software in agile environments.
          </p>
        </div>
      </section>

      {/* EDUCATION */}
      <section
        id="education"
        className="max-w-7xl mx-auto px-6 py-12"
      >
        <h2 className="text-5xl font-bold mb-12">
          Education
        </h2>

        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10">

          <div className="border-l-2 border-sky-500 pl-6 space-y-10">

            <div>
              <p className="text-sky-400 font-semibold">2026</p>
              <h3 className="text-2xl font-bold mt-1">
                Master of Information Technology
              </h3>
              <p className="text-slate-400">
                RMIT University, Australia
              </p>
            </div>

            <div>
              <p className="text-sky-400 font-semibold">2021</p>
              <h3 className="text-2xl font-bold mt-1">
                Bachelor of Information Technology
              </h3>
              <p className="text-slate-400">
                University of Moratuwa, Sri Lanka
              </p>
            </div>

            <div>
              <p className="text-sky-400 font-semibold">2017</p>
              <h3 className="text-2xl font-bold mt-1">
                Higher National Diploma in Information Technology
              </h3>
              <p className="text-slate-400">
                Sri Lanka Institute of Advanced Technological Education
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="max-w-7xl mx-auto px-6 py-12"
      >
        <h2 className="text-5xl font-bold mb-12">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Frontend */}
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
            <h3 className="text-xl font-semibold mb-5 text-sky-400">
              Frontend Development
            </h3>

            <div className="flex flex-wrap gap-3">
              {["React.js", "Redux", "HTML", "CSS", "JavaScript"].map((skill) => (
                <span key={skill} className="px-4 py-2 rounded-xl bg-slate-900/40 border border-white/10">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
            <h3 className="text-xl font-semibold mb-5 text-sky-400">
              Backend Development
            </h3>

            <div className="flex flex-wrap gap-3">
              {["Node.js", "Express.js", ".NET", "REST API", "Microservices", "Swagger", "TypeScript"].map((skill) => (
                <span key={skill} className="px-4 py-2 rounded-xl bg-slate-900/40 border border-white/10">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Mobile */}
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
            <h3 className="text-xl font-semibold mb-5 text-sky-400">
              Mobile Development
            </h3>

            <div className="flex flex-wrap gap-3">
              {["Flutter", "React Native"].map((skill) => (
                <span key={skill} className="px-4 py-2 rounded-xl bg-slate-900/40 border border-white/10">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Databases */}
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
            <h3 className="text-xl font-semibold mb-5 text-sky-400">
              Databases
            </h3>

            <div className="flex flex-wrap gap-3">
              {["MongoDB", "Mongoose", "MySQL", "Supabase"].map((skill) => (
                <span key={skill} className="px-4 py-2 rounded-xl bg-slate-900/40 border border-white/10">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Cloud & DevOps */}
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
            <h3 className="text-xl font-semibold mb-5 text-sky-400">
              Cloud & DevOps
            </h3>

            <div className="flex flex-wrap gap-3">
              {["AWS", "Git", "GitHub", "GitLab", "Bitbucket", "CI/CD"].map((skill) => (
                <span key={skill} className="px-4 py-2 rounded-xl bg-slate-900/40 border border-white/10">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
            <h3 className="text-xl font-semibold mb-5 text-sky-400">
              Tools & Collaboration
            </h3>

            <div className="flex flex-wrap gap-3">
              {["Jira", "Confluence", "Figma", "Postman", "MS Teams", "Slack"].map((skill) => (
                <span key={skill} className="px-4 py-2 rounded-xl bg-slate-900/40 border border-white/10">
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Soft Skills */}
        <h2 className="text-5xl font-bold mt-20 mb-12">
          Soft Skills
        </h2>

        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
          <div className="flex flex-wrap gap-3">
            {[
              "Teamwork",
              "Problem Solving",
              "Communication",
              "Leadership",
              "Time Management",
              "Adaptability",
              "Ownership",
              "Attention to Detail",
              "Continuous Learning",
              "Customer Focus"
            ].map((skill) => (
              <span
                key={skill}
                className="px-5 py-3 rounded-xl bg-slate-900/40 border border-white/10 hover:border-sky-400 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </section>

      {/* EXPERIENCE */}
      <section
        id="experience"
        className="max-w-7xl mx-auto px-6 py-12"
      >
        <h2 className="text-5xl font-bold mb-12">
          Professional Experience
        </h2>

        <div className="space-y-8">

          {/* TRAINSTOP */}
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
            <div>
              <h3 className="text-2xl font-bold">
                Full Stack Developer (RMIT University Capstone Project)
              </h3>

              <p className="text-orange-400 mt-1">
                Trainstop Pty Ltd 
                <br></br>
                - Australian Client
              </p>
            </div>

            <p className="text-slate-400 mt-5 leading-relaxed">
              Contributed to the design and development of the Club Portal module
              within the Trainstop mobile application as part of an Agile Scrum
              development team. Collaborated closely with stakeholders, supervisors
              and developers throughout the software development lifecycle to deliver
              scalable cross-platform mobile solutions. Developed and maintained
              Flutter-based features for iOS and Android, implemented backend
              functionality using Supabase, and participated in sprint planning,
              reviews and continuous delivery activities to ensure successful project
              outcomes.
            </p>

            <div className="flex flex-wrap gap-2 mt-6">
              {[
                "Flutter",
                "Supabase",
                "PostgreSQL",
                "iOS",
                "Android",
                "Agile Scrum",
                "Jira",
                "Mobile Development",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-slate-800 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* MOOFLIFE */}
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
            <div className="flex justify-between flex-wrap gap-4">
              <div>
                <h3 className="text-2xl font-bold">
                  Full Stack Software Engineer
                </h3>

                <p className="text-sky-400 mt-1">
                  Mooflife (Pvt) Ltd 
                  <br></br>
                  - US client
                </p>
              </div>
            </div>

            <p className="text-slate-400 mt-5 leading-relaxed">
              Contributed to the development of a modern web platform from the
              ground up, working closely with a small agile team to design,
              implement and maintain scalable business solutions. Developed
              interactive user interfaces, backend services and database
              integrations while participating in the full software development
              lifecycle.
            </p>

            <div className="flex flex-wrap gap-2 mt-6">
              {[
                "React",
                "React Hooks",
                "Node.js",
                "TypeScript",
                "Express",
                "MongoDB",
                "Google APIs",
                "REST APIs",
                "Microservices",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-slate-800 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* BRIDGE TECH */}
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
            <div>
              <h3 className="text-2xl font-bold">
                Senior Software Engineer
                
              </h3>

              <p className="text-purple-400 mt-1">
                Bridge Tech Labs (Pvt) Ltd
                <br></br>
                 - Netherland client
              </p>
            </div>

            <p className="text-slate-400 mt-5 leading-relaxed">
              Played a key role in system design, code reviews, performance
              optimisation and technical leadership across a distributed
              microservices ecosystem. Collaborated with multiple development
              teams, mentored junior engineers and delivered scalable solutions
              using modern frontend and backend technologies.
            </p>

            <div className="flex flex-wrap gap-2 mt-6">
              {[
                "React",
                "Material UI",
                "Node.js",
                "NestJS",
                "MongoDB",
                "MySQL",
                "Microservices",
                "CI/CD",
                "GitHub",
                "GitLab",
                "Jira",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-slate-800 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* 360 DEVELOPMENT */}
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
            <div>
              <h3 className="text-2xl font-bold">
                Software Engineer
              </h3>

              <p className="text-pink-400 mt-1">
                360 Development (Pvt) Ltd
                <br></br>
                 - Netherland client
              </p>
            </div>

            <p className="text-slate-400 mt-5 leading-relaxed">
              Developed and maintained full-stack business applications while
              collaborating with cross-functional teams in agile environments.
              Delivered new features, resolved production issues and contributed
              to both frontend and backend systems with a focus on reliability,
              testing and performance.
            </p>

            <div className="flex flex-wrap gap-2 mt-6">
              {[
                "React",
                "Redux",
                "Node.js",
                "Express",
                "MongoDB",
                "Mongoose",
                "REST APIs",
                "Git",
                "Bitbucket",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-slate-800 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="max-w-7xl mx-auto px-6 py-14"
      >
        <h2 className="text-5xl font-bold mb-12">
          Featured Projects
        </h2>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:-translate-y-2 hover:border-sky-400 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold">
                {project.title}
              </h3>

              <p className="text-slate-400 mt-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-slate-800 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="max-w-7xl mx-auto px-6 pb-24"
      >
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-12 text-center">
          <h2 className="text-5xl font-bold">
            Open to Opportunities & Collaboration
          </h2>

          <p className="text-slate-400 mt-6 text-lg">
            Software Engineer based in Melbourne, focused on building scalable
            mobile, web and cloud systems. Open to full-time roles, contract work,
            and collaboration on impactful software projects.
          </p>

          <div className="mt-8">
            <a
              href="https://github.com/1samitha1"
              target="_blank"
              rel="noreferrer"
              className="inline-block px-8 py-4 rounded-xl bg-sky-900 hover:bg-sky-600 transition"
            >
              Visit GitHub Profile
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8 text-center text-slate-500">
        © 2026 Samitha Gunarathna. All Rights Reserved.
      </footer>

    </div>
  );
}