
const cardStyle = {
  width: '300px'
}

export default function Project({ works }) {
    return (
      <div>
        <h1>Projects Page</h1>
        <hr />
        <div className="d-flex justify-content-between">
          {works.map((work => (
            <div key={work.id} style={cardStyle} className="card">
              <a href={work.url}><img className="card-img-top" src={work.image} alt={`Screenshot of ${work.title}`} /></a>
              <div className="card-body">
                <h5 className="card-title">{work.title}</h5>
                <p className="card-text">{work.description}</p>
                <a href={work.url} className="btn">Check it out!</a>
              </div>
            </div>
          )))}
        </div>
      </div>
    );
  }
  