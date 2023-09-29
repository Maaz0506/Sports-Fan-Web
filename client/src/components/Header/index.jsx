import { useNavigate,Link } from "react-router-dom"

const Header = () => {
  const navigate=useNavigate()
  const handleLogout=()=>{
    localStorage.removeItem("accessToken")
    navigate("/")
  }
  return (
    <div className="flex w-screen bg-blue-600 py-3 "> 
    <div className="flex  w-[40%] justify-center items-center gap-6 text-white font-semibold">
      <div className="text-3xl font-serif">
         CoverDrive
      </div>
      <Link to={'/news'} className="cursor-pointer ">
        News
      </Link>

    </div>
    <div className=" w-screen flex justify-end ">
        <button className="rounded-lg bg-black text-white py-1 px-2 mr-16 ">Chat Now!</button>
        <button className="rounded-lg bg-black text-white py-1 px-2 mr-16 " onClick={handleLogout}>Logout</button>
    </div>
    </div>
  )
}

export default Header
