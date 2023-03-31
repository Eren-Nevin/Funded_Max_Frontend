import Head from 'next/head'
import Box from '@/components/Box'
import {
    Adjust,
    TrendingDown,
    CalendarToday,
  } from "@mui/icons-material"
import axios from "axios"
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

// Here you would fetch and return the user
// const useUser = () => ({ user: null, loading: false })

export default function Boxes() {

    // const { user, loading } = useUser()
    // const router = useRouter()
  
    // useEffect(() => {
    //   if (!(user || loading)) {
        // router.push('/login')
    //   }
    // }, [user, loading])
  
    const [minimumTradingDays, setMinimumTradingDays] = useState({
        Minimum:'',
        CurrentResult:'',
    })
    const [profitTarget, setProfitTarget] = useState({
        MinimumProfit:'',
        CurrentResult:'',
    })
    const [dailyLoss, setDailyLoss] = useState({
        MaxDailyLoss:'',
        CurrentResult:'',
    })
    const [initialDepositLoss, setInitialDepositLoss] = useState({
        MaxLoss:'',
        CurrentResult:'',
    })

    const getData = async () => {
        await axios.get("http://135.125.202.125:3001/api/get_goals?login=23231")
        .then(res => {
            let goalsApi = res.data.goals;
            console.log("res\n", res);
            setMinimumTradingDays({
                Minimum:goalsApi['Minimum Trading Days'].Minimum,
                CurrentResult:goalsApi['Minimum Trading Days']['Current Result']
            });
            setProfitTarget({
                MinimumProfit:goalsApi['Profit Target']['Minimum Profit'],
                CurrentResult:goalsApi['Profit Target']['Current Result']
            });
            setDailyLoss({
                MaxDailyLoss:goalsApi['Daily Loss']['Max Loss'],
                CurrentResult:goalsApi['Daily Loss']['Current Result']
            });
            setInitialDepositLoss({
                MaxLoss:goalsApi['Initial Deposit Loss']['Max Loss'],
                CurrentResult:goalsApi['Initial Deposit Loss']['Current Result']
            });
        })
        .catch(err => {
            console.log(err);
        });
    } 

    useEffect(() => {
        let delay = setInterval(() => { getData(); }, 30000);
        return () =>  clearInterval(delay);
    }, []);
    
    console.log("minimumTradingDays\n",minimumTradingDays)
    console.log("profitTarget\n",profitTarget)
    console.log("dailyLoss\n",dailyLoss)
    console.log("initialDepositLoss\n",initialDepositLoss)

    return (
        <>
            <Head>
                <title>Funded Max</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="container   mx-auto  mt-32  bg-[#1e1f21]  px-10 py-5">
                <p className='text-gray-400 mb-5'>Goals Overview</p>
                <div className='grid md:grid-cols-2 sm:grid-cols-2 gap-4'>
                    <Box
                        icon={<CalendarToday className="h-5 mr-2  inline-block" />}
                        title={' Minimum trading days '}
                        expectation={['Minimum:', minimumTradingDays.Minimum+' Day']}
                        Result={['Current result:', minimumTradingDays.CurrentResult+' Day']}
                        Percent={50}
                        chartColor='red'
                    />
                    <Box
                        icon={<Adjust className="h-5 mr-2  inline-block" />}
                        title={' Profit Target '}
                        expectation={['Minimum: ',profitTarget.MinimumProfit]}
                        Result={['Current result: ',profitTarget.CurrentResult]}
                        Percent={50}
                        chartColor='red'
                    />
                    <Box
                        icon={<TrendingDown className="h-5 mr-2  inline-block" />}
                        title={' Daily Loss '}
                        expectation={['Max. loss: ',dailyLoss.MaxDailyLoss]}
                        Result={['Max. loss recorded: ',dailyLoss.CurrentResult]}
                        Percent={50}
                        chartColor='red'
                    />
                    <Box
                        icon={<TrendingDown className="h-5 mr-2  inline-block" />}
                        title={' Initial Deposit Loss '}
                        expectation={['Max. loss: ',initialDepositLoss.MaxLoss]}
                        Result={['Max. loss recorded: ',initialDepositLoss.CurrentResult]}
                        Percent={50}
                        chartColor='red'
                    />
                </div>
            </div>
        </>
    )
}