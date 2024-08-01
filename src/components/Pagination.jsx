import { useEffect, useState } from "react";
import Tab from "./Tab";
import { useSearchParams } from "react-router-dom";
import { FaBackward, FaBackwardFast, FaForward, FaForwardFast } from "react-icons/fa6";
import { cn } from "../utils/tailwind";

const Pagination = ({ totalPages = 0, activePage = 1, activeClass = '', onchange = (data) => { } }) => {
  const [active, setActive] = useState(Number(activePage));
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    if (active <= 1) setActive(1)
    if (active >= totalPages) setActive(totalPages)
    setSearchParams({
      ...searchParams,
      page: active
    })
    onchange(active)
  }, [active])
  return (
    <div className="overfow-clip flex flex-wrap justify-center w-full *:p-1 *:px-2 *:rounded gap-1">
      {active > 1 &&
        <>
          <button type="button" className="hover:scale-105 hover:bg-brand-red/10 hover:text-brand-red" onClick={() =>
            setActive(1)} >
            <FaBackwardFast />
          </button>
          <button type="button" className="hover:scale-105 hover:bg-brand-red/10 hover:text-brand-red" onClick={() => setActive(active > 1 ? active - 1 : 1)}  >
            <FaBackward />
          </button>
        </>
      }
      {
        totalPages > 1 &&
        Array(totalPages).fill('').map((_, n) => {
          <button type="button" className={cn(["hover:scale-105 hover:bg-brand-red/10 hover:text-brand-red", { activeClass: n + 1 === active }])} key={n} onClick={() => setActive(n + 1)}  >
            {n + 1}
          </button>
        })
      }
      {active < totalPages &&
        <>
          <button type="button" className="hover:scale-105 hover:bg-brand-red/10 hover:text-brand-red" onClick={() => setActive(active < totalPages ? (activePage + 1) : totalPages)} >
            <FaForward />
          </button>
          <button type="button" className="hover:scale-105 hover:bg-brand-red/10 hover:text-brand-red" onClick={() => setActive(totalPages)} >
            <FaForwardFast />
          </button>
        </>
      }
      <input type="number" name="" id="" value={active} onChange={(e) => setActive(e.target.value)} className="max-w-fit w-[4rem] border outline-none rounded" />
      <span> {active} / {totalPages} </span>
    </div>
  );
};

export default Pagination;
