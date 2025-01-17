 
/* eslint-disable @typescript-eslint/no-explicit-any */
const Floatinginput = (props:any) => {
  return (
    <div className="relative">
    <input type="text" id={props.id} value={props.value} onChange = {(e)=>props.handlechange(props.id,e.target.value)}className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-textcolor bg-transparent rounded-lg border border-greencolor appearance-none bg-bgColor   focus:ring-0 focus:border-greencolor peer" placeholder=" " />
 
    <label htmlFor={props.id} className="absolute text-lg text-textcolor  duration-300 transform -translate-y-4 scale-75 top-1 z-10 origin-[0] bg-bgColor px-2 peer-focus:px-2 peer-focus:text-textcolor  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-90 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">{props.name}</label>
</div>
  )
}

export default Floatinginput