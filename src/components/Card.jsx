const Card = ({ title, image }) => {
  return (
    <div className="card isolate grid grid-rows-[auto_1fr] overflow-clip rounded-xl p-0 text-black bg-brand-red/25 shadow">
      <p className="p-3 text-center font-semibold leading-none">{title} </p>
      <div className="image w-full min-h-[10rem] grow overflow-clip rounded-t-xl flex items-center justify-center">
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
