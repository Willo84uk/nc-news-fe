import { useState } from "react";

function AscDescRadio({setSortOrder}) {

    const [descend, setDescend] = useState(true)

    const changeRadio = (event) => {
        setDescend(!descend)
        setSortOrder(event.target.id)
    }

  return (
    <form>
      <div>
        <input type="radio" id="asc" name="asc" checked={!descend} onChange={changeRadio}/>
        <label htmlFor="asc">Ascending</label>
      <div></div>   
        <input type="radio" id="desc" name="desc" checked={descend} onChange={changeRadio} />
        <label htmlFor="desc">Descending</label>
      </div>
    </form>
  );
}

export default AscDescRadio;
