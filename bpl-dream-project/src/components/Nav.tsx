import Logo from '../assets/assets/logo.png'
import { FaSackDollar } from 'react-icons/fa6';

const Nav = ({coin} : {coin : number}) => {
    
    return (
        <nav className='bg-red-100 items-center'>
            <div className='flex justify-between container mx-auto items-center'>
            <img src={Logo} alt="" />
            <ul className='flex gap-4 items-center'>
                <li>Home</li>
                <li>Fixture</li>
                <li>Players</li>
                <li>Schedule</li>
            </ul>
            <h2 className='font-bold text-3xl text-black-500 flex items-center'><FaSackDollar/>{coin}</h2>
            
            </div>
        </nav>
    );
};

export default Nav;