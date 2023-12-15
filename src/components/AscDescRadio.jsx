import { useEffect, useState } from "react";

function AscDescRadio({sortOrder, setSortOrder}) {

    const [descend, setDescend] = useState(true)

    const changeRadio = (event) => {
        setDescend(!descend)
        setSortOrder(event.target.id)
    }

    useEffect(() => {
      if(sortOrder === "asc"){
        setDescend(false)
      }
    },[])

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
