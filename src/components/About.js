import React from 'react';
import PropTypes from 'prop-types';
import Social from './Social';
import img from '../image/profilephoto.jpeg';
const About = ({avatar, name, profession, bio, address, social}) => {
  return(
    <div className='bio'>
      <div className='avatar'>
        <img src={img} alt={name} />
      </div>
      <div className='title'>
        <h1>{name}</h1>
        <h2>{profession}</h2>
      </div>
      <div className='desc'>
        <p>{bio}</p>
      </div>
      <div className='address'>
        <p>{address}</p>
      </div>
      <Social social={social} />
    </div>
  );
};

About.PropTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  profession: PropTypes.string,
  bio: PropTypes.string,
  address: PropTypes.string,
  social: PropTypes.node
};

export default About;
