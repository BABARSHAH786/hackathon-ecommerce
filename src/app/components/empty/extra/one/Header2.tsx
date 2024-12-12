import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div>
      <div className="w-[1440px] h-[48px] bg-[#000000] flex">
        <div className="w-[859px] h-[24px] text-[#ffffff] text-[14px] flex mt-[12px] relative pl-[445px]  ">
          <div className="w-[550px] h-[24px] flex">
            <p className="w-[474px] leading-[24px] text-[14px] ">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </p>
            <p className="font-semibold">ShopNow</p>
          </div>
          <div className="relative left-[231px] flex">
            <p>English</p>
            <Image src={"/DropDown.png"} alt="" width={24} height={24} />
          </div>
        </div>
      </div>

      {/* white work */}
      <div className="w-[1170px] h-[38px] mt-10 relative left-[135px] flex">
        <div className="w-[674px] h-[24px] gap-[190px] flex ">
          <p className="w-[118px] h-[24px] font-bold text-[24px] leading-[24px] flex">
            Exclusive
          </p>
          <div className="w-[367px] h-[24px] gap-[48px] justify-between ">
            <Link href="/">Home</Link>
            <Link href="/gsit">Contact</Link>
            <Link href="/jdc-it-city">About</Link>
            <Link href="/saylani">Sign Up</Link>
          </div>
        </div>
      </div>
<div className="w-[1305px] h-[781px] top-[200px] gap-[129px]">
<div className="w-[805px] h-[781px] topright-4 bottomright-4 bg-[#CBE4E8]">
    <div className="w-[919px] h-[706px] top-[75px] left-[-8px]">
    <Image className="pt-[14px] pl-[9px] " src={"/newimage.png"} alt="" width={172} height={152} />
    </div>
    

{/* login */}
    </div>
    <div className="w-[371px] h-[530px] gap-[48px]">
    <div className="w-[339px] h-[78px] gap-[24px]">
    
    
    <div className="w-[339px] h-[30px] ">

        <p className="font-[500px] font-inter text-[36px] text-black tracking-[%4] leading-[30px]">Create an account</p>
        
        </div>
        <div className="w-[191px] h-[24px] ">
        <p className="font-[400px] font-poppins text-[16px] text-black  leading-[24px]">Enter your details below</p></div>
    
        </div>
        <div className="w-[371px] h-[404px] gap-[40px]">
        <div className="w-[370px] h-[176px] gap-[40px]">
        <div className="w-[370px] h-[32px] gap-[8px]">
          <div className="w-[49px] h-[24px]"></div>

          
</div>

          
</div>

        </div>
    </div>


</div>




      </div>
  )
}