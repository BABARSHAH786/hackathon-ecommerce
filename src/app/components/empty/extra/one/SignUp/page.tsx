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

                                <p className="font-[500px] font-inter text-[36px] text-black tracking-[%4] leading-[30px]">Create an account</p>

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
                                            <input type="text" placeholder="Name" />
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
                            <div className="w-[371px]  h-[188px] gap-[16px]">
                                <div className="h-[56px] gap-[16px] rounded-[4px] pt-[16px] pr-[122px] pb-[16px] pl-[122px] bg-[#DB4443]  text-white ">
                                    <button className="w-[127px] h-[24px] pt-[] pr-[] pb-[] pl-[] font-medium ">Create Account</button>


                                </div>


                            </div>
                            <div className="w-[371px] h-[56px] rounded-[4px] border-spacing-1 pt-[16px] pr-[88px] pb-[16px] pl-[88px] gab-[10px] ">
                                <div className="w-[199px] h-[24] gap-[16px] flex">
                                    <Image className="pt-[14px] pl-[9px] " src={"/Igoogle.png"} alt="" width={34} height={22} />
                                    <p className="w-[159px] h-[24px] leading-[24px] text-[16px]">Sign up with Google</p>


                                </div>
                                <div className="w-[248px] h-[28px] gap-[16px] flex">
                                    <div className="w-[185px] h-[24px] "><p className="leading-[24px] text-[16px]">Already have account?</p></div>
                                    <div className="w-[47px] h-[28px] gap-[4px]"> <p className="h-[24px] leading-[24px] text-[16px]">
                                    <Link href="/Login">Login</Link>
                                    </p></div>
                                </div>
                            </div>








                        </div>




                    </div>


                </div>

                
                




            </div>


        </div>


    )
}
