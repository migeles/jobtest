import { AiOutlineSearch } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
const Navbar = () => {
  return (
    <div className='w-full h-28 flex justify-center items-center bg-white shadow-md gap-5 px-10'>
      <div className='w-auto h-full flex items-center'>
        <h1 className='text-[#3cb72f] text-3xl font-bold items-center'>
          tokopedia
        </h1>
      </div>
      <div className='w-auto h-full flex items-center'>
        <h1>Kategori</h1>
      </div>

      <div className='relative w-[70%]'>
        <div className='w-[100%] rounded-lg  border-[1px] h-10 flex justify-start items-center'>
          <div className='flex flex-row items-center'>
            <div className='h-full w-auto flex items-center px-4'>
              <AiOutlineSearch size={30} />
            </div>
            <div>Cari di Tokopedia</div>
          </div>
        </div>
        <div className='absolute flex p-2 gap-3 text-sm  text-gray-500 '>
          <h1>Mini Pc</h1>
          <h1>Sepatu Futsal</h1>
          <h1>Kardus Jumbo</h1>
          <h1>Kambing Qurban </h1>
          <h1>Paper Bag</h1>
          <h1>Gtx 1050 Ti</h1>
        </div>
      </div>

      <div className='relative h-full w-auto flex items-center '>
        <FaShoppingCart size={24} />
        <div className='absolute h-full w-[30vw] text-left -bottom-9 flex-row flex justify-start items-center text-sm '>
          <CiLocationOn />
          <div className="">
            <h1>
              dikirim ke {" "}
              <span className="font-bold">
                Jakarta Pusat 
              </span>
              {" "} v
            </h1>
          </div>
        </div>
      </div>

      <div className='relative flex flex-row gap-3 items-center'>
        <div className=' h-[24px] border-r-[1px] '></div>
        <button className='border-[1px] py-1 px-3 rounded-md text-[#3cb72f] border-[#3cb72f]'>
          Masuk
        </button>
        <button className='border-[1px] py-1 px-3 rounded-md text-white bg-[#3cb72f] border-[#3cb72f]'>
          Daftar
        </button>
        
      </div>
    </div>
  );
};

export default Navbar;
