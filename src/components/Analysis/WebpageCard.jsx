import getIconWebpageCard from "../../config/getIconWebpageCard";

const WebpageCard = ({ data }) => {
  const Icon = getIconWebpageCard(data.type);

  return (
    <div className="analysis__webpagecard box">
      <article className="media is-align-items-center">
        <div className="media-left">
          <figure className="image is-48x48">
            <img src={Icon} alt={`Icon ${data.type}`}/>
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong className="is-capitalized">{data.title}</strong><br/>
              <small className="has-text-grey">{data.datetime}</small><br/><br/>
              <span className="is-capitalized">{data.description}</span> 
            </p>
            <p className="is-pulled-right">
              {
                data.tags.map(tag => {
                  return <span key={`${data.id}-${tag}`} className="tag is-link is-rounded is-capitalized">{tag}</span>
                })
              }
            </p>
          </div>
        </div>
        <div className="media-rigth">
          <a href={data.url} target="_blank" rel="noreferrer">
            <i className="fas fa-external-link-alt"></i>
          </a>
        </div>
      </article>
    </div>
  );
}

export default WebpageCard;