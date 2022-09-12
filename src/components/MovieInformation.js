// Import Css
import "./MovieInformation.css";

// Import Rating Component
import Rating from "./rating";

const MovieInformation = (props) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.year}</p>
      <p>{props.director}</p>
      <p>{props.duration}</p>
      <Rating stars={props.rate} />
      {props.genre.map((genre, index) => (
        <p key={props.title + index} className="small">
          {genre}
        </p>
      ))}
    </div>
  );
};

export default MovieInformation;
