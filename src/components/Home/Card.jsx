const Card = ({ data }) => {
    return (
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={data.img} alt="Card logo" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img src={data.imgu} alt={`@${data.username} avatar.`}/>
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">{data.name}</p>
              <p className="subtitle is-6">@{data.username}</p>
            </div>
          </div>
          <div className="content has-text-centered">
            <a href={data.url} target="_blank" rel="noreferrer"><i className="fas fa-external-link-alt"></i></a>
          </div>
        </div>
      </div>
    );
  }
  
  export default Card;