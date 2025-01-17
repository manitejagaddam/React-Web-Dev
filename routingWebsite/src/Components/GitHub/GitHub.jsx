import { useEffect, useState } from "react"


function GitHub() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://api.github.com/users/manitejagaddam")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setData(data);
          
        })
    }, [])



  return (
    <div className="flex items-center justify-center">
        <img src={data.avatar_url} alt="Git Hub Profile Page" width={300}/>
        <div className="p-5 text-3xl text-center text-white bg-zinc-400"> GitHub UserName : {data.login} No of Repositories : {data.public_repos}</div>


    </div>
  )
}

export default GitHub