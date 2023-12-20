import Image from 'next/image';
import '@/styles/globals.css';

const Header = props => {
    return <div className='flex m-10'>
        <div className='flex-none m-5 '>
            <Image src={'/logo.png'} alt='logo' width={400} height={200}/>
        </div>
        <div className='flex-1 m-5'>
            <div className='text-right'>Open 8:00 AM - 5:00 PM - Monday to Saturday</div>
            <div className='flex flex-row mx-2 mt-2'>
                <div className='mx-5 font-bold'>SERVICES</div>
                <div className='mx-5 font-bold'>PRODUCTS</div>
                <div className='mx-5 font-bold'>ABOUT US</div>
                <div className='mx-5 font-bold'>CONTACT US</div>
            </div>
        </div>
    </div>
}

export default Header;