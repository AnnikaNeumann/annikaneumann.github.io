import React from "react";


const About = () =>{


    return(
        
        <div className="flex-about">
        <div className="about">
        <div><img className="annika" src={require("../images/annika.jpg")} alt='annika'/></div>


        <h3>Get to know me</h3><p>I've always liked being creative. I was involved with Web Development in my previous job, 
        and I took the leap of faith in 2021 when my partner (a Software Developer) got me intrigued with coding.
        <br></br><br></br>A couple of years ago, I became interested in technology due to my amputation and the need to use an electronic knee joint,
        which works with a microprocessor. Knowing that someone wrote the software 
        controlling my leg gave me an incredible sense of wonder. <br></br><br></br> 
        The endless possibilities and instant visual changes sparked my interest in frontend development, 
        and I signed up to become a developer myself. I am keen on working with React/Javascript to be able to create everything required for 
        both front and backend development. 
        I have taken the CodeClan journey to change my career and be challenged by various new opportunities.
        <br></br><br></br>I was born in Germany and lived in the beautiful Black Forest region, which (prepare yourself for a fun fact!) 
        is known for the <a href="https://www.atlasobscura.com/places/worlds-largest-cuckoo-clock">World's largest Cuckoo Clock</a> and the Black Forest Gateau! For the past 20 years, I have worked in different roles within
        the health sector in Germany and Switzerland. 
        These provided me with excellent interpersonal skills and the discipline to work within deadlines. These roles also required creative 
        thinking and quick problem-solving. <br></br><br></br>However, I always knew that I wanted to live in other places, and so Ireland became my home from 2006-to 2007.
        I got interested in Scotland, and it wasn't until 2009 that I'd spent my first holidays there and decided to move over with my beloved cats in 2016.  
        <br></br><br></br>Ever since, I have worked for the NHS Lothian in administrative roles, which I believe prepared me with excellent interpersonal skills 
        and the ability to work with deadlines and approach problem solving for my future career as a Software Developer.
        <h3>What I enjoy besides coding</h3>
        Riding my Vespa motorscooter, practising my British Sign Language Skills (Level 2), attending Star Trek/ Comic Conventions, Film Festivals, 
        spending time in nature, and fostering rescue cats in need of a new furrever home.</p>
        </div>
        </div>
        

        
    )

}

export default About;