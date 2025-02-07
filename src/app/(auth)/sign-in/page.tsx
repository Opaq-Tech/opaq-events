'use client';

import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { signInSchema } from '@/schemas/signInSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import Concert from '../../../../public/img/Concert.jpg';
import DarkLogo from '../../../../public/img/opaqNOBG-01.png';
import Image from 'next/image';

type signUpData = z.infer<typeof signInSchema>;

export default function Sign() {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<signUpData>({ resolver: zodResolver(signInSchema) });

    const onSubmit: SubmitHandler<signUpData> = async(data) => {
        console.log(data);
    }
    return (
        <div className="flex h-screen justify-center items-center">
            <div className='relative'>
                <Image src={Concert} alt='Concert.jpg' className='brightness-75 h-screen w-[950px] object-cover' /> {/* change this image */}
                <p className='text-5xl text-white absolute top-[100px] p-2'>Enjoy the seamless ticking experience.</p>
            </div>
            <div className="w-[600px] h-screen flex flex-col justify-center items-center">
                <div className='mb-6'>
                    <Image src={DarkLogo} alt='opaqNOBG-01.png' className='h-[100px] w-[310px]'/>
                </div>
                    <h3 className='pb-6 text-4xl'>Sign Up</h3>
                <form className="max-w-md mx-auto" onSubmit={handleSubmit(onSubmit)} method='post'>
                    <div className="relative z-0 w-[330px] mb-5 group">
                        <input type="email" { ...register('email') } id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        { errors.email && (<p className='text-red-500'>{ errors.email.message }</p>) }
                        <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="password" { ...register('password') } id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        { errors.password && (<p className='text-red-500'>{ errors.password.message }</p>) }
                        <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:bg-blue-500" disabled={ isSubmitting }>Register</button>
                </form>

            </div>
        </div>
    )
}