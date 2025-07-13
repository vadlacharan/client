import CardOutlineDemo from "./dashboard-card"
export default function HomeTab(){
    return <>
         <div className=" rounded-3xl flex m-5 p-5 bg-secondary justify-between gap-3 h-full flex-col sm:flex-row sm:gap-4 ">
                
                <div className=" flex-1 ">
                     <CardOutlineDemo />
                </div>
                <div className=" flex-1 ">
                     <CardOutlineDemo />
                </div>
                <div className=" flex-1 ">
                     <CardOutlineDemo />
                </div>
               
               
            </div>
    </>
}