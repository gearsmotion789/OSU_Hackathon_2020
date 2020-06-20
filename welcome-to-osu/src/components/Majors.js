import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import './Majors.css'

export default class Majors extends Component{
  render(){
    return (
        <div>
            <div class='majors'>
                <div class='majorsBlackBox'>   
                    <p id='majorsTitle'>Choose a college to find your major:</p>
                    <p id='majorsText'>> <a href="http://agsci.oregonstate.edu/" target="_blank"><u id="majorsColor">Agricultural Sciences</u></a></p>
                    
                    <Link
                        activeClass="active"
                        to="CoB"
                        spy={true}
                        smooth={true}
                        offset={-150}
                        duration={500}>
                        <p id='majorsText'>> <a href="#CoB"><u id="majorsColor">Business</u></a></p>
                    </Link>
                    
                    <p id='majorsText'>> <a href="http://ceoas.oregonstate.edu/" target="_blank"><u id="majorsColor">Earth, Ocean, and Atmospheric Sciences</u></a></p>
                    <p id='majorsText'>> <a href="http://education.oregonstate.edu/" target="_blank"><u id="majorsColor">Education</u></a></p>
                    
                    <Link
                        activeClass="active"
                        to="CoE"
                        spy={true}
                        smooth={true}
                        offset={-150}
                        duration={500}>
                        <p id='majorsText'>> <a href="#CoE"><u id="majorsColor">Engineering</u></a></p>
                    </Link>
                    
                    <p id='majorsText'>> <a href="http://www.forestry.oregonstate.edu/" target="_blank"><u id="majorsColor">Forestry</u></a></p>
                    <p id='majorsText'>> <a href="http://liberalarts.oregonstate.edu/" target="_blank"><u id="majorsColor">Liberal Arts</u></a></p>
                    <p id='majorsText'>> <a href="http://pharmacy.oregonstate.edu/" target="_blank"><u id="majorsColor">Pharmacy</u></a></p>
                    <p id='majorsText'>> <a href="http://health.oregonstate.edu/" target="_blank"><u id="majorsColor">Public Health and Human Services</u></a></p>
                    
                    <Link
                        activeClass="active"
                        to="CoS"
                        spy={true}
                        smooth={true}
                        offset={-150}
                        duration={500}>
                        <p id='majorsText'>> <a href="#CoS"><u id="majorsColor">Science</u></a></p>
                    </Link>
                    
                    <p id='majorsText'>> <a href="http://vetmed.oregonstate.edu/" target="_blank"><u id="majorsColor">Veterinary Medicine</u></a></p>
                    <p id='majorsRegister'><a href="myosu.oregonstate.edu"> <u>Learn how to register for classes</u></a></p>
                </div>   
            </div>
            <div class='info'>
                
                <a id='CoB' class='majorsCollege' href="http://business.oregonstate.edu/" target="_blank">College of Business:</a>
                <a class='majorsMajor' href="http://business.oregonstate.edu/programs/undergraduate/accounting" target="_blank">Accounting:</a>
                <div className='majorsDescription'>Make financial decisions and drive strategy in large businesses,</div>
                <div className='majorsDescription'>small businesses, governmental agency, or nonprofit organizations.</div>
                <div class='grid-parent'>
                    <div>
                        <div className = 'majorsExplore'>Explore Classes:</div>
                        <div className='majorsListClass'>> BA 211: Financial Accounting</div>
                        <div className='majorsListClass'>> BA 213: Managerial Accounting</div>
                        <div className='majorsListClass'>> ACTG 321: Cost Management I</div>
                        <div className='majorsListClass'>> ACTG 379: Accounting Analytics</div>
                        <a href="https://catalog.oregonstate.edu/college-departments/business/accountancy-bs-hbs/#requirementstext" target="_blank">
                            <button class="majorsbtn">Explore More Classes</button>
                        </a>
                    </div>
                    <div>
                        <div className = 'majorsExplore'>Explore Careers:</div>
                        <div className='majorsListCareer'>> Accounting Clerk</div>
                        <div className='majorsListCareer'>> Enrolled Agent</div>
                        <div className='majorsListCareer'>> Tax Accountant</div>
                        <div className='majorsListCareer'>> Tax Consultant</div>
                        <a href="https://career.oregonstate.edu/major/accounting" target="_blank">
                            <button class="majorsbtn">Explore More Careers</button>
                        </a>
                    </div>
                </div>
                <a class='majorsMajor' href="http://business.oregonstate.edu/programs/undergraduate/business-administration" target="_blank">Business Administration:</a>
                <div className='majorsDescription'>Identify opportunities for business using</div>
                <div className='majorsDescription'>problem-solving and decision-making skills.</div>
                <div class='grid-parent'>
                    <div>
                        <div className = 'majorsExplore'>Explore Classes:</div>
                        <div className='majorsListClass'>> BA 270: Business Process Management</div>
                        <div className='majorsListClass'>> BA 283: Creativity, Culture, and the Workplace</div>
                        <div className='majorsListClass'>> BA 347: International Business</div>
                        <div className='majorsListClass'>> BA 466: Integrative Strategic Experience</div>
                        <a href="https://catalog.oregonstate.edu/college-departments/business/business-administration-ba-bs-hba-hbs/#requirementstext" target="_blank">
                            <button class="majorsbtn">Explore More Classes</button>
                        </a>
                    </div>
                    <div>
                        <div className = 'majorsExplore'>Explore Careers:</div>
                        <div className='majorsListCareer'>> Human Resources</div>
                        <div className='majorsListCareer'>> Sales Manager</div>
                        <div className='majorsListCareer'>> Public Relations</div>
                        <div className='majorsListCareer'>> Market Research Analyst</div>
                        <a href="https://career.oregonstate.edu/major/business-administration" target="_blank">
                            <button class="majorsbtn">Explore More Careers</button>
                        </a>
                    </div>
                </div>
                <a class='majorsMajor' href="http://business.oregonstate.edu/programs/undergraduate/marketing" target="_blank">Marketing:</a>
                <div className='majorsDescription'>Build successful brands using consumer behavior, integrated</div>
                <div className='majorsDescription'>marketing communications, global marketing, and other insights.</div>
                <div class='grid-parent'>
                    <div>
                        <div className = 'majorsExplore'>Explore Classes:</div>
                        <div className='majorsListClass'>> BA 396: Fundamentals of Market Research</div>
                        <div className='majorsListClass'>> BA 499: Marketing Strategy</div>
                        <div className='majorsListClass'>> MRKT 484: Digital Marketing Platforms</div>
                        <div className='majorsListClass'>> MRKT 497: Global Marketing</div>
                        <a href="https://catalog.oregonstate.edu/college-departments/business/marketing-ba-bs-hba-hbs/#requirementstext" target="_blank">
                            <button class="majorsbtn">Explore More Classes</button>
                        </a>
                    </div>
                    <div>
                        <div className = 'majorsExplore'>Explore Careers:</div>
                        <div className='majorsListCareer'>> Sales Representative</div>
                        <div className='majorsListCareer'>> Median Planner / Buyer</div>
                        <div className='majorsListCareer'>> Marketing Manager</div>
                        <div className='majorsListCareer'>> Telemarketer </div>
                        <a href="https://career.oregonstate.edu/major/marketing" target="_blank">
                            <button class="majorsbtn">Explore More Careers</button>
                        </a>
                    </div> 
                </div>
                <hr className = "majorsLine"></hr>
                <a id='CoE' class='majorsCollege' href="https://engineering.oregonstate.edu/" target="_blank">College of Engineering:</a>
                <a class='majorsMajor' href="https://cce.oregonstate.edu/content/civil-engineering" target="_blank">Civil Engineering:</a>
                <div className='majorsDescription'>Design, construction, and maintainance of public</div>
                <div className='majorsDescription'>works, including roads, bridges, and harbors</div>
                <div class='grid-parent'>
                    <div>
                        <div className = 'majorsExplore'>Explore Classes:</div>
                        <div className='majorsListClass'>> CE 311: Fluid Mechanics</div>
                        <div className='majorsListClass'>> CE 313: Hydraulic Engineering</div>
                        <div className='majorsListClass'>> CE 381: Structual Theory</div>
                        <div className='majorsListClass'>> CE 419: Civil Infrastructure and Design</div>
                        <a href="https://catalog.oregonstate.edu/college-departments/engineering/school-civil-construction-engineering/civil-engineering-ba-bs-hba-hbs/#requirementstext" target="_blank">
                            <button class="majorsbtn">Explore More Classes</button>
                        </a>
                    </div>
                    <div>
                        <div className = 'majorsExplore'>Explore Careers:</div>
                        <div className='majorsListCareer'>> Architect</div>
                        <div className='majorsListCareer'>> Construction Manager</div>
                        <div className='majorsListCareer'>> Structural Iron and Steel Workers</div>
                        <div className='majorsListCareer'>> Urban and Regional Planners</div>
                        <a href="https://career.oregonstate.edu/major/civil-engineering" target="_blank">
                            <button class="majorsbtn">Explore More Careers</button>
                        </a>
                    </div>
                </div>
                <a class='majorsMajor' href="https://eecs.oregonstate.edu/undergraduate-programs/computer-science" target="_blank">Computer Science:</a>
                <div className='majorsDescription'>Study of the principles and use of computers.</div>
                <div class='grid-parent'>
                    <div>
                        <div className = 'majorsExplore'>Explore Classes:</div>
                        <div className='majorsListClass'>> CS 261: Data Structures</div>
                        <div className='majorsListClass'>> CS 290: Web Development</div>
                        <div className='majorsListClass'>> BA 347: International Business</div>
                        <div className='majorsListClass'>> BA 466: Integrative Strategic Experience</div>
                        <a href="https://catalog.oregonstate.edu/college-departments/engineering/school-electrical-engineering-computer-science/computer-science-ba-bs-hba-hbs/computer-systems-option/#requirementstext" target="_blank">
                            <button class="majorsbtn">Explore More Classes</button>
                        </a>
                    </div>
                    <div>
                        <div className = 'majorsExplore'>Explore Careers:</div>
                        <div className='majorsListCareer'>> Software Developer</div>
                        <div className='majorsListCareer'>> Securities and Commodities Trader</div>
                        <div className='majorsListCareer'>> Computer Systems Analyst</div>
                        <div className='majorsListCareer'>> Database Architect</div>
                        <a href="https://career.oregonstate.edu/major/computer-science" target="_blank">
                            <button class="majorsbtn">Explore More Careers</button>
                        </a>
                    </div>
                </div>
                <a class='majorsMajor' href="https://mime.oregonstate.edu/academics/undergrad/me" target="_blank">Mechanical Engineering:</a>
                <div className='majorsDescription'>Design, develop, and improve devices,</div>
                <div className='majorsDescription'>products, processes, and systems.</div>
                <div class='grid-parent'>
                    <div>
                        <div className = 'majorsExplore'>Explore Classes:</div>
                        <div className='majorsListClass'>> ENGR 213: Strength of Materials</div>
                        <div className='majorsListClass'>> ME 312: Thermodynamics</div>
                        <div className='majorsListClass'>> ME 383: Mechanical Component Design</div>
                        <div className='majorsListClass'>> ME 430: Systems Dynamics and Controls</div>
                        <a href="https://catalog.oregonstate.edu/college-departments/engineering/school-mechanical-industrial-manufacturing-engineering/mechanical-engineering-bs-hbs/#requirementstext" target="_blank">
                            <button class="majorsbtn">Explore More Classes</button>
                        </a>
                    </div>
                    <div>
                        <div className = 'majorsExplore'>Explore Careers:</div>
                        <div className='majorsListCareer'>> Aerospace Engineer</div>
                        <div className='majorsListCareer'>> Automotive Engineer</div>
                        <div className='majorsListCareer'>> Industrial Machinery Mechanic</div>
                        <div className='majorsListCareer'>> Robotics Engineer </div>
                        <a href="https://career.oregonstate.edu/major/mechanical-engineering" target="_blank">
                            <button class="majorsbtn">Explore More Careers</button>
                        </a>
                    </div>
                </div>
                <hr className = "majorsLine"></hr>
                <a id='CoS' class='majorsCollege' href="https://science.oregonstate.edu/" target="_blank">College of Science:</a>
                <a class='majorsMajor' href="https://science.oregonstate.edu/academics/majors/biology" target="_blank">Biology:</a>
                <div className='majorsDescription'>Foundational study of life from the basic</div>
                <div className='majorsDescription'>cellular level to broader ecosystem contexts.</div>
                <div class='grid-parent'>
                    <div>
                        <div className = 'majorsExplore'>Explore Classes:</div>
                        <div className='majorsListClass'>> BI 311: Genetics</div>
                        <div className='majorsListClass'>> BI 314: Cell and Molecular Biology</div>
                        <div className='majorsListClass'>> BI 370: Ecology</div>
                        <div className='majorsListClass'>> BI 445: Evolution</div>
                        <a href="https://catalog.oregonstate.edu/college-departments/science/school-life-sciences/integrative-biology/biology-bs-hbs/#requirementstext" target="_blank">
                            <button class="majorsbtn">Explore More Classes</button>
                        </a>
                    </div>
                    <div>
                        <div className = 'majorsExplore'>Explore Careers:</div>
                        <div className='majorsListCareer'>> Animal Scientist</div>
                        <div className='majorsListCareer'>> Dentist</div>
                        <div className='majorsListCareer'>> Animal Trainer</div>
                        <div className='majorsListCareer'>> Health Educator</div>
                        <a href="https://career.oregonstate.edu/major/biology" target="_blank">
                            <button class="majorsbtn">Explore More Careers</button>
                        </a>
                    </div>
                </div>
                <a class='majorsMajor' href="https://science.oregonstate.edu/academics/majors/chemistry" target="_blank">Chemistry:</a>
                <div className='majorsDescription'>Identification of substances of which matter is composed, investigate</div>
                <div className='majorsDescription'>their properties and the ways they interact, combine, and change.</div>
                <div class='grid-parent'>
                    <div>
                        <div className = 'majorsExplore'>Explore Classes:</div>
                        <div className='majorsListClass'>> CH 231: General Chemistry</div>
                        <div className='majorsListClass'>> CH 334: Organic Chemistry</div>
                        <div className='majorsListClass'>> CH 421: Analytical Chemistry</div>
                        <div className='majorsListClass'>> CH 440: Physical Chemistry</div>
                        <a href="https://catalog.oregonstate.edu/college-departments/science/chemistry/chemistry-ba-bs-hba-hbs/#requirementstext" target="_blank">
                            <button class="majorsbtn">Explore More Classes</button>
                        </a>
                    </div>
                    <div>
                        <div className = 'majorsExplore'>Explore Careers:</div>
                        <div className='majorsListCareer'>> Chemical Technicians</div>
                        <div className='majorsListCareer'>> Dentist</div>
                        <div className='majorsListCareer'>> Radiologist</div>
                        <div className='majorsListCareer'>> Pharmacist</div>
                        <a href="https://career.oregonstate.edu/major/chemistry" target="_blank">
                            <button class="majorsbtn">Explore More Careers</button>
                        </a>
                    </div>
                </div>
                <a class='majorsMajor' href="https://science.oregonstate.edu/academics/majors/physics" target="_blank">Physics:</a>
                <div className='majorsDescription'>Build successful brands using consumer behavior, integrated</div>
                <div className='majorsDescription'>marketing communications, global marketing, and other insights.</div>
                <div class='grid-parent'>
                    <div>
                        <div className = 'majorsExplore'>Explore Classes:</div>
                        <div className='majorsListClass'>> PH 315: Physics of Contemporary Challenges</div>
                        <div className='majorsListClass'>> PH 335: Techniques of Theoretical Mechanics</div>
                        <div className='majorsListClass'>> PH 411: Electronics</div>
                        <div className='majorsListClass'>> PH 422: Paradigms in Physics: Static Fields</div>
                        <a href="https://catalog.oregonstate.edu/college-departments/science/physics/physics-ba-bs-hba-hbs/#requirementstext" target="_blank">
                            <button class="majorsbtn">Explore More Classes</button>
                        </a>
                    </div>
                    <div>
                        <div className = 'majorsExplore'>Explore Careers:</div>
                        <div className='majorsListCareer'>> Astronomer</div>
                        <div className='majorsListCareer'>> Automotive Engineer</div>
                        <div className='majorsListCareer'>> Geodetic Surveyors</div>
                        <div className='majorsListCareer'>> Hydrologist </div>
                        <a href="https://career.oregonstate.edu/major/physics" target="_blank">
                            <button class="majorsbtn">Explore More Careers</button>
                        </a>
                    </div>
                    
                </div>
            </div>  
        </div>
    );
  }

}
