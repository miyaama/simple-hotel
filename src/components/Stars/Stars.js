import { StarIcon } from "../Icon";

const fiveStarsArray = [StarIcon, StarIcon, StarIcon, StarIcon, StarIcon];

const Stars = ({ amount }) => {
  return (
    <>
      {fiveStarsArray.map((Star, index) => (
        <Star isActive={index <= amount} key={index} />
      ))}
    </>
  );
};

export default Stars;
