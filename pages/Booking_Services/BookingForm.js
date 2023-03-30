import {
  Card,
  Row,
  Col,
  CardTitle,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from 'reactstrap';
import Link from 'next/link';
import React, { useState } from 'react'

const Forms = () => {

  const initialValue = {name:'',parentService:'',image:'',tag:'',status:'',publicStatus:'',orderNo:'',favIcon:'',serviceType:'',freeService:'',filterBy:'',serviceChargeType:'',shortUrl:''}
  const [forms,setForms] = useState(initialValue);
  const [formErrors,setFormErrors] = useState({});
  const [isSubmit,setIsSubmit] = useState(false);


    //HANDLING INPUT
    const handleChange = (e) => {
      const {name,value} = e.target;
      setForms({...forms,[name]:value});
      console.log(forms)
      }
      
      //HANDLE SUBMIT
      const handleSubmit = (e) => {
      e.preventDefault();
      setIsSubmit(true);
      }
    

  return (
    <Row>
      <Col>
        <Card>
        <CardTitle tag="h6" className="border-bottom p-3 mb-0 flex justify-between">
        <div>
        <i className="bi bi-gear-wide-connected"></i> &nbsp;
        Booking Services
        </div>
        <div>
        <span>
        <i className="bi bi-pc-display-horizontal"></i> &nbsp;
       <Link href='/'>Dashboard</Link> 
        </span>
        </div>
        </CardTitle>  
          <CardBody>
              <section className='w-300 mx-4'>
              <h1 className='font-bold text-2xl pl-4 lg:ml-44 sm:ml-8'>SERVICE FORM</h1>
              <div className='w-1/2 h-0.5 bg-gray-300'></div>
              <form onSubmit={handleSubmit}>
              <div className='my-2'>
              <label className=''>Name*</label>
              <input className='placeholder:italic placeholder:text-slate-400 block bg-white w-2/4 border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm width' type='text' id='name' name='name' value={forms.name} onChange={handleChange}/>
              </div>
             <div className='mb-2'>
              <label className=''>Services</label>
              <select className='placeholder:italic placeholder:text-slate-400 block bg-white w-2/4 border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm' id='gender' name='gender' value={forms.gender} onChange={handleChange}>
              <option value='service'>Ac Repair</option>
              <option value='service'>Electrical</option>
              </select>
              </div>
              <div className='mb-2'>
              <label className=''>Image</label>
              <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-2/4 border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" aria-describedby="file_input_help" id="uploadImage" type="file" name='uploadImage' value={forms.uploadImage} onChange={handleChange}/>
              </div>
              <div className='mb-2'>
              <label className=''>Tag</label>
              <input className='placeholder:italic placeholder:text-slate-400 block bg-white w-2/4 border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm' type='text' id='dob' name='dob' value={forms.dob} onChange={handleChange}/>
              </div> 
              <div className='mb-2'>
              <label className=''>Rule*</label>
              <input className='placeholder:italic placeholder:text-slate-400 block bg-white w-2/4 border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm' type='text' id='email' name='email' value={forms.email} onChange={handleChange}/>
              </div>
              <div className='mb-2'>
              <label className=''>Status</label>
              <select className='placeholder:italic placeholder:text-slate-400 block bg-white w-2/4 border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm' id='gender' name='gender' value={forms.gender} onChange={handleChange}>
              <option value='Enable'>Enable </option>
              <option value='Disable'>Disable</option>
              </select>
              </div> <div className='mb-2'>
              <label className=''>Public Status</label>
              <select className='placeholder:italic placeholder:text-slate-400 block bg-white w-2/4 border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm' id='gender' name='gender' value={forms.gender} onChange={handleChange}>
              <option value='Enable'>Enable</option>
              <option value='Disable'>Disable</option>
              </select>
              </div> <div className='mb-2'>
              <label className=''>Order No*</label>
              <input className='placeholder:italic placeholder:text-slate-400 block bg-white w-2/4 border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm' type='text' id='phoneNo' name='phoneNo' value={forms.phoneNo} onChange={handleChange}/>
              </div> <div className='mb-2'>
              <label className=''>Fav Icon*</label>
              <input className='placeholder:italic placeholder:text-slate-400 block bg-white w-2/4 border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm' type='text' id='alternativePhone' name='alternativePhone' value={forms.alternativePhone} onChange={handleChange}/>
              </div>
              <div className='mb-2'>
              <label className=''>Service Type*</label>
              <input type="radio" id="Booking" name="Booking" value="Booking"/><label htmlFor="Booking">Booking</label>
              </div>
              <div className='mb-2'>
              <label className=''>Free Service*</label>
              <input type="radio" id="yes" name="yes" value="yes"/><label htmlFor="yes">YES</label>
              <input type="radio" id="no" name="no" value="yes"/><label htmlFor="no">NO</label>
          
              </div>
              <div className='mb-2'>
              <label className=''>Filter By*</label>
              <input type="radio" id="Location" name="Location" value="Location"/><label for="Location">Location</label>
              <input type="radio" id="All" name="All" value="All"/><label for="All">All</label>
              </div>
              <div className='mb-2'>
              <label className=''>Service Charge Type*</label>
              <input type="radio" id="Repair" name="Repair" value="Repair"/><label for="Repair">Repair</label>
              <input type="radio" id="Installation" name="Installation" value="Installation"/><label for="Installation">Installation</label>
              </div>
              <div className='mb-2'>
              <label className=''>Shorturl*</label>
              <input className='placeholder:italic placeholder:text-slate-400 block bg-white w-2/4 border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm' type='text' id='password' name='password' value={forms.password} onChange={handleChange}/>
              </div>
              <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded mt-4 mb-12'>Add Service</button>
              </form>
              </section>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Forms;
