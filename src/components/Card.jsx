import "./card.css";
const Card = ({ title, image }) => {
  return (
    <div className="card">
      <p className="p-2 text-center font-semibold leading-none">{title} </p>
      <div className="image w-full">
        <img
          src={image}
          alt={title}
          srcset=""
          className="size-full object-cover"
        />
      </div>
    </div>
  );
};

export default Card;
