const Card = ({ data }) => {
  return (
    <div className="github__card box">
      <article className="media">
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{data.name.charAt(0).toUpperCase() + data.name.slice(1)}</strong><br/>
              <small><a href={data.html_url} target="_blank" rel="noreferrer">{data.full_name}</a></small><br/>
              <br/>
              {data.description}
            </p>
            <p>    
              { data.license ? <span><span className="tag is-rounded is-info">{data.license.name}</span> </span> : null }
              { data.language ? <span><span className="tag is-rounded is-primary">{data.language}</span> </span> : null }
              { data.fork ? <span><span className="tag is-rounded is-black">Fork</span> </span> : null } 
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