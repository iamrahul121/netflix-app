import React, {useState, useEffect} from 'react'
import { getData } from '../Api/Api'

const Lists = ({title, param}) => {
  const [items, setItems] = useState([])

  useEffect(() => {
    getData(param).then((res) =>{
      setItems(res.data.results)
    })
  }, [])
  console.log(items)
  
  return (
    <div className="list">
    <div className="row">
      <h2 className="text-white title">{ title }</h2>
      <div className="col">
        <div className="row__posters">
          {
            items.map(elm => <img
              className="row__poster row__posterLarge"
              src={`https://image.tmdb.org/t/p/original${elm.poster_path}`}
              alt={elm.title}
            />
            )  
          }
        </div>
      </div>
    </div>
  </div>
  )
}

export default Lists