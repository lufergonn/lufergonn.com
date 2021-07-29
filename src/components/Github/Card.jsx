const Card = ({ data }) => {
  return (
    <div className="github__card box">
      <article className="media is-align-items-center">
        <div className="media-content">
          <div className="content">
            <p>
              <strong className="is-capitalized">{data.name}</strong><br/>
              <small><a href={data.html_url} target="_blank" rel="noreferrer">{data.full_name}</a></small><br/><br/>
              <span>{data.description}</span>
            </p>
            <p className="is-pulled-right">
              { data.license ? <span className="tag is-rounded is-info">{data.license.name}</span> : null }
              { data.language ? <span className="tag is-rounded is-primary">{data.language}</span> : null }
              { data.fork ? <span className="tag is-rounded is-black">Fork</span> : null } 
            </p>
          </div>
        </div>
        <div className="media-rigth">
          <a href={data.html_url} target="_blank" rel="noreferrer">
            <i className="fas fa-external-link-alt"></i>
          </a>
        </div>
      </article>
    </div>
  );
}

export default Card;