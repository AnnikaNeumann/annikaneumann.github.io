import React from 'react';
// import './Button.css';
import '../components/css/Home.css';



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

            <section className="about">
            <div>
                    <img className="annika" src={require("../static/annika.png")} alt='Annika has blonde hair and she wears a black jacket. On her shoulder is a white cat.'/>
                    
              <p tabIndex='0' className="aboutshort">
                I'm Annika, a German in Scotland since 2016, accompanied by my cats.<br></br>Embracing creativity in tech, drawing, 
                cooking, and DIY I thrive on<br></br>crafting meaningful experiences.<br></br>With a focus on Frontend development, I've honed skills in JavaScript,<br></br>HTML, CSS, WordPress, 
                SQL databases, and a11y.<br></br>My goal and passion is to make the digital world inclusive and intuitive.
                <br></br> Join this journey where creativity knows no bounds. 
              </p>
              </div>
              <div className='container'>
              {/* <div className='item-1'>
              <button className='pdf_button' tabIndex='0'onClick={()=>{downloadFileAtURL(PDF_FILE_URL)}}>Download my Cv</button>
              </div> */}
              <div>
              {/* <div className='item-2'>
              <a href="https://github.com/AnnikaNeumann" tabIndex='0' target="_blank" rel="noreferrer"><img className="github" src={require("../images/github-sign.png")} alt='Link to Github'/>
              </a>
              </div>
              <div className='item-3'>
              <a href="https://www.linkedin.com/in/annika-neumann-422b98232/" tabIndex='0' target="_blank" rel="noreferrer"><img className="linkedin" src={require("../images/linkedin.png")} alt='Link to LinkedIn'/>
              </a>
              </div> */}
              </div>
              </div>
            </section>
        );
      }
    

export default Home;