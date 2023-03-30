import React, { useState } from 'react'

const CompanyForm = () => {

  const initialValue = {
    companyRegisterNo:'',
    gstNo:'',
    name:'',
    dateOfRegistration:'',
    email:'',
    phoneNo:'',
    alternativePhone:'',
    address1:'',
    address2:'',
    state:'',
    district:'',
    city:'',
    pincode:'',
    uploadProof:'',
    uploadImage:'',
    center:'',
    userName:'',
    password:''
}

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
    <>
    <section className='w-300 mx-4'>
    <h1 className='font-bold text-2xl pl-4 lg:ml-44 sm:ml-8'>COMPANY FORM</h1>
    <div className='w-1/2 h-0.5 bg-gray-300'></div>
    <form onSubmit={handleSubmit}>
    <div className='my-2'>
    <label className=''>Company Reg No*</label>
    <input className='placeholder:italic placeholder:text-slate-400 block bg-white w-2/4 border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm width' type='text' id='companyRegisterNo' name='companyRegisterNo' value={forms.companyRegisterNo} onChange={handleChange}/>
    </div>
    <div className='mb-2'>
    <label className=''>GST No*</label>
    <input className='placeholder:italic placeholder:text-slate-400 block bg-white w-2/4 border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm width' type='text' id='gstNo' name='gstNo' value={forms.gstNo} onChange={handleChange}/>
    </div>
    <div className='mb-2'>
    <label className=''>Name*</label>
    <input className='placeholder:italic placeholder:text-slate-400 block bg-white w-2/4 border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm width' type='text' id='name' name='name' value={forms.name} onChange={handleChange}/>
    </div>
    <div className='mb-2'>
    <label className=''>Date Of Registration*</label>
    <input className='placeholder:italic placeholder:text-slate-400 block bg-white w-2/4 border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm width' type='text' id='dateOfRegistration' name='dateOfRegistration' value={forms.dateOfRegistration} onChange={handleChange}/>
    </div>
    <div className='mb-2'>
    <label className=''>Email*</label>
    <input className='placeholder:italic placeholder:text-slate-400 block bg-white w-2/4 border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm width' type='text' id='email' name='email' value={forms.email} onChange={handleChange}/>
    </div>
     <div className='mb-2'>
    <label className=''>Phone No*</label>
    <input className='placeholder:italic placeholder:text-slate-400 block bg-white w-2/4 border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm width' type='text' id='phoneNo' name='phoneNo' value={forms.phoneNo} onChange={handleChange}/>
    </div> <div className='mb-2'>
    <label className=''>Alternate Phone No*</label>
    <input className='placeholder:italic placeholder:text-slate-400 block bg-white w-2/4 border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm width' type='text' id='alternativePhone' name='alternativePhone' value={forms.alternativePhone} onChange={handleChange}/>
    </div> <div className='mb-2'>
    <label className=''>Address 1*</label>
    <input className='placeholder:italic placeholder:text-slate-400 block bg-white w-2/4 border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm width' type='text' id='address1' name='address1' value={forms.address1} onChange={handleChange}/>
    </div> <div className='mb-2'>
    <label className=''>Address 2*</label>
    <input className='placeholder:italic placeholder:text-slate-400 block bg-white w-2/4 border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm width' type='text' id='address2' name='address2' value={forms.address2} onChange={handleChange}/>
    </div>
    <div className='mb-2'>
    <label className=''>State</label>
    <input className='placeholder:italic placeholder:text-slate-400 block bg-white w-2/4 border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm width' type='text' id='state' name='state' value={forms.state} onChange={handleChange}/>
    </div>
     <div className='mb-2'>
    <label className=''>District</label>
    <input className='placeholder:italic placeholder:text-slate-400 block bg-white w-2/4 border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm width' type='text' id='district' name='district' value={forms.district} onChange={handleChange}/>
    </div>
    <div className='mb-2'>
    <label className=''>City</label>
    <input className='placeholder:italic placeholder:text-slate-400 block bg-white w-2/4 border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm width' type='text' id='city' name='city' value={forms.city} onChange={handleChange}/>
    </div>
    <div className='mb-2'>
    <label className=''>Pincode*</label>
    <input className='placeholder:italic placeholder:text-slate-400 block bg-white w-2/4 border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm width' type='text' id='pincode' name='pincode' value={forms.pincode} onChange={handleChange}/>
    </div>
    
    <div className='mb-2'>
    <label className=''>Upload ID Prroof*</label>
    <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-2/4 border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm width" aria-describedby="file_input_help" id="uploadProof" type="file" name='uploadProof' value={forms.uploadProof} onChange={handleChange}/>
    </div>
    <div className='mb-2'>
    <label className=''>Uplod Photo</label>
    <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-2/4 border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm width" aria-describedby="file_input_help" id="uploadImage" type="file" name='uploadImage' value={forms.uploadImage} onChange={handleChange}/>
    </div>
    <div className='mb-2'>
    <label className=''>Centers*</label>
    <input className='placeholder:italic placeholder:text-slate-400 block bg-white w-2/4 border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm width' type='text' id='center' name='center' value={forms.center} onChange={handleChange}/>
    </div>
    <div className='mb-2'>
    <label className=''>Username*</label>
    <input className='placeholder:italic placeholder:text-slate-400 block bg-white w-2/4 border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm width' type='text' id='userName' name='userName' value={forms.userName} onChange={handleChange}/>
    </div>
    <div className='mb-2'>
    <label className=''>Password</label>
    <input className='placeholder:italic placeholder:text-slate-400 block bg-white w-2/4 border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm width' type='text' id='password' name='password' value={forms.password} onChange={handleChange}/>
    </div>
    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded mt-4 mb-12'>Add Partner</button>
    </form>
    </section>
    </>
  )
}

export default CompanyForm