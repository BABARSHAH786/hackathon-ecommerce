
// NEW   FILE
import Image from "next/image";
import Link from "next/link";
export default function Header() {
  return (
    <div>
      

      {/* side bar */}
      <div className="w-[217px] h-[344px] relative left-[135px] ">
        <div className="w-[217px] h-[24px] flex">
            <div className="w-[142px]">Woman’s Fashion</div>
            <Image src={"/Vector7.png"} alt="" width={14} height={14} />
        </div>
        <div className="w-[217px] h-[24px] flex">
            <div className="w-[142px]">Men Fashion</div>
            <Image src={"/Vector7.png"} alt="" width={14} height={14} />
        </div>
        <p>Electronics</p>
        <p>Home & Lifestyle</p>
        <p>Medicine</p>
        <p>Sports & Outdoor</p>
        <p>Baby’s & Toys</p>
        <p>Groceries & Pets</p>
        <p>Health & Beauty</p>



</div>
{/* todays game */}
<div className="w-[1308px] h-[493px] relative left-[135px] ">
<div className="w-[1170px] h-[103px] relative gap-[470px] ">
  <div className="w-[600px] ">
      <div className="w-[211px]">
      <div className="w-[100px] h-[40px] ">
          {/* image rec 18 */}
          <p className=" text-[#DB4444] ">Todays</p>
          <h2 className="w-[211px] font-semibold text-[36px] leading-[48px] ">Flash Sales</h2>
          </div>
      </div>
</div>
</div>
{/* image add to cart */}
<div className="w-[1308px] h-[493px] relative  flex gap-[30px] ">
<div className="w-[270px] h-[350px] gap-[16px] ">
<div className="w-[270px] h-[250px] rounded-[4px] bg-[#F5F5F5] ">
<div className="mt-2">
<div className="bg-[#DB4444] mt-5 w-[55px] top-[4px] h-[26px] pt-[4px] pl-[12pX] rounded-[4px] text-white ">
    <p >-40%</p>
    </div>
</div>
    
    <div className="w-[190px] h-[180px] pt-[35px] pl-[40px]">
<Image className="pt-[14px] pl-[9px] " src={"/IMAGE1.png"} alt="" width={172} height={152} />
</div>


    
    
    </div>

    
    </div>
    {/* second */}
    <div className="w-[270px] h-[350px] gap-[16px] ">
<div className="w-[270px] h-[250px] rounded-[4px] bg-[#F5F5F5] ">
    <div className="mt-2">
    <div className="bg-[#DB4444] mt-5 w-[55px] top-[4px] h-[26px] pt-[4px] pl-[12px] rounded-[4px] text-white ">
    <p >-35%</p>
    </div>
</div>
    
    <div className="w-[190px] h-[180px] pt-[35px] pl-[40px]">
<Image className="pt-[14px] pl-[9px] " src={"/IMAGE2.png"} alt="" width={172} height={152} />
</div>


    
    
    </div>

    
    </div>


    {/* third */}
    <div className="w-[270px] h-[350px] gap-[16px] ">
<div className="w-[270px] h-[250px] rounded-[4px] bg-[#F5F5F5] ">
    <div className="mt-2">
<div className="bg-[#DB4444] mt-5 w-[55px] top-[4px] h-[26px] pt-[4px] pl-[12pX]rounded-[4px] text-white ">
    <p >-30%</p>
    </div>
</div>
    
    <div className="w-[190px] h-[180px] pt-[35px] pl-[40px]">
<Image className="pt-[14px] pl-[9px] " src={"/IMAGE3.png"} alt="" width={172} height={152} />
</div>


    
    
    </div>

    
    </div>


    {/* forth */}
    <div className="w-[270px] h-[350px] gap-[16px] ">
<div className="w-[270px] h-[250px] rounded-[4px] bg-[#F5F5F5] ">
    <div className="mt-2">
<div className="bg-[#DB4444] mt-5 w-[55px] top-[4px] h-[26px] pt-[4px] pl-[12px] rounded-[4px] text-white ">
<p >-25%</p>
    </div>
</div>
    
    <div className="w-[190px] h-[180px] pt-[35px] pl-[40px]">
<Image className="pt-[14px] pl-[9px] " src={"/IMAGE4.png"} alt="" width={172} height={152} />
</div>


    
    
    </div>

    
    </div>
    {/* 5th */}
    <div className="w-[270px] h-[350px] gap-[16px] ">
<div className="w-[270px] h-[250px] rounded-[4px] bg-[#F5F5F5] ">
    <div className="mt-2">
<div className="bg-[#DB4444] mt-5 w-[55px] top-[4px] h-[26px] pt-[4px] pl-[12px] rounded-[4px] text-white ">
    <p >-25%</p>
    </div>
    </div>
    
    <div className="w-[190px] h-[180px] pt-[35px] pl-[40px]">
<Image className="pt-[14px] pl-[9px] " src={"/IMAGE4.png"} alt="" width={172} height={152} />
</div>


    
    
    </div>

    
    </div>

       </div>



      </div>


{/* 2 hachton */}



    </div>
  );
}
