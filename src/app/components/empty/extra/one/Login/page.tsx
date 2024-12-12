import Image from "next/image";
import Link from "next/link";
export default function SignUP() {
    return (
        <div>
            <div>


                {/* white work */}

                <div className="w-[1305px] h-[781px] top-[200px] gap-[129px] flex">
                    <div className="w-[805px] h-[781px] topright-4 bottomright-4 ">
                        <div className="w-[919px] h-[706px] top-[75px] left-[-8px]">
                            <Image className="pt-[14px] pl-[9px] " src={"/newimage.png"} alt="" width={1720} height={1520} />
                        </div>


                        {/* login */}
                    </div>
                    <div className="w-[371px] h-[530px] gap-[48px]">
                        <div className="w-[339px] h-[78px] gap-[24px]">


                            <div className="w-[339px] h-[30px] ">

                                <p className="font-[500px] font-inter text-[36px] text-black tracking-[%4] leading-[30px]">Log in to Exclusive</p>

                            </div>
                            <div className="w-[191px] h-[24px] ">
                                <p className="font-[400px] font-poppins text-[16px] text-black  leading-[24px]">Enter your details below</p></div>

                        </div>
                        <div className="w-[371px]  h-[404px] gap-[40px]">
                            {/* name */}
                            <div className="w-[370px] h-[176px] gap-[40px]">
                                <div className="w-[370px] h-[32px] gap-[8px]">
                                    <div className="w-[49px] h-[24px]">
                                        <form>
                                            {/* <p>Name</p> */}

                                        </form>
                                    </div>
                                    {/* email */}
                                    <div className="w-[370px] h-[32px] 
          gap-[8px]">
                                        <div className="w-[49px] h-[24px]">
                                            <form>
                                                {/* <p>Email or Phone Number</p> */}
                                                <input type="text" placeholder="Email or Phone Number" /> <br />
                                            </form>
                                        </div>
                                        {/* pssword */}
                                        <div className="w-[370px] h-[32px] 
          gap-[8px]">
                                            <div className="w-[77px] h-[24px]">
                                                <form>
                                                    {/* <p>Password</p> */}
                                                    <input type="text" placeholder="Password" />
                                                </form>
                                            </div>




                                        </div>


                                    </div>

                                </div>
                            </div>
                            <div className="w-[371px]  h-[56px] gap-[87px] flex ">
                                <div className=" w-[143px] h-[56px] gap-[16px] flex rounded-[4px] pt-[16px] pr-[48px] pb-[16px] pl-[48px] bg-[#DB4443]  text-white ">
                                    <button className="w-[97px] h-[24px]  font-medium  text-[16px] leading-[24px]">Log.In</button>
                                    <button className="w-[141px] h-[24px] ml-[117px] text-[16px] leading-[24px] text-[#DB4443]   font-normal">Forget.Password?</button>

                                </div>


                            </div>
                            








                        </div>




                    </div>


                </div>







            </div>


        </div>


    )
}
