import SearchBar from "@/components/SearchBar";
import Table from "@/components/Table";

export default function Home() {
  return (
    <div>
    <main className="w-full h-screen bg-black flex flex-row relative">
      <section className="flex flex-col p-10 mt-30 ml-20 w-full gap-5">

        <div>
          <h1 className="text-4xl text-neutral-200">Home</h1>
          <SearchBar/>
        </div>

        <div className="flex flex-row gap-5 w-full">

               <div className="border-neutral-500/50 flex flex-col w-1/2 bg-neutral-800/20 rounded border p-4">
                         <h2 className="text-xl text-neutral-200">Recently Completed Tasks</h2>
                         <div className="border-neutral-500/50 bg-neutral-800/20 rounded border mt-4 h-20 w-full"></div>
                         <div className="border-neutral-500/50 bg-neutral-800/20 rounded border mt-4 h-20 w-full"></div>
                         <div className="border-neutral-500/50 bg-neutral-800/20 rounded border mt-4 h-20 w-full"></div>
                         <div className="border-neutral-500/50 bg-neutral-800/20 rounded border mt-4 h-20 w-full"></div>
                        <div className="border-neutral-500/50 bg-neutral-800/20 rounded border mt-4 h-20 w-full"></div>
              </div>



              <div className="border-neutral-500/50 h-80 w-1/2 bg-neutral-800/20 rounded border">
                         <h2 className="text-xl text-neutral-200 ml-4 mt-4">Recently Created Tasks</h2>
                         <div className="mt-4 mx-2 p-2 bg-neutral-700 rounded flex">
                               <input type="checkbox" className="h-4 w-4 mt-1 align-middle form-checkbox text-blue-600   rounded"/>
                               <div className=" basis-1/6 pl-3"><p className="text-base align-middle text-neutral-200 ">Name</p></div>
                               <div className=" basis-3/6 pl-10"><p className="text-base align-middle text-neutral-200">Topic</p></div>
                               <div className=" basis-1/6"><p className="text-base align-middle text-neutral-200">Used Time</p></div>
                               <div className=" basis-1/6 pl-4"><p className="text-base align-middle text-neutral-200">Created by</p></div>
                         </div>
       
              <div>

          </div>
</div>
</div>
      </section>
    </main>
     
    </div>
   
  );
}
