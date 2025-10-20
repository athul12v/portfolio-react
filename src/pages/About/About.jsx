import HeroImg from "@/assets/images/hero.jpg";
import codeAV from "@/assets/images/codeAV.png";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Developer, Architect, Coder, Futurist
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
              Hi, I'm Athul V, a developer focused on crafting smart, scalable, and efficient solutions.  
              I specialize in AI/ML, Linux, React, Android Development, and backend technologies.  
              My goal is to transform innovative concepts into practical applications, streamlining development to make it faster, more efficient, and accessible to all.{" "}
              <br></br>
              <span className="font-bold text-white">As the creator of Deep-Note Plus,</span> I’m dedicated to simplifying development workflows.
              </p>
              
              <p className="text-white">
              I’m the creator of Deep-Note Plus, a project aimed at empowering developers with AI-driven tools to boost productivity and streamline workflows. 
              Currently, I’m advancing my expertise in AI/ML, LLM, and NLP, focusing on developing intelligent systems and 
              exploring the latest innovations in the AI landscape, while also enhancing my skills in building scalable, high-performance applications.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    I'm a lifelong learner and innovator, driven by a desire to
                    contribute to the developer community with new ideas and
                    tools that deliver real value. As the creator of Deep-Note Plus,
                    I'm pushing the boundaries of AI/ML frameworks to
                    empower developers worldwide.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Athul V
                    </cite>
                    <div className="flex items-center gap-2">
                      <img
                        className="h-5 w-fit"
                        src={codeAV}
                        alt="Codewith AV logo"
                        height="20"
                        width="auto"
                      />
                      {/* <span className="text-white">Codewith AV</span0> */}
                      <span className="text-white font-semibold text-2XL tracking-wide" style={{ fontFamily: "'Poppins', sans-serif" }}>
  Codewith AV
</span>




                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
