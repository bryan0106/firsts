import React, { useState, useEffect } from 'react';
import './App.css';
import './navbar.css';
import './botnav.css';
import './section.css';
import './educ.css';
import './work.css';
import './contact.css';

interface FrontLoadPageProps {
    children: React.ReactNode;
    loadingText?: string;
}

const FrontLoadPage: React.FC<FrontLoadPageProps> = ({ children, loadingText = 'Loading...' }) => {
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);
    let intervalId: number | null = null;
    const totalLoadingTime = 10000;
    const progressIncrement = 10;
    const numberOfIntervals = Math.ceil(100 / progressIncrement);
    const actualIntervalDelay = totalLoadingTime / numberOfIntervals;

    useEffect(() => {
        intervalId = window.setInterval(() => {
            setProgress((prevProgress) => {
                const newProgress = prevProgress + progressIncrement;
                if (newProgress >= 100) {
                    clearInterval(intervalId || undefined);
                    return 100;
                }
                return newProgress;
            });
        }, actualIntervalDelay);

        const timeout = setTimeout(() => {
            setLoading(false);
        }, totalLoadingTime);

        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
            clearTimeout(timeout);
        };
    }, [totalLoadingTime, actualIntervalDelay, progressIncrement]);

    return (
        <>
            {loading ? (
                <div className="front-load-page-overlay">
                    <div className="profile-container">
                        <img
                            src="/unnamed.png"
                            alt="Bryan Dalawam"
                            className="profile-picture"
                        />
                        <h1 className="profile-name">Bryan Dalawampu</h1>
                        <p className="profile-career">Junior Web Developer</p>
                        <div className="loading-text">{loadingText}</div>
                        <div className="progress-bar-container">
                            <div className="progress-bar-background">
                                <div
                                    className="progress-bar-fill"
                                    style={{ width: `${progress}%` }}
                                ></div>
                            </div>
                            <div className="progress-text">
                                {progress < 100 ? `Loading: ${progress}%` : 'Loaded!'}
                            </div>
                        </div>
                    </div>
                    <div className="contact-info">
                        <div className="contact-details">
                            <p>Contact: +63994165901</p>
                        </div>
                        <div className="social-icons">
                            <a
                                href="https://www.facebook.com/bdalawampu"
                                className="icon-link"
                                aria-label="Facebook"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src="/fb.png" alt="Facebook" className="social-icon" />
                            </a>
                            <a
                                href="https://www.instagram.com/yourusername"
                                className="icon-link"
                                aria-label="Instagram"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src="/inst.png" alt="Instagram" className="social-icon" />
                            </a>
                            <a
                                href="https://www.tiktok.com/@yourusername"
                                className="icon-link tiktok-bg"
                                aria-label="TikTok"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src="/tiktok.png" alt="TikTok" className="social-icon" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/yourprofileurl"
                                className="icon-link"
                                aria-label="LinkedIn"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src="/link.png" alt="LinkedIn" className="social-icon" />
                            </a>
                        </div>
                    </div>
                    <div className="contact-info2">
                        <div className="contact-details">
                            <p>Email: dalawampubryan06@gmail.com</p>
                        </div>
                        <div className="social-links">
                            <a href="[GitHub Link]">GitHub</a>
                        </div>
                    </div>
                </div>
            ) : (
                children
            )}
        </>
    );
};

