import Image from 'next/image';
import '@/styles/globals.css';

const Footer = () => {
    return <div className='flex-col bg-lime-900 text-white'>
        <div className='flex justify-center'><Image className='mt-10' src={'/logo.png'} alt='logo' width={300} height={200}/></div>
        <div className='flex justify-center py-10'>
            <div className='flex-col basis-1/2'>
                <div className='font-bold text-2xl py-2'>CONTACT US</div>
                <div>Address : </div>
                <div>Email : </div>
                <div>Mobile phone :</div>
            </div>
            <div className='flex-col'>
                <div className='font-bold text-2xl py-2'>VISIT US</div>
            </div>
        </div>
    </div>
}

export default Footer;