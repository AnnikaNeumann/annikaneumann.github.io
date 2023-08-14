import React from "react";


const About = () =>{

    
        return (
          <main>
            <section className="about">
            <div>
                    <img className="annika" src={require("../static/annika.png")} alt='Annika has blonde hair and she wears a black jacket. On her shoulder is a white cat.'/>
                    </div>
              <h2 tabIndex='0'>Get to know me</h2>
              <p tabIndex='0'>
                I was born in Germany and lived in the beautiful Black Forest region until
                I moved to Scotland in 2016. I worked for the NHS until February 2022 in administrative roles.
                However, I've always liked being creative, and I was involved with Web Development in my previous job.
                <br></br><br></br>
                I took the leap of faith in 2021 when my friend (a Software Developer) got me intrigued with coding.
                A couple of years ago, I became interested in technology due to my amputation and the need to use an electronic knee joint,
                which works with a microprocessor. Knowing that someone wrote the software controlling my leg gave me an incredible sense of wonder.
                The endless possibilities and instant visual changes sparked my interest in frontend development.
                <br></br><br></br>
                I joined CodeClan to become a Developer myself. Since August 2022, I have been working as a Junior Talend Engineer for a Finance Company in Edinburgh.
                I mainly work with SQL and Oracle Databases in combination with the ETL Tool Talend.
                <br></br><br></br>
                Being passionate and driven about Accessibility and inclusive Design, UI Research, I would love to be part of a team that makes the web content available for everyone. 
                My future goal is to become a member of the IAAP to pass the exam for the core competencies.
                <br></br><br></br>
                I am currently undertaking following courses to expand my knowledge:
                <br></br><br></br>
                "Introduction to Web Accessibility" by WC3 / edx website ( completed and passed) <br></br>
                "Accessibility Fundamentals - Disabilities, Guidelines, and Laws" by deque University
                <br></br>
                (updated on 27rd June 2023)
                
              </p>
              <h3 tabIndex='0'>What I enjoy in my offline time</h3>
              <p tabIndex='0'>
                Riding my Vespa motorscooter or reading gory novels about forensic pathology and horror. I love everything movie related from going to the cinema, to attending 
                Star Trek or Comic Conventions and Film Festivals. I love spending time in nature and at the beach. I am also involved voluntarily in the Foodsharing 
                community of Edinburgh. Because I am not using actual programming languages in my daily workload,
                I'm always aiming to keep my JavaScript/React knowledge up to date with little side projects and looking into courses online.
              </p>
            </section>
          </main>
        );
      }
    

export default About;