// Main App Component
const App = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [activeSection, setActiveSection] = useState('about'); // State to track the active section
    const [activeWork, setactiveWork] = useState('work1'); // State to track the active section
  

    const toggleMenu = () => {
        setShowMobileMenu(!showMobileMenu);
    };

    // Function to handle navigation item clicks
    const handleNavClick = (section: string) => {
        setActiveSection(section);
        setShowMobileMenu(false); // Close mobile menu when an item is clicked
    };

    const handleWork = (section: string) => {
      setactiveWork(section);
    
  };

    return (
        <FrontLoadPage loadingText="">
            <div className="main-content-container">
                <nav className={showMobileMenu ? 'topnav responsive' : 'topnav'}>
                    <a href="#" className={activeSection === 'about' ? 'active' : ''} onClick={() => handleNavClick('about')}>About</a>
                    <a href="#" className={activeSection === 'education' ? 'active' : ''} onClick={() => handleNavClick('education')}>Education</a>
                    <a href="#" className={activeSection === 'skill' ? 'active' : ''} onClick={() => handleNavClick('skill')}>Skill</a>
                    <a href="#" className={activeSection === 'experience' ? 'active' : ''} onClick={() => handleNavClick('experience')}>Experience</a>
                    <a href="#" className={activeSection === 'project' ? 'active' : ''} onClick={() => handleNavClick('project')}>Project</a>
                    <a href="#" className={activeSection === 'contact' ? 'active' : ''} onClick={() => handleNavClick('contact')}>Contact</a>
                    <a href="#hamburger" className="icon" onClick={toggleMenu}>
                        &#9776;
                    </a>
                </nav>

                <div className="icon-bar">
                    <a className={activeSection === 'about' ? 'active' : ''} href="#" onClick={() => handleNavClick('about')}>
                        <img src="/acc.png" alt="Facebook" />
                    </a>
                    <a href="#" onClick={() => handleNavClick('cv')}>
                        <img src="/cv.png" alt="CV" />
                    </a>
                    <a href="#" onClick={() => handleNavClick('experience')}>
                        <img src="/exp.png" alt="Experience" />
                    </a>
                    <a href="#" onClick={() => handleNavClick('certifications')}>
                        <img src="/cert.png" alt="Certifications" />
                    </a>
                    <a href="#" onClick={() => handleNavClick('contact')}>
                        <img src="/cont.png" alt="Contact" />
                    </a>
                </div>

                {/* Section Containers */}
                {activeSection === 'about' && (
                    <div id="about" className="section-container">
                   <div class="first">
                   <div class="conta1"><img src={`${process.env.PUBLIC_URL}/unnamed.png`}/></div>
                    <div class="conta4">
                    <div class="conta2"><h3>Bryan Dalawampu</h3><h4>Programmer</h4>
                    Software
                    <div class="prog">
                      <div class="barIn"></div>
                    </div>
                    Website
                    <div class="prog">
                      <div class="barPh"></div>
                    </div>
                    Network
                    <div class="prog">
                      <div class="barSoc"></div>
                    </div>
                    Database
                    <div class="prog">
                      <div class="barSp"></div>
                    </div>
                    </div>
                    </div>
                    <div class="conta3">
                     <p> Programming Language </p>
                    <img class="skill" src="/unnamed.png"/>
                    <img class="skill" src="/s1.png"/>
                    <img class="skill" src="/s2.png"/>
                    <img class="skill" src="/s3.png"/>
                    <img class="skill" src="/s4.png"/>
                    <img class="skill" src="/s5.png"/>
                    <img class="skill" src="/s6.png"/>
                    <img class="skill" src="/s7.png"/>
                    <img class="skill" src="/s8.png"/>
                    </div>
                   </div>
                   <div class="second">
                    <div class="cont"><p>  &nbsp;&nbsp;&nbsp;  I'm Bryan, a programmer with a genuine enthusiasm for building software that solves real-world problems. My strength lies in my analytical approach and ability to break down complex tasks into logical steps for program development. I'm constantly thinking about how technology can streamline manual processes, and I enjoy the challenge of bringing those ideas to life through code. My coding style is rooted in a deep understanding of core principles, allowing me to build robust and purposeful applications based on my own logical framework. While I am an introverted individual
                       who excels in focused environments, I am committed to delivering high-quality, effective software solutions.</p><h1></h1>
                       
                       </div>
                   </div>




                       
                       
                    </div>
                )}
                {activeSection === 'education' && (
                    <div id="education" className="section-container">
                      
                      <div class="ed">
                          <div class="sch1"> <div class="cir"></div><div class="scon">
                            <h1>Tertiary 2014-2015	</h1> 
                            <h2>Bachelor of Science in Information Technology</h2>	
	                        <p>	MinSCATCalapan City Campus Masipit, Calapan City, Oriental Mindoro</p>
                        </div></div>
                        </div>
                        <div class="ed">
                          <div class="sch1"><div class="cir"></div><div class="scon">
                            <h1>Secondary 2010-2011	</h1> 
                            <h2>Porfirio G. Comia Memorial National High School</h2>	
	                        <p>Barcenaga, Naujan Oriental Mindoro</p></div></div>
                        </div>
                        <div class="ed">
                          <div class="sch"><div class="cir"></div><div class="scon">
                            <h1>Elementary 2006-2007		</h1> 
                            <h2>P. Garis Memorial Elementary School</h2>	
	                          <p>Sta. Maria, Naujan Oriental Mindoro</p></div></div>
                        </div>
                       </div>

                  
                )}
                {activeSection === 'skill' && (
                    <div id="skill" className="section-container">
                        <h2>Skill</h2>
                        <p>This is the Skill section content.</p>
                    </div>
                )}
                {activeSection === 'experience' && (
                    <div id="experience" className="section-container">
                     <div class="workmc">
                      <div class="workleft">
                       
                        {activeWork === 'work1' && (
                        <div id="project" className="section-container">
                       <div class="wlcon">OFW South Korea (Factory Worker)
                          <p class="skt">Skills acquired:</p>
                        <ul>
                        <li>Self-improvement</li>
                        <li>Precision and Attention to Detail</li>
                        <li>Technical Aptitude (Hands-on)</li>
                        <li>Teamwork and Collaboration</li>
                        <li>Discipline and Work Ethic</li>
                        <li>Resilience and Perseverance</li>
                        <li>Communication (Cross-Cultural)</li>
                      </ul>

                        </div>
                        <div class="wlcon"><p class="skt">Resposibilities:</p>
                      <ul>
                        <li>Operate machinery for double glazing mirror production.</li>
                        <li>Inspect finished mirrors for quality and defects.</li>
                        <li>Adhere to safety protocols and guidelines during mirror manufacturing.</li>
                        <li>Maintain a clean and safe working environment in the mirror production area.</li>
                        <li>Package mirrors according to specifications for shipment.</li>
                      </ul>
                        </div>
                        <div class="wlcon"><p class="skt">IT Related Experience:</p>
                      <ul>
                        <li>Creating Web application(During day off)</li>
                        <li>Create macro vba excel program (LOTTO Generator)</li>
                        <li>Practise AI chatbo prompt openAI(chatgpt,gemini,qwen)</li>
                        
                      </ul>
                        </div>
                        </div>
                         )}
                         {activeWork === 'work2' && (
                        <div id="project" className="section-container">
                       <div class="wlcon">Kily.ph (SOLO IT staff)
                          <p class="skt">Skills acquired:</p>
                        <ul>
                        <li>Windows Server Administration</li>
                        <li>Active Directory Management</li>
                        <li>Adaptability</li>
                        <li>Learning Agility | Work Under Pressure</li>
                        <li>Multimedia Skills: Photo Editing</li>
                        <li>Marketing Skills</li>
                        <li>VBA Macro Programming</li>
                      </ul>

                        </div>
                        <div class="wlcon"><p class="skt">Resposibilities:  (SOLO IT Staff)</p>
                      <ul>
                        <li>Install, configure, and maintain computer hardware, operating systems (including Windows Server), and applications.</li>
                        <li>Administer Windows Server, including Active Directory, to manage user accounts, groups, permissions, and access controls.</li>
                        <li>Manage file and print services using Windows Server.</li>
                        <li>Monitor and maintain computer software, hardware, and networks to ensure optimal performance and stability.</li>
                        <li>Diagnose hardware, software, and network faults, and resolve technical and application problems remotely or on-site.</li>
                        <li>Perform on-site maintenance at branch locations, including troubleshooting and replacing hardware components.</li>
                        <li>Test and evaluate new technologies for potential company-wide implementation.</li>                   
                        <li>Perform other IT-related duties as assigned.</li>

                      </ul>
                        </div>
                        <div class="wlcon"><p class="skt">IT Related Experience:</p>
                      <ul>
                        <li>Photo Editing (Photoshop &Illustrator) | Video Editing</li>
                        <li>Website Testing (with chinese IT)</li>
                        <li>Create  APK App</li>
                        <li>Create fully Funtional macro excel VBA application</li>
                        
                      </ul>
                        </div>
                        </div>
                         )}
                         {activeWork === 'work3' && (
                        <div id="project" className="section-container">
                       <div class="wlcon">Tambuting Pawnshop Head Office (IT Staff)
                          <p class="skt">Skills acquired:</p>
                        <ul>
                        <li>Hardware setup | OS configuration</li>
                        <li>Software install | System monitoring </li>
                        <li>Network maintenance | Fault diagnosis</li>
                        <li>Problem solving</li>
                        <li>On-site repair | Remote support </li>
                        <li>Tech evaluation</li>
                        <li>IT support</li>
                      </ul>

                        </div>
                        <div class="wlcon"><p class="skt">Resposibilities:</p>
                      <ul>
                        <li>Installing and configuring computer hardware operating system and applications.</li>
                        <li>Monitoring and maintaining computer software , hardware as well as networks;</li>
                        <li>Diagnosing hardware, software and network faults and solve technical and application problems, either over the phone or in person.</li>
                        <li>Perform remote desktop and application support requested by branches.</li>
                        <li>Testing and evaluating new technology acquired on the company.</li>
                        <li>Any other duties relating to IT as requested.</li>
                      </ul>
                        </div>
                        <div class="wlcon"><p class="skt">IT Related Experience:</p>
                      <ul>
                        <li>Publish VB6 software in Windows Server</li>
                        <li>Windows Server Management</li>
                        <li>Creating self-extracting archive (SFX) for branch software version update</li>
                        <li>Create simple C# porgram for audit department.</li>
                        <li>create excel macro VBA program</li>
                      </ul>
                        </div>
                        </div>
                         )}
                         {activeWork === 'work4' && (
                        <div id="project" className="section-container">
                       <div class="wlcon">TESDA Calapan (OJT)
                          <p class="skt">Skills acquired:</p>
                        <ul>
                        <li>Data entry | Database use</li>
                        <li>Record keeping</li>
                        <li>Customer assist</li>
                        <li>Basic finance</li>
                        <li>Detail-oriented</li>
                        <li>Workflow awareness</li>
                      </ul>

                        </div>
                        <div class="wlcon"><p class="skt">Resposibilities:</p>
                      <ul>
                        <li>Assist customers in the process of claiming their National Certificate II (NCII).</li>
                        <li>Collect fees associated with NCII certification and Conduct daily sales audits to ensure accuracy</li>
                        <li>Organize and maintain the stock of NCII certificate records.</li>
                        <li>Manage all physical files and documents to prepare reports for the head office.</li>
                        <li>Maintain and manage database access for filing and retrieving information.</li>
                      </ul>
                        </div>
                        </div>
                         )}
                          
                          
                          
                         
                      </div>
                      <div class="workright">
                        <div class="workcon">
                          <div class="workcr">
                          </div> <div class="workt" onClick={() => handleWork('work1')}><p class="whead">Third work (2019 -2024)</p>
                         Overseas Filipino Worker (South Korea)
                          </div>
                        </div>
                        <div class="workcon">
                          <div class="workcr">
                          </div>  <div class="workt" onClick={() => handleWork('work2')}><p class="whead">Second Work	(2017 -2019)</p>
                            <p>KILY.PH online shopping Corporation  (IT STAFF)
                        		7th Flr Azure Business Center 1197 EDSA Katipunan Quezon City.</p>
                          </div>
                        </div>
                        <div class="workcon">
                          <div class="workcr">
                          </div> <div class="workt" onClick={() => handleWork('work3')}><p class="whead">First Work (2015 -2017)</p>
                            <p>TAMBUNTING GROUP OF COMPANIES
                            8thflr. 1840 Jacinta bldg. II, Sta. Rita St. Brgy. Guadalupe Nuevo, Makati City
                            </p>
                          </div>
                        </div>
                        <div class="workcon1">
                          <div class="workcr">
                          </div> <div class="workt" onClick={() => handleWork('work4')}><p class="whead">On the Job Training (2014 - 2015)</p>
                            <p>TECHNICAL EDUCATION AND SKILLS DEVELOPMENT AUTHORITY	(TESDA)
                            Bldg. III Gov. Infantado St., SMV, Calapan City
				                          Oriental Mindoro</p>
                          </div>
                        </div>
                      </div>
                     </div>
                     












                    </div>
                )}
                {activeSection === 'project' && (
                    <div id="project" className="section-container">
                        <h2>Project</h2>
                        <p>This is the Project section content.</p>
                    </div>
                )}
                {activeSection === 'contact' && (
                    <div id="contact" className="section-container">
                    <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
    <img  src="/ff1.png"/>
    </div>
    <div class="flip-card-back">
    <img  src="/ff2.png"/>
    </div>
    </div>

<div class="contactD">
  <div class="conAd"><h2>Address:</h2><p>Sta. Maria, Naujan Oriental Mindoro</p></div>
  <div class="conSo"><h2>Social Media account:</h2>
  <div className="social-icons">
                            <a
                                href="https://www.facebook.com/bdalawampu"
                                className="icon-link"
                                aria-label="Facebook"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src="/fb.png" alt="Facebook" className="social-icon" />
                            </a>
                            <a
                                href="https://www.instagram.com/yourusername"
                                className="icon-link"
                                aria-label="Instagram"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src="/inst.png" alt="Instagram" className="social-icon" />
                            </a>
                            <a
                                href="https://www.tiktok.com/@yourusername"
                                className="icon-link tiktok-bg"
                                aria-label="TikTok"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src="/tiktok.png" alt="TikTok" className="social-icon" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/yourprofileurl"
                                className="icon-link"
                                aria-label="LinkedIn"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src="/link.png" alt="LinkedIn" className="social-icon" />
                            </a>
                        </div>
  </div>
  <div class="conEm"><h2>Email Address:</h2>
    <p>dalawampubryan06@gmailo.com</p>
    <p>dalawampubryan@yahoo.com</p>
  
  </div>
</div>








 
</div>
                    








                    </div>
                )}
                 {activeSection === 'certifications' && (
                    <div id="certifications" className="section-container">
                   <div class="cra">
                  	<h4>Diploma-Bachelor of Science in InformationTechnology</h4>
                          <img  src="/dip1.jpg"/> </div>
                           
                          <div class="cra">
                            <h4>Certificate of Completion-Computer Hardware Servicing(NCII)</h4>
                            <img class="cvv" src="/dip2.jpg"/>
                          </div>
          
                     </div>
                )}
                 {activeSection === 'cv' && (
                    <div id="cv" className="section-container">
                        <h2>Updated Resume</h2>
                        <div class="cva">
                          <img class="cvv" src="/cv1.jpg"/></div>
                          <div class="cva"><img class="cvv" src="/cv2.jpg"/>
                          </div>


                        <button>Download CV</button><h1></h1>
                    </div>
                )}
            </div>
        </FrontLoadPage>
    );
};

export default App;
