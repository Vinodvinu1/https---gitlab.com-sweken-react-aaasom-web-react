import React from 'react'
import Head from "next/head";
import Link from "next/link";
import { Card,CardTitle,CardBody } from 'reactstrap';
import Table from '../../src/components/Booking/BookingTable';
import { useRouter } from 'next/router';


const Index = () => {
  const router = useRouter();

  const handleInput = () => {
    router.push('/Booking_Services/BookingForm')
}

  return (
    <div>
    <Head>
        <title>Booking Services</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
      <CardBody >
       <section className='m-2 text-md'>
    <a onClick={handleInput}  className='text-gray-800 border-b-2 border-gray-600'><button><i className="bi bi-plus-lg"></i>Add a Services</button></a>
    </section>
      <Table/>
      </CardBody>
      </Card>
    </div>

  )
}

export default Index