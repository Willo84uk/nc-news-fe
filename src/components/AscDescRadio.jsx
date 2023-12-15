import { useEffect, useState } from "react";

function AscDescRadio({selectedTopic, sortOrder, setSortOrder, searchParams, setSearchParams}) {

    const [descend, setDescend] = useState(true)

    const changeRadio = (event) => {
      const newSearchParams = {sort_by:searchParams.get("sort_by")?searchParams.get("sort_by"):"votes", order:event.target.id}
      setSearchParams(newSearchParams)
        setDescend(!descend)
        setSortOrder(event.target.id)
    }

    useEffect(() => {
      if(searchParams.get("order") === "desc" || !searchParams.get("order")){
        setDescend(true)
      } else {
        setDescend(false)
      }
    },[searchParams, selectedTopic, sortOrder])

  return (
    <form>
      <div>
        <input type="radio" id="asc" name="asc" checked={!descend} onChange={changeRadio} />
        <label htmlFor="asc">Ascending</label>
      <div></div>   
        <input type="radio" id="desc" name="desc" checked={descend} onChange={changeRadio} />
        <label htmlFor="desc">Descending</label>
      </div>
    </form>
  );
}

export default AscDescRadio;
