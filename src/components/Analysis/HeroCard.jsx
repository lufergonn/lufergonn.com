const HeroCard = ({ background, count, text }) => {
  return (
    <div className="column">
      <div className={`box has-background-${background} has-text-white`}>
        <p className="has-text-white">
          <span className="title is-3 is-spaced has-text-white">{count} </span>
          <span className="subtitle is-5 has-text-white">{text}</span>
        </p>
      </div>
    </div>
  );
}

export default HeroCard;