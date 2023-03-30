import React, { useState } from 'react'
import CompanyForm from '../../src/components/partner/CompanyForm';
import SelfForm from '../../src/components/partner/SelfForm';
import {Card, CardTitle} from 'reactstrap'
import Link from 'next/link';

const PartnerForm = () => {
  const [openForm,setOpenForm] = useState(true)
  const [Active,setActive] = useState(true)

  
  const style = 'mx-2  text-gray-800 border-b-2 border-gray-600 text-xl'
  const focus = 'hover:bg-gray-400 focus:outline-none focus:ring focus:ring-violet-300 p-2'
  return (
    <Card>
    <CardTitle tag="h6" className="border-bottom p-3 mb-0 flex justify-between">
      <div>
      <i className="bi bi-diagram-3"></i> &nbsp;
      Partner
      </div>
      <div>
      <span>
      <i className="bi bi-pc-display-horizontal"></i> &nbsp;
     <Link href='/'>Dashboard</Link> 
      </span>
      </div>
      </CardTitle>
    <section className='ml-2 mt-2'>
    <CardTitle className='ml-2 mt-px flex justify-self-end'>

    <button onClick={() => setOpenForm(true)} className={Active===true?`${style}${focus}`:`${style}`} ><i className="bi bi-plus-lg"/>Self</button>
    <button onClick={() => setOpenForm(false)} className={Active===true?`${style}${focus}`:`${style}`}><i className="bi bi-plus-lg"/>Company</button>
    </CardTitle>
    {openForm  ? <SelfForm/> : <CompanyForm/> }
    </section>
    </Card>
  )
}

export default PartnerForm