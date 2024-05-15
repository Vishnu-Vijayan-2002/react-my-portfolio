import React, { useRef, useState } from 'react'
import './Home.css'
import Loader from './../Loader/Loader';
import  emailjs  from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Home() {
  const form = useRef();

  const [loader, setLoader] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    let user_name = document.forms["myForm"]["user_name"].value;
    let from_name = document.forms["myForm"]["from_name"].value;
    let message = document.forms["myForm"]["message"].value;
    // console.log(from_name);
    if (user_name == "") {
      toast.error("You should enter Name ", {
        position: "bottom-center",
      });
      return false;
    } else if (from_name == "") {
      toast.error("You should enter Email", {
        position: "bottom-center",
      });
      return false;
    // } else if (subject == "") {
    //   toast.error("You should enter Subject", {
    // //     position: "bottom-center",
    // //   });
    //   return false;
    } else if (message == "") {
      toast.error("You should enter Message", {
        position: "bottom-center",
      });
      return false;
    }

  setLoader(true);

  emailjs
    .sendForm("service_fd5kg1m", "template_901v1v7", form.current, {
      publicKey: "lUmI5slkEgdP6ewCp",
    })
    .then(
      () => {
        console.log("SUCCESS!");
        toast.success("Email sent",);
        setLoader(false);
      },
      (error) => {
        toast.error("FAILED...");
        setLoader(false);
      }
    );
};

  return (
  
    <div>
      <div className='row'>
        <div className='col lg 6 profile-img'>
         <img className='img-fluid profile-img' src="/home.png" alt="" />
        </div>
        <div id='#about' className='col lg 6 profile-content'>
         <h2>Hello !</h2>
         <h1>Vishnu Vijayan</h1>
         <p className='content'>I'm a proficient Full Stack web developer adept in both front-end and back-end development, committed to crafting seamless digital experiences. Please feel free to peruse my CV to get a glimpse of my portfolio and previous endeavors.</p>
         <button className='btn btn-primary'><a href='Vishnu vijayanResume.pdf' className='download-btn' download={'Vishnu vijayanResume.pdf'}>Download CV</a> </button>
        </div>
        {/* projects */}
        <div id='experience' style={{marginTop:'160px'}} className='container'>
            <div className='project-header'>
                <h1 className='text-center'>PROJECTS</h1>
                <div className='project-title-underline'></div>
            </div>
            <div className='main-card-session'>
             <div className='row'>
               <div className='col lg 6'>
                  <div className='projects-cards-session'>
                      <div className='projects-cards'>
                          <div className='projects-cards-img'>
                           <img className='img-fulid card-img' src="https://static.vecteezy.com/system/resources/thumbnails/011/153/363/small_2x/3d-web-developer-working-on-project-illustration-png.png" alt="" />
                          </div>
                          <div className='projects-cards-content'>
                          <p className='cards-content'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus recusandae exercitationem dolor reiciendis culpa! Dolorem explicabo eligendi veritatis sapiente, omnis labore quaerat iusto molestias excepturi soluta nobis error vero rem!</p>
                          <button className='btn btn-primary'>Go to View</button>
                          </div>
                      </div>
                  </div>
               </div>
                <div className='col lg 6'>
                  <div className='projects-cards-session'>
                      <div className='projects-cards'>
                          <div className='projects-cards-img'>
                           <img className='img-fulid card-img' src="https://static.vecteezy.com/system/resources/thumbnails/011/153/363/small_2x/3d-web-developer-working-on-project-illustration-png.png" alt="" />
                          </div>
                          <div className='projects-cards-content'>
                          <p className='cards-content'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus recusandae exercitationem dolor reiciendis culpa! Dolorem explicabo eligendi veritatis sapiente, omnis labore quaerat iusto molestias excepturi soluta nobis error vero rem!</p>
                          <button className='btn btn-primary'>Go to View</button>
                          </div>
                      </div>
                  </div>
                </div>
             </div>
             <div style={{marginTop:'-40px'}} className='row'>
               <div className='col lg 6'>
                  <div className='projects-cards-session'>
                      <div className='projects-cards'>
                          <div className='projects-cards-img'>
                           <img className='img-fulid card-img' src="https://static.vecteezy.com/system/resources/thumbnails/011/153/363/small_2x/3d-web-developer-working-on-project-illustration-png.png" alt="" />
                          </div>
                          <div className='projects-cards-content'>
                          <p className='cards-content'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus recusandae exercitationem dolor reiciendis culpa! Dolorem explicabo eligendi veritatis sapiente, omnis labore quaerat iusto molestias excepturi soluta nobis error vero rem!</p>
                          <button className='btn btn-primary'>Go to View</button>
                          </div>
                      </div>
                  </div>
               </div>
                <div className='col lg 6'>
                  <div className='projects-cards-session'>
                      <div className='projects-cards'>
                          <div className='projects-cards-img'>
                           <img className='img-fulid card-img' src="https://static.vecteezy.com/system/resources/thumbnails/011/153/363/small_2x/3d-web-developer-working-on-project-illustration-png.png" alt="" />
                          </div>
                          <div className='projects-cards-content'>
                          <p className='cards-content'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus recusandae exercitationem dolor reiciendis culpa! Dolorem explicabo eligendi veritatis sapiente, omnis labore quaerat iusto molestias excepturi soluta nobis error vero rem!</p>
                          <button className='btn btn-primary'>Go to View</button>
                          </div>
                      </div>
                  </div>
                </div>
             </div>
            </div>
        </div>
      </div>
      {/* skills */}
      <div id='projects' style={{marginTop:'100px'}} className='project-header'>
                <h1 className='text-center'> Expertise</h1>
                <div className='skill-title-underline'></div>
            </div>
            <div className='skill-card-sec'>
               <div className='skill-container'>
               <div className='skill-card-body'>
                <img src="/react.png" alt="" className="skill-card-logo img-fluid" />
                React
              </div>
              </div>
              <div className='skill-container'>
               <div className='skill-card-body'>
                <img src="/mongodb.png" alt="" className="skill-card-logo img-fluid" />
                Mongodb
              </div>
              </div>
              <div className='skill-container'>
               <div className='skill-card-body'>
                <img src="/express.png" alt="" className="skill-card-logo img-fluid" />
                Express
              </div>
              </div>
              <div className='skill-container'>
               <div className='skill-card-body'>
                <img style={{paddingBottom:'8px'}} src="/redux.png" alt="" className="skill-card-logo img-fluid" />
                Redux
              </div>
              </div>
              <div className='skill-container'>
               <div className='skill-card-body'>
                <img src="/postman.png" alt="" className="skill-card-logo img-fluid" />
                Postman
              </div>
              </div>
              <div className='skill-container'>
               <div className='skill-card-body'>
                <img src="/jwt.png" alt="" className="skill-card-logo img-fluid" />
                JWT
              </div>
              </div>
              <div className='skill-container'>
               <div className='skill-card-body'>
                <img src="/javascript.png" alt="" className="skill-card-logo img-fluid" />
               JavaScript
              </div>
              </div>
              <div className='skill-container'>
               <div className='skill-card-body'>
                <img src="/git.png" alt="" className="skill-card-logo img-fluid" />
               Git
              </div>
              </div>
              <div className='skill-container'>
               <div className='skill-card-body'>
                <img src="/css.png" alt="" className="skill-card-logo img-fluid" />
               CSs
              </div>
              </div>
              <div className='skill-container'>
               <div className='skill-card-body'>
                <img src="/bootstrap.png" alt="" className="skill-card-logo img-fluid" />
               BootStrap
              </div>
              </div>
              <div className='skill-container'>
               <div className='skill-card-body'>
                <img src="/html.png" alt="" className="skill-card-logo img-fluid" />
               HTML
              </div>
              </div>
              <div className='skill-container'>
               <div className='skill-card-body'>
                <img src="/react-bootstrap.png" alt="" className="skill-card-logo img-fluid" />
               React-Bootstrap
              </div>
              </div>
              <div className='skill-container'>
               <div className='skill-card-body'>
                <img src="/figma.png" alt="" className="skill-card-logo img-fluid" />
               Figma Design
              </div>
              </div>
              <div className='skill-container'>
               <div className='skill-card-body'>
                <img src="/node.png" alt="" className="skill-card-logo img-fluid" />
               Node Js
              </div>
              </div>
              <div className='skill-container'>
               <div className='skill-card-body'>
                <img src="/axios.png" alt="" className="skill-card-logo img-fluid" />
               Axios
              </div>
              </div>
            </div>
            <div
          className="contact-sec"
        >
          <div className="contact-sec-left-body" id="contact-sec">
            <div className="contact-sec-title-1">
              {/* CONTACT US */}
              CONNECT ME{" "}
            </div>
            <div className="contact-sec-title-2">
              {" "}
              Let's talk <br /> about you
            </div>
          </div>
          <div className="contact-sec-right-body">
            <form action="" className="form-sec" ref={form} name="myForm">
              <div className="form-title"> Send me a Message</div>
              <div className="form-input-field-sec">
                Full Name
                <input
                  type="text"
                  className="form-input-field"
                  required
                  name="user_name"
                />
              </div>
              <div className="form-input-field-sec">
                Email
                <input
                  type="text"
                  className="form-input-field"
                  required
                  name="from_name"
                />
              </div>
              {/* <div className="form-input-field-sec">
                Subject
                <input
                  type="text"
                  className="form-input-field"
                  required
                  name="subject"
                />
              </div> */}
              <div className="form-input-field-sec">
                Your message here
                <input
                  type="text"
                  className="form-input-field"
                  required
                  name="message"
                />
              </div>
              {loader == false ? (
                <button className="form-send-btn" onClick={sendEmail}>
                  <>
                    Send{" "}
                    <img src="/send.png" alt="" className="form-btn-icon" />
                  </>
                </button>
              ) : (
                <>
                  <Loader />
                </>
              )}
            </form>
          </div>       
        </div>
        <p className='text-center rights'> © 2024 All Rights Reserved</p>
        <ToastContainer position='top-center' theme='colored' autoClose={3000}/>
           </div>
  )
}

export default Home
