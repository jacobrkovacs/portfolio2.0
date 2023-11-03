import myface from '../assets/images/IMG_2999.jpeg'

export default function About() {
    return (
      <div>
        <h1>About me</h1>
        <hr />
        <img className='' style={{height: '200px', borderRadius: '100px'}} src={`${myface}`} alt="Image of Jacob Kovacs" />
        <p className='my-3'>
          My name is Jacob.
        </p>
      </div>
    );
  }
  