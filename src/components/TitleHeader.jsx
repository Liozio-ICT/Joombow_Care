import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const TitleHeader = ({ title, goBack, bordered = false, show_back = true }) => {
  const navigate = useNavigate();
  return (
    <div className="relative flex min-h-10 items-center justify-center text-center">
      {show_back && (
        <button
          className={`absolute left-0 top-0 flex h-full w-8 items-center justify-center rounded-full p-1 ${bordered ? "border border-white" : ""} `}
          onClick={() => (goBack ? goBack() : navigate(-1))}
        >
          <FaArrowLeft className="aspect-square size-full object-contain" />
        </button>
      )}

      <strong className="text-balance text-center"> {title} </strong>
    </div>
  );
};

export default TitleHeader;
