import { useState } from 'react';
import GetBalance from './components/GetBalance';
import RechargeBalance from './components/RechargeBalance';

function Wallets() {

  const [balance, setBalance] = useState(null);

  const [section, setSection] = useState('balance');

  const handleChangeSection = (sectionSelected) => {
    setBalance(null);
    setSection(sectionSelected);
  }

  return (
    <div className='flex flex-col justify-center items-center h-full p-1'>
      <div className='flex justify-center items-center gap-4 mt-4'>
        <button className={`${section == 'balance' ? 'border-b border-b-yellow-400 text-white' : 'text-white'} p-2 rounded-md`} 
          onClick={() => handleChangeSection('balance')}>
            Balance
        </button>
        <button className={`${section == 'recharges' ? 'border-b border-b-yellow-400 text-white' : 'text-white'} p-2 rounded-md`}  
          onClick={() => handleChangeSection('recharges')}>
            Recargas
        </button>
      </div>
      {section == 'balance' ? 
        <>
          <GetBalance setBalance={setBalance} />
          {balance && <p className='text-white font-bold text-xl mt-4'>Tienes un saldo de ${balance}</p>}
        </> 
        : 
        <RechargeBalance />
      }
      
    </div>
  )
}

export default Wallets