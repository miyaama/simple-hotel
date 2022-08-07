export const ArrowIcon = ({ isActive, ...props }) => {
  return (
    <svg
      width="8.7"
      height="7"
      viewBox="0 0 8.7 7"
      fill={isActive ? "#41522E" : "#A7A7A7"}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M8.5 1.83245L7.43934 0.77179L4.25736 3.95377L1.07538 0.77179L0.0147181 1.83245L4.25736 6.07509L8.5 1.83245Z" />
    </svg>
  );
};
