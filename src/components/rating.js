import starFillImg from "../img/star-fill.svg";
import starHalfImg from "../img/star-half.svg";
import starImg from "../img/star.svg";

const Rating = (props) => {
  let imgs = [];
  for (let i = 0; i < 10; i++) {
    if (Math.floor(props.stars) > i) {
      imgs.push(starFillImg);
    } else {
      if (props.stars.split(".")[1] >= 3 && props.stars.split(".")[1] <= 7 && i <= props.stars) {
        imgs.push(starHalfImg);
      } else {
        imgs.push(starImg);
      }
    }
  }
  return (
    <div>
      {imgs.map((item, index) => (
        <img key={"stars" + index} src={item} alt="IMG" />
      ))}
    </div>
  );
};

export default Rating;
