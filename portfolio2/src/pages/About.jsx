import myface from '../assets/images/IMG_3345.jpeg'

const header = {
  fontFamily: 'Permanent Marker'
}

const image = {
  margin: '3rem',
  height: '300px',
  borderRadius: '100px',
  boxShadow: '3px 3px 3px black'
}

const paragraph = {
  fontSize: '1.5rem',
  fontFamily: 'Permanent Marker',
  margin: '5rem'
}

export default function About() {
    return (
      <div className=''>
        <h1 style={header}>About me</h1>
        <hr />
        <div className='d-flex'>
          <img style={image} src={`${myface}`} alt="Image of Jacob Kovacs" />
          <p style={paragraph}>
            My name is Jacob. I recently completed a full-stack web development bootcamp through uc davis/edx. <br />
            
          </p>
        </div>
      </div>
    );
  }
  