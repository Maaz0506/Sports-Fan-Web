
const Header = () => {
  return (
    <div className="flex w-screen bg-blue-600 py-3 "> 
    <div className="flex  w-[40%] justify-center items-center gap-6 text-white font-semibold">
      <div className="log  text-3xl font-serif">
         CoverDrive
      </div>
      <div className="cursor-pointer ">
        News
      </div>

    </div>
    <div className=" w-screen flex justify-end ">
        <button className="rounded-lg bg-black text-white py-1 px-2 mr-16 ">Chat Now!</button>
    </div>
    </div>
  )
}

export default Header
