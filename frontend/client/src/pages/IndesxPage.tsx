import { ArrowDownIcon, ArrowPathIcon, ArrowRightCircleIcon, ArrowTopRightOnSquareIcon, Bars3BottomLeftIcon, BellAlertIcon, ClockIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import { handleContext } from '../context/AuthContext'
import { useEffect, useState } from 'react'


type UserInfoProps = {
    name: string
    email: string
}

export default function IndesxPage() {
    const { logout } = handleContext()
    const [infoUser, setInfoUser] = useState<UserInfoProps | undefined>({ name: '', email: '' })

    const getInfoUser = async () => {
        const result = await fetch('http://localhost:4000/index', {
            credentials: 'include'
        })
        const data = await result.json()
        console.log(data)
        setInfoUser(data)
    }
    useEffect(() => {
        getInfoUser()
    }, [])
    return (
        <div className="bg-gray-400 min-h-screen p-4 sm:p-10 md:p-20 flex flex-col gap-4">
            <div className="bg-zinc-950 text-gray-400 flex-grow rounded-2xl py-4 px-2 flex flex-col gap-4">

                <div className="px-2 sm:px-4 h-auto flex flex-col sm:flex-row justify-between gap-2">
                    <h1 className="font-bold text-xl cursor-pointer">Detail User</h1>
                    <div className="flex flex-wrap gap-2">
                        <button
                            onClick={logout}
                            className="px-3 py-1 rounded-md font-semibold bg-red-600 text-white"
                        >
                            Logout
                        </button>
                        <button className="px-3 py-1 rounded-md bg-teal-300 text-zinc-950">
                            <div className="flex gap-2 items-center">
                                <ArrowDownIcon className="w-4 h-4" />
                                <span className="font-semibold text-sm">Download info</span>
                            </div>
                        </button>
                    </div>
                </div>

                <div className="px-2 flex flex-col sm:flex-row gap-4">
                    <div className="sm:w-[20%] flex justify-center items-center">
                        <UserCircleIcon className="w-24 h-24" />
                    </div>

                    <div className="flex-1 flex flex-col gap-2">
                        <div className="text-lg font-semibold">{infoUser?.name}</div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                            <div className="px-2">
                                <p className="font-light text-sm">Role</p>
                                <h1 className="font-semibold">Head of UX Design</h1>
                            </div>
                            <div className="px-2">
                                <p className="font-light text-sm">Phone Number</p>
                                <h1 className="font-semibold">+57 300-255-5555</h1>
                            </div>
                            <div className="px-2">
                                <p className="font-light text-sm">Email Address</p>
                                <h1 className="font-semibold">{infoUser?.email}</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                    <div className="bg-white/10 rounded-lg flex gap-2 p-2 cursor-pointer hover:scale-[1.01] transition-transform">
                        <div className="w-16 flex justify-center items-center">
                            <div className="bg-white/25 p-2 rounded-full">
                                <ArrowRightCircleIcon className="w-8 h-8" />
                            </div>
                        </div>
                        <div className="flex flex-col justify-center">
                            <h1 className="text-xl font-bold">309</h1>
                            <span className="text-sm font-light">Total advance</span>
                        </div>
                    </div>

                    <div className="bg-white/10 rounded-lg flex gap-2 p-2 cursor-pointer hover:scale-[1.01] transition-transform">
                        <div className="w-16 flex justify-center items-center">
                            <div className="bg-white/25 p-2 rounded-full">
                                <ArrowPathIcon className="w-8 h-8" />
                            </div>
                        </div>
                        <div className="flex flex-col justify-center">
                            <h1 className="text-xl font-bold">08:46</h1>
                            <span className="text-sm font-light">Avg check in Time</span>
                        </div>
                    </div>

                    <div className="bg-white/10 rounded-lg flex gap-2 p-2 cursor-pointer hover:scale-[1.01] transition-transform">
                        <div className="w-16 flex justify-center items-center">
                            <div className="bg-white/25 p-2 rounded-full">
                                <ArrowTopRightOnSquareIcon className="w-8 h-8" />
                            </div>
                        </div>
                        <div className="flex flex-col justify-center">
                            <h1 className="text-xl font-bold">05:46</h1>
                            <span className="text-sm font-light">Avg check Out Time</span>
                        </div>
                    </div>

                    <div className="bg-white/10 rounded-lg flex gap-2 p-2 cursor-pointer hover:scale-[1.01] transition-transform">
                        <div className="w-16 flex justify-center items-center">
                            <div className="bg-white/25 p-2 rounded-full">
                                <UserCircleIcon className="w-8 h-8" />
                            </div>
                        </div>
                        <div className="flex flex-col justify-center">
                            <h1 className="text-xl font-bold">Role Model</h1>
                            <span className="text-sm font-light">Employee predicate</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-zinc-950 text-gray-400 flex-grow flex-col rounded-2xl min-h-[200px] p-4">
                <div className=' h-12 flex justify-between px-4'>
                    <h1 className='font-semibold text-xl'>Attendance history</h1>
                    <div className='flex gap-2 mb-2'>
                        <button className='bg-trasparent border p-2 rounded-md size-10 cursor-pointer'><BellAlertIcon className='size-6'></BellAlertIcon></button>
                        <button className='bg-trasparent border p-2 rounded-md size-10 cursor-pointer'><Bars3BottomLeftIcon className='size-6'></Bars3BottomLeftIcon></button>
                        <button className='bg-trasparent border p-2 rounded-md w-20 h-10 cursor-pointer'><span>Sort</span></button>
                        <button className='bg-trasparent border p-2 rounded-md w-15 h-10 cursor-pointer'><span>Filter</span></button>
                    </div>
                </div>
                <div className=' h-35 grid grid-cols-4 px-2 gap-2'>
                    <div className=' bg-white/20 rounded-lg py-3 px-2 flex flex-col gap-2 shadow-lg shadow-white/10 cursor-pointer hover:scale-102 transition-all duration-400'>
                        <div className=' w-full h-7 flex'>
                            <div className=' w-full h-7 flex items-center justify-between px-2'>
                                <p className="flex items-center">
                                    <ClockIcon className='size-6' /> <span>March 08 2025</span>
                                </p>
                                <button className='bg-green-50/20 text-green-300 font-semibold p-1 rounded-2xl cursor-pointer'>On time</button>
                            </div>
                        </div>
                        <div className='w-full h-7 flex  justify-between'>
                            <p className='font-light'>Check in Time</p>
                            <p className='font-light'>Check Out Time</p>
                        </div>
                        <div className='w-full h-7 flex  justify-between'>
                            <p className='font-semibold text-2xl'>8:00</p>
                            <p className='font-semibold text-2xl'>15:36</p>
                        </div>
                    </div>
                    <div className=' bg-white/20 rounded-lg py-3 px-2 flex flex-col gap-2 shadow-lg shadow-white/10 cursor-pointer hover:scale-102 transition-all duration-400'>
                        <div className=' w-full h-7 flex'>
                            <div className=' w-full h-7 flex items-center justify-between px-2'>
                                <p className="flex items-center">
                                    <ClockIcon className='size-6' /> <span>March 08 2025</span>
                                </p>
                                <button className='bg-green-50/20 text-green-300 font-semibold p-1 rounded-2xl cursor-pointer'>On time</button>
                            </div>
                        </div>
                        <div className='w-full h-7 flex  justify-between'>
                            <p className='font-light'>Check in Time</p>
                            <p className='font-light'>Check Out Time</p>
                        </div>
                        <div className='w-full h-7 flex  justify-between'>
                            <p className='font-semibold text-2xl'>8:00</p>
                            <p className='font-semibold text-2xl'>15:36</p>
                        </div>
                    </div>
                    <div className=' bg-white/20 rounded-lg py-3 px-2 flex flex-col gap-2 shadow-lg shadow-white/10 cursor-pointer hover:scale-102 transition-all duration-400'>
                        <div className=' w-full h-7 flex'>
                            <div className=' w-full h-7 flex items-center justify-between px-2'>
                                <p className="flex items-center">
                                    <ClockIcon className='size-6' /> <span>March 08 2025</span>
                                </p>
                                <button className='bg-green-50/20 text-green-300 font-semibold p-1 rounded-2xl cursor-pointer'>On time</button>
                            </div>
                        </div>
                        <div className='w-full h-7 flex  justify-between'>
                            <p className='font-light'>Check in Time</p>
                            <p className='font-light'>Check Out Time</p>
                        </div>
                        <div className='w-full h-7 flex  justify-between'>
                            <p className='font-semibold text-2xl'>8:00</p>
                            <p className='font-semibold text-2xl'>15:36</p>
                        </div>
                    </div>
                    <div className=' bg-white/20 rounded-lg py-3 px-2 flex flex-col gap-2 shadow-lg shadow-white/10 cursor-pointer hover:scale-102 transition-all duration-400'>
                        <div className=' w-full h-7 flex'>
                            <div className=' w-full h-7 flex items-center justify-between px-2'>
                                <p className="flex items-center">
                                    <ClockIcon className='size-6' /> <span>March 08 2025</span>
                                </p>
                                <button className='bg-green-50/20 text-green-300 font-semibold p-1 rounded-2xl cursor-pointer'>On time</button>
                            </div>
                        </div>
                        <div className='w-full h-7 flex  justify-between'>
                            <p className='font-light'>Check in Time</p>
                            <p className='font-light'>Check Out Time</p>
                        </div>
                        <div className='w-full h-7 flex  justify-between'>
                            <p className='font-semibold text-2xl'>8:00</p>
                            <p className='font-semibold  text-2xl'>15:36</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
