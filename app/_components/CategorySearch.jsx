import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input';
import Image from 'next/image';




import React from 'react'

const CategorySearch = () => {
  return (
    <div className='mb-10 items-center flex flex-col gap-2'>
        <h2 className=' font-bold text-4xl tracking-wide'>Search <span className='text-primary'> Doctors</span></h2>
        <h2 className='text-gray-500 text-xl'>Search a Doctor and Book Appointment in one click </h2>
        <div className="flex w-full mt-3 max-w-sm items-center space-x-2">
      <Input type="text" placeholder="Search..." />
      <Button type="submit">
      <Image src="/search.png" className='mr-2' width={20} height={20} alt='img'/>
        
        Search</Button>
    </div>
    </div>
  )
}

export default CategorySearch