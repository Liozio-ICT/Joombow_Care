import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FaBackward, FaForward } from "react-icons/fa6";
import { cn } from "../utils/tailwind";

const Pagination = ({ className, totalPages = 1, activePage = 1, activeClass = 'border text-brand-red', onchange = (data) => { } }) => {
  const [active, setActive] = useState(parseInt(activePage));
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    if (active <= 1) setActive(1)
    if (active >= totalPages) setActive(totalPages)
    onchange(active)
    setSearchParams({
      ...searchParams,
      page: active
    })
  }, [active])
  return (
    <div className={cn(["overfow-clip flex flex-wrap justify-center w-full *:p-1 *:px-2 *:rounded gap-1", className])}>
      {active > 1 &&
        <>
          <button type="button"
            className="hover:scale-105 hover:bg-brand-red/10 hover:text-brand-red"
            onClick={() => setActive(active > 1 ? active - 1 : 1)}  >
            <FaBackward />
          </button>
        </>
      }
      {
        totalPages > 1 &&
        Array(totalPages).fill('').map((_, n) => {
          const pageNumber = n + 1
          const isVisible = (
            pageNumber === 1 ||
            pageNumber === totalPages ||
            (pageNumber >= active - 1 && pageNumber <= active + 1)
          )

          if (isVisible) {
            return (
              <button
                type="button"
                className={cn(["hover:bg-brand-red/10 hover:text-brand-red border-current ", { [activeClass]: pageNumber === active }])}
                key={n}
                onClick={() => setActive(pageNumber)}
              >
                {pageNumber}
              </button>
            )
          }

          if (pageNumber === active - 2 || pageNumber === active + 2) {
            return <span key={n}>...</span>
          }

          return null
        }).filter(Boolean)
      }
      {active < totalPages &&
        <>
          <button type="button"
            className="hover:scale-105 hover:bg-brand-red/10 hover:text-brand-red"
            onClick={() => setActive(active < totalPages ? (active + 1) : totalPages)} >
            <FaForward />
          </button>
        </>
      }
      <input type="number" name="" id="" value={active} onChange={(e) => setActive(e.target.value)} className="max-w-fit w-[4rem] border outline-none rounded" />
      <span> {active} / {totalPages} </span>
    </div>
  );
};

export default Pagination;
