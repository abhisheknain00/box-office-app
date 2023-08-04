const ShowCard = ({ name, image, id, summary }) => {
  const summaryStr = summary
    ? summary.split(" ").slice(0, 10).join(" ").replace(/<.+?>/g, "")
    : "No Description";

  return (
    <div>
      <div>
        <img src={image} alt={name} />
      </div>
      <h1>{name}</h1>

      <p>{summaryStr}</p>

      <div>
        <a href={`/show/${id}`} target="_blank" rel="noopener noreferrer">
          Read Me
        </a>
        <button type="button">Star Me</button>
      </div>
    </div>
  );
};

export default ShowCard;
