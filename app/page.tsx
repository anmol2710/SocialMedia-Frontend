import CenterMenu from "@/components/CenterMenu";
import LeftMenu from "@/components/LeftMenu";
import RightMenu from "@/components/RightMenu";

export default function Home() {
  return (
    <div className=" w-full flex items-center justify-center py-4">
      <div className=" w-full md:w-3/4 flex items-center p-4">
        <div className=" hidden xl:block w-[20%]">
          <LeftMenu />
        </div>
        <div className=" w-full lg:w-[70%] xl:w-[50%]">
          <CenterMenu />
        </div>
        <div className=" hidden lg:block w-[30%]">
          <RightMenu />
        </div>
      </div>
    </div>
  );
}
