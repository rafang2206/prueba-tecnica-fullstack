import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";
import { confirmBuy } from "../../../lib/actions";

function ConfirmBuy() {

  const [searchParams] = useSearchParams();

  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async() => {
      const code = searchParams.get('code');
      if (!code) {
        setLoading(false);
        setMessage('Codigo No Encontrado');
        return;
      }
      const sessionId = localStorage.getItem('sessionId-epayco');
      if(!sessionId){
        setLoading(false);
        setMessage('Token de Autorización Invalido');
        return;
      }
      const response = await confirmBuy(code, sessionId);
      if(response?.success){
        setMessage(response?.message);
      }else{
        setMessage(response?.message_error);
      }
      setLoading(false);
    }
    getData();
  }, [])

  return (
    <div className='h- min-h-[20rem] p-1 flex justify-center items-center gap-4 mt-8'>
      <div className="h-full">
        {loading ? 
        <p className="text-white text-3xl">Loading...</p>
        :
        <p className="text-white text-3xl">{message}</p>
        }
      </div>
    </div>
  )
}

export default ConfirmBuy