import React from 'react';
import '../components/css/Home.css';
import '../components/css/Button.css';



const PDF_FILE_URL = 'http://localhost:3000/cv_ANeumann.pdf';


const Home = () =>{


  const downloadFileAtURL=(url)=>{
    const fileName = url.split('/').pop();
    const aTag = document.createElement('a');
    aTag.href = (url);
    aTag.setAttribute('download',fileName);
    aTag.click();
  }
        return (
          <main id="main-content">

          <section className="about">
  <div className="flex-container">
    <div className="flex-item">

      <img className="annika" src={require("../static/annika.png")} alt='Annika has blonde hair and she wears a black jacket. On her shoulder is a white cat.'/>
    </div>
    <div className="flex-item">
      <p tabIndex='0' className="aboutshort" >
        I'm Annika, a German in Scotland since 2016, accompanied by my cats.<br></br>Embracing creativity in tech, drawing,
        cooking, and DIY I thrive on crafting meaningful experiences.<br></br><br></br>With a focus on Frontend development in my time outside of work, I've honed my skills in JavaScript,<br></br>HTML, CSS, React and a basics of WordPress Development as well as Fundamentals of Accessibility.<br></br>My goal and passion is to make the digital world inclusive and intuitive.<br></br><br></br>
        My daily workload as a Talend Enginner focuses strongly on the usage of SQL and Oracle Databases, in which I have gained a good understanding since I started the job in August 2022.<br></br><br></br> This portfolio is fun project where I am aiming to gradually add more accessible related features, according 
        to my own best knowledge and accordingly to the WCAG Standards. Explore the content without your mouse or use a screen reader (tested with the Chrome extension).
        Join this journey where creativity knows no bounds.
        <br></br>
      </p>
      <div className='button-container'>
        <button className='pdf_button' type="button" tabIndex='0' onClick={()=>{downloadFileAtURL(PDF_FILE_URL)}}>Download my Cv</button>
        <div className='social-links'>
          <a href="https://github.com/AnnikaNeumann" tabIndex='0' target="_blank" rel="noreferrer"><img src={require("../images/github-sign.png")} alt='Link to Github'/></a>
          <a href="https://www.linkedin.com/in/annika-neumann-422b98232/" tabIndex='0' target="_blank" rel="noreferrer"><img src={require("../images/linkedin.png")} alt='Link to LinkedIn'/></a>
        </div>
      </div>
    </div>
  </div>
</section>
</main>
        );
      }
    

export default Home;