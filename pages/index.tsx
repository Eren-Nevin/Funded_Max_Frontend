import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { BeakerIcon, CalendarIcon } from '@heroicons/react/24/outline'
import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });


export default function Home() {

  const config: any = {
    options: {
      plotOptions: {
       

      },
      legend: {
        show: false,
        showForSingleSeries: false,
        showForNullSeries: false,
        showForZeroSeries: false,
      },
      fill: {
        colors: ['#F44336', '#ff0000', '#ff0000']
      },
      noData: {
        text: 'ii',
        align: 'center',
        verticalAlign: 'middle',
        offsetX: 10,
        offsetY: 10,
        style: {
          color: 'red',
          fontSize: '14px',
          fontFamily: ''
        }
      },
      chart: {
        
      }
    },


  }


  return (
    <>
      <Head>
        <title>Founded Max</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto   mt-32  bg-[#1e1f21]  px-10 py-5">
        <p className='text-gray-400'>Goals Overview</p>
        <div className='grid grid-cols-2 gap-4'>
          <div className=" bg-[#181414] py-3 px-3 rounded">
            <div className="columns-2 col">
              <div className='text-[#30d5f1] font-bold'>
                <CalendarIcon className="h-5 mr-2  inline-block" />
                <span>Minimum trading days</span>
              </div>
              <span className='bg-[rgba(220,53,69,.12)]  text-[#dc3545] rounded px-2 float-right'> Passed </span>
            </div>
            {/*  */}
            <div className="float-right mt-8">
              <Chart options={config.options} series={[1]} type="donut" width="150"/>
            </div>
            <div className="columns-2 mt-10">
              <p className="text-[#676d7d]">Minimum:</p>
              <p className="text-[#676d7d] float-right">1 Day</p>
            </div>
            <div className="columns-2 ">
              <p className="text-[#30d5f1]">Current result:</p>
              <p className="text-[#676d7d] float-right">0 Day</p>
            </div>

          </div>

        </div>

      </div>

    </>
  )
}
