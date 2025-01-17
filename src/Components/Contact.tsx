/** @format */
import { useState } from "react";
import Floatinginput from "./Floatinginput";
import { Button } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../Firebase";

const Contact = () => {
    const form = {
        name :"",
        email : "",
        phone : "",
        message : "",
      };
      const [formdata,setformdata] = useState(form);
      const handlechange = (id:string, value:string) => {
        setformdata({...formdata,[id]:value});
      };

      const handleSubmit = async() =>{
        const valid  = true;
        // let newFromError={[keys:string]:String} ={};
        if(valid){
          await addDoc(collection(db,"Portfolio"), formdata);
          alert("Form submitted successfully");
        }
      }
      
  
  return (
    <div className='md:px-20 font-mono mt-10'>
      <h1 className=' text-4xl text-center font-bold mt-11 md:mt-0 !text-greencolor mb-5'>
        Contact
      </h1>
      <div data-aos="flip-left" data-aos-duration="1000" className='w-[70%] mx-auto flex flex-col gap-6 rounded-3xl border border-greencolor p-8 !shadow-[0_0_10px_1px_#185bc6] '>
        <div className=' text-3xl text-textcolor font-semibold'>
          Lets Connect
        </div>
        <Floatinginput id = "name" name="Name" value={formdata.name} handlechange={handlechange}/>
        <Floatinginput id = "email" name="Email" value={formdata.email} handlechange={handlechange}/>
        <Floatinginput id = "phone" name="Phone" value={formdata.phone} handlechange={handlechange}/>
        <Floatinginput id = "message" name="Message" value={formdata.message} handlechange={handlechange}/>
        <Button onClick={handleSubmit} fullWidth variant="filled" size="lg" radius="lg" rightSection={<IconArrowRight size={14} />}>Send</Button>
      </div>
    </div>
  );
};

export default Contact;
