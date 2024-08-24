export default function UserInfo({data}){

    return(
        <div className="z-10">
            <div className="mt-5  lg:mt-[80px] xl:mt-[160px] xl:mr-[200px]  flex gap-x-8 min-w-[330px] ">
                <div className="border-[10px] border-[#1f2939] rounded-[20px]">
                {data.avatar_url != null ? (<img src={data.avatar_url} className=" size-[100px] rounded-[9px]" ></img>)
                :(<img src="images.jpeg" className=" size-[100px] rounded-[7px]" ></img>)}
                </div>
                <div className="flex flex-col text-[15px] mt-9 gap-y-3 lg:flex lg:flex-row lg:h-14 lg:gap-x-5">
                    <div className=" bg-[#101729] flex items-center justify-center gap-x-2 p-2 rounded-[15px] mr-auto ">
                        <p className="text-[#495265]">Followers</p>
                        <div className="h-[30px] w-[2px] bg-[#495265]"></div>
                        {data.followers != null ? (<p className="text-[#c5cdd7]">{data.followers}</p>)
                        : (<p className="text-[#c5cdd7]">N/A</p>) }
                    </div>
                    <div className=" bg-[#101729] flex items-center justify-center gap-x-2 p-2 rounded-[15px] mr-auto ">
                        <p className="text-[#495265]">Following</p>
                        <div className="h-[30px] w-[2px] bg-[#495265]"></div>
                        {data.followers != null ? (<p className="text-[#c5cdd7]">{data.following}</p>)
                        : (<p className="text-[#c5cdd7]">N/A</p>) }
                    </div>
                    <div className=" bg-[#101729] flex items-center justify-center gap-x-2 p-2 rounded-[15px] mr-auto ">
                        <p className="text-[#495265]">Location</p>
                        <div className="h-[30px] w-[2px] bg-[#495265]"></div>
                        {data.followers != null ? (<p className="text-[#c5cdd7]">{data.location}</p>)
                        : (<p className="text-[#c5cdd7]">N/A</p>) }
                    </div>
                </div>
            </div>
        </div>
    );
}