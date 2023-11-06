
const cardStyle = {
  width: '300px'
}

const imgStyle = {
  height: '150px',
  backgroundSize: 'cover'
}

const githubImgStyle = {
  width: '45px',
  alignSelf: 'flex-end'
}

import githubImg from '../assets/images/GitHub-Mark.png'

export default function Project({ works }) {
    return (
      <div>
        <h1>Projects Page</h1>
        <hr />
        <div className="d-flex flex-wrap justify-content-center">
          {works.map((work => (
            <div key={work.id} style={cardStyle} className="card mx-3 my-4">
              <a target="_blank" href={work.url}><img style={imgStyle} className="card-img-top" src={work.image} alt={`Screenshot of ${work.title}`} /></a>
              <div className="card-body">
                <h5 className="card-title">{work.title}</h5>
                <p className="card-text">{work.description}</p>
              </div>
                <a target="_blank" href={work.repoUrl} ><img src={githubImg} alt="" style={githubImgStyle}/></a>
            </div>
          )))}
        </div>
      </div>
    );
  }
  