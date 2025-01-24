import React from 'react'; 
import WelcomPage from './_component/WelcomPage';
import Image from 'next/image';

function MyPage() {
 return(
 <div className='pt-[62px] flex flex-col justify-center items-center'>
    <Image src={"/logo.jpg"} width={100} height={100} alt='logo' priority={true} className='m-5'></Image>
  <WelcomPage/>
 </div>
 )
}

export default MyPage;