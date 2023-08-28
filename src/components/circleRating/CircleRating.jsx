import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircleRating = ({ rating }) => {
  return (
    <div className=" relative w-14 h-14 z-10 bg-black rounded-full p-2">
      <CircularProgressbar
        value={rating}
        maxValue={10}
        text={rating}
        styles={buildStyles({
          pathColor: rating < 5 ? "red" : rating < 7 ? "orange" : "green",
          textSize: "34px",
          textColor: "white",
          trailColor: "transparent",
        })}
      />
    </div>
  );
};

export default CircleRating;
