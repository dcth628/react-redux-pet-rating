import { useState } from "react";

const PawsRatingInput = ({ rating, disabled, onChange }) => {
  const [activeRating, setActiveRating ] = useState(rating);

  console.log(onChange, "this is onChange function")
  return (
    <>
      <input
        type="number"
        disabled={disabled}
        value={rating}
        onChange={(onChange)}
      />
      <div className="rating-input">
        <div onMouseEnter={disabled === false ? () => setActiveRating(1) : () => setActiveRating(rating)}
        onMouseLeave={() => setActiveRating(rating)}
        className={
          activeRating >= 1
          ? "filled"
          : "empty"
        }
        onClick={() => onChange(1)}
        >
          <i className="fa fa-paw"></i>
        </div>
        <div onMouseEnter={disabled === false ? () => setActiveRating(2) : () => setActiveRating(rating)}
        onMouseLeave={() => setActiveRating(rating)}
        className={
          activeRating >= 2
          ? "filled"
          : "empty"
        }
        onClick={() => onChange(2)}
         >
          <i className="fa fa-paw"></i>
        </div>
        <div onMouseEnter={disabled === false ? () => setActiveRating(3) : () => setActiveRating(rating)}
       onMouseLeave={() => setActiveRating(rating)}
        className={
          activeRating >= 3
          ? "filled"
          : "empty"
        }
        onClick={() => onChange(3)}
        >
          <i className="fa fa-paw"></i>
        </div>
        <div onMouseEnter={disabled === false ? () => setActiveRating(4) : () => setActiveRating(rating)}
        onMouseLeave={() => setActiveRating(rating)}
        className={
          activeRating >= 4
          ? "filled"
          : "empty"
        }
        onClick={() => onChange(4)}
         >
          <i className="fa fa-paw"></i>
        </div>
        <div onMouseEnter={disabled === false ? () => setActiveRating(5) : () => setActiveRating(rating)}
        onMouseLeave={() => setActiveRating(rating)}
        className={
          activeRating >= 5
          ? "filled"
          : "empty"
        }
        onClick={() => onChange(5)}
         >
          <i className="fa fa-paw"></i>
        </div>
      </div>
    </>
  );
};

export default PawsRatingInput;
