import axios from "axios"
import { useEffect, useState } from "react"
import Card from "../components/blog/Card"


const Dashboard = () => {
const [data, setData] = useState([])
const getCard = async() => {
  const {data} = await axios(`${import.meta.env.VITE_BASE_URL}/api/blogs`)
  setData(data)
  // console.log(data);
}

useEffect(() => {
  getCard()

}, [])

  return (<>
  {!data?.length && (
        <div className="d-flex justify-content-center align-items-center profile-div">
          <h3>
           🎉🎉🎉 Welcome to BlogAPP🎉🎉🎉
          </h3>
        </div>
      )}
    
    <div className="row justify-content-center w-100 my-3 mx-0 gap-4">
      {data?.map((item)=>(<div key={item.id} className="col-9 col-md-4 col-lg-3 justify-content-center d-flex"><Card   {...item} getCard={getCard} /></div>))}
    </div>
    </>
  )
}

export default Dashboard