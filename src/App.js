import React, { Component } from 'react';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Certificate from './components/Certificate';
import Skills from './components/Skills';
import img from './image/profilephoto.jpeg';


class App extends Component {
  render() {

    const person = {
      avatar: {img},
      name: 'Abhishek Bhattacharya',
      profession: 'FullStack Developer',
      bio: 'Full Stack Developer at @CTS, Ex-TA @CN, Football Lover⚽ & Geek.',
      address: 'Kolkata, India.',
      social: [
        {name: 'instagram', url: 'https://instagram.com/skyintech'},
        {name: 'github', url: 'https://github.com/Chris29218'},
        {name: 'linkedin', url: 'https://www.linkedin.com/in/abhishek-bhattacharya-fiem/'}
      ],
      experience: [
        {jobTitle: 'FSE', company: 'Cognizant', startDate: 'Feb 2022', endDate: 'Present', jobDescription: 'Started internship training in domain FSE Java.'},
        {jobTitle: 'Teaching Assistant', company: 'Coding Ninjas', startDate: 'November 2021', endDate: 'March 2022', jobDescription: 'Took 1200+ student doubts. My final rating was 4.75*.'},
      ],
      education: [
        {degree: 'BTech', institution: 'Future Institute of Engineering & Management', startDate: 'Nov 2019', endDate: 'July 2022', CGPA: '8.7'}
      ],
      certificate: [
        {name: 'DSA in Java', institution: 'Coding Ninjas', date: 'Dec 2020', description: 'Got this certifaction after completing the CN Java DSA course, the course that boosted my DSA knowlegde.' },
        {name: 'FrontEnd Developer', institution: 'Coding Ninjas', date: 'July 2021', description: 'Got this certifaction after completing the CN Frontend course, It was a great learning experience & worked on cool frontend techstacks.' },
        {name: 'Backend Developer', institution: 'Coding Ninjas', date: 'May 2021', description: 'Got this certifaction after completing the CN Backend course, It was a great learning experience & worked on some awesome new backend(MERN) techstacks.' }
      ],
      skills: [
        {name: 'Java', percentage: '85%'},
        {name: 'HTML5', percentage: '85%'},
        {name: 'CSS', percentage: '70%'},
        {name: 'JavaScript', percentage: '70%'},
        {name: 'React', percentage: '50%'},
        {name: 'Node', percentage: '50%'}

      ]
    };

    return (
      <header>
        <div className='wrapper'>
          <div className='sidebar'>
            <About
              avatar={person.avatar}
              name={person.name}
              profession={person.profession}
              bio={person.bio}
              address={person.address}
              social={person.social} />
          </div>

          <div className='content-wrapper'>
              <div className='content'>
                <Experience experience={person.experience} />
                <Education education={person.education} />
                <Certificate certificate={person.certificate} />
                <Skills skills={person.skills} />
              </div>
          </div>

        </div>
      </header>
    );
  }
}

export default App;
