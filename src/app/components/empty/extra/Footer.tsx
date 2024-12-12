import Image from "next/image"
export default function Footer(){
    return(
        <div>
              <footer className="w-[1440px] h-[440px] top-[1191px] text-white bg-black mt-[40px] ">
                    <div className="w-[1170px] h-[236px] top-[80px] left-[135px] gap-[87px] flex">
                        <div className="w-[217px] h-[188px] gap-[16px] ">
                            <div className="w-[206px] h-[124px] gap-[24px] ">
                                <div className="w-[118px] h-[76px] mt-[15px] gap-[24px]">
                                    <p className="w-[118px] h-[24px] font-inter font-bold text-[24px] mt-[15px] leading-[24px] tracking-[3%]">Exclusive</p>
                                    <p className="w-[101px] mt-[30px] h-[28px] leading-[28px] text-[20px] font-medium">Subscribe</p>

                                </div>
                                <p className="w-[206px] h-[24px] text-[16px] mt-[25px] leading-[24px]">Get 10% off your first order</p>
                            </div>
                            <div className="w-[217px] h-[48px] mt-[25px] border-[1.5] rounded-[4px] pt-[12px] pb-[12px] pl-[16px] gap-[32px]">

                                <p className="w-[130px] h-[24px] text-[16px] mt-[10px] leading-[24px]">Enter your email</p>
                            </div>
                        </div>
                        <div className="w-[175px] h-[180px] gap-[24px]">
                            <b><p className="w-[81px] h-[28px] size-[20px] leading-[28px] font-medium justify-between gap-[23px] ">Support</p></b>
                            <div className="w-[175px] h-[128px] mt-[30px] gap-[16px]">
                                <p className="h-[48px] w-[175px]size-[16px] mt-[30px]leading-[24px]">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                                <p className=" w-[175px]h-[24px] mt-[30px] size-[16px] leading-[24px]">exclusive@gmail.com</p>
                                <p className=" w-[165px]h-[24px] size-[16px] mt-[30px] flex leading-[24px]">+88015-88888-9999</p>
                            </div>
                        </div>
                        <div className="w-[123px] h-[236px] gap-[24px]">
                            <p className="w-[85px] h-[28px] size-[20px] leading-[28px] font-medium">Account</p>
                            <div className="w-[123px] h-[184px] gap-[16px] mt-[30px]">
                                <p className="w-[94px] h-[24px] size-[16px] mt-[30px] leading-[24px] font-medium">My Account</p>
                                <p className="w-[123px] h-[24px] size-[16px] mt-[15px] leading-[24px] font-medium">Login / Register</p>
                                <p className="w-[35px] h-[24px] size-[16px] mt-[15px] leading-[24px] font-medium">Cart</p>
                                <p className="w-[61px] h-[24px] size-[16px] mt-[15px] leading-[24px] font-medium">Wishlist</p>
                                <p className="w-[41px] h-[24px] size-[16px] mt-[15px] leading-[24px] font-medium">Shop</p>
                            </div>
                        </div>
                        <div className="w-[109px] h-[196px] gap-[24px]">
                            <p className="w-[101px] h-[28px] size-[20px] mt-[15px] leading-[28px] font-medium">Quick Link</p>

                            <div className="w-[109px] h-[144px] gap-[16px]">
                                <p className="w-[109px] h-[24px] size-[16px] mt-[15px] leading-[24px] font-medium">Privacy Policy</p>
                                <p className="w-[105px] h-[24px] size-[16px] mt-[15px] leading-[24px] font-medium">Terms Of Use</p>
                                <p className="w-[32px] h-[24px] size-[16px]  mt-[15px] leading-[24px] font-medium">FAQ</p>
                                <p className="w-[66px] h-[24px] size-[16px] mt-[15px] leading-[24px] font-medium">Contact</p>




                            </div>
                        </div>
                        <div className="w-[198px] h-[210px] gap-[24]">
                        <p className="w-[148px] h-[28px] size-[20px] leading-[28px] font-medium">Download App</p>
                        <div className="w-[198px] h-[110px] gap-[8px]">
                        <p className="w-[194px] h-[18px] size-[12px] leading-[18px] font-medium">Save $3 with App New User Only</p> 
                        <div className="w-[198px] h-[84px] gap-[8px] flex">
                        <Image className="pt-[14px] pl-[9px] mt-[20px] w-[80px] h-[80px] " src={"/Qr.png"} alt="" width={34} height={22} />
                       <div className="w-[110px] h-[84px] gap-[4px] ">
                       <Image className="pt-[14px] pl-[9px] mt-[20px]   w-[110px] h-[40px] top-[3px] left-[3px] rounded-[4px] border-[0.6px] " src={"/GoogleP.png"} alt="" width={34} height={22} />
                       <Image className="  mt-[20px] w-[104px] h-[34px] top-[3px] left-[3px] rounded-[4px] border-[0.6px] " src={"/AppStore.png"} alt="" width={24} height={12} />
                       </div>
                        </div>
                        </div>
                    
                     </div>
                    </div>





                </footer>
        </div>
    )
}