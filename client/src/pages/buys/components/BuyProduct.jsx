import { useFormik, FormikProvider } from 'formik';
import * as Yup from 'yup';
import Input from '../../../components/Input';
import { confirmBuy, getCodeOfBuy } from '../../../lib/actions';
import { useState } from 'react';
import { toast } from 'sonner';

function BuyProduct({ setSelectedProduct }) {

  const [getCode, setGetCode] = useState(false);
  const [code, setCode] = useState('');

  const handleConfirm = async() => {
    if (!code) {
      toast.error('Codigo No Encontrado');
      return;
    }
    const sessionId = localStorage.getItem('sessionId-epayco');
    if(!sessionId){
      toast.error('Token de Autorización Invalido');
      return;
    }
    const response = await confirmBuy(code, sessionId);
    if(response?.success){
      toast.success(response?.message);
    }else{
      toast.error(response?.message_error);
    }
    setCode('');
    setSelectedProduct(false);
  }

  const formik = useFormik({
    initialValues: {
      document: '',
      phone: '',
    },
    validateOnBlur: true,
    validationSchema: Yup.object({
      document: Yup.string().required('El Documento es requerido'),
      phone: Yup.number('El teléfono debe ser un Número').required('El Teléfono es requerido'),
    }),
    onSubmit: async(values, { resetForm }) => {
      const response = await getCodeOfBuy(values);
      if(response?.success){
        localStorage.setItem('sessionId-epayco', response?.data?.sessionId)
        setGetCode(true);
      }
      resetForm();
    }
  })

  return (
    <div className='p-4 rounded-md border border-white w-full md:w-1/2 lg:w-1/3 mt-8'>
      <h1 className='text-white text-center text-2xl'>
        Comprar Producto
      </h1>
      <FormikProvider value={formik}>
        <form onSubmit={formik.handleSubmit} className={`${getCode ? 'hidden' : ''}`}>
          <div className='mt-6 flex flex-col gap-2'>
            <div className='w-full'>
              <Input 
                label={'Numero de Documento'}
                onChange={formik.handleChange} 
                name={'document'} 
                value={formik.values.document} 
                placeholder={'Indica tu numero de Documento'}
                error={formik.errors.document && formik.touched.document}
                errorMessage={formik.errors.document}
              />
            </div>
            <div className='w-full'>
              <Input
                label={'Numero de Teléfono'}
                onChange={formik.handleChange} 
                name={'phone'} 
                value={formik.values.phone}  
                placeholder={'Indica tu Teléfono'} 
                error={formik.errors.phone && formik.touched.phone}
                errorMessage={formik.errors.phone}
              />
            </div>
            <div className='w-full mt-4'>
              <button 
                type='submit' 
                className='bg-yellow-400 w-full p-2 rounded-full font-semibold'>
                  Comprar
              </button>
            </div>
          </div>
        </form>
      </FormikProvider>
      {getCode ? 
        <div className='w-full mt-4'>
          <p className='my-6 text-white text-sm'>Te hemos enviado un codigo de confirmación a tu correo electronico</p>
          <Input
            label={'Confirma tu Codigo de 6 digitos'}
            onChange={(e) => setCode(e.target.value)}
            name={'code'}
            value={code}  
            placeholder={'Indica tu Codigo de 6 digitos'} 
          />
          <div className='w-full mt-4'>
            <button onClick={handleConfirm} className='bg-yellow-400 p-2 font-bold rounded-full w-full'>Confirmar Codigo</button>
          </div>
        </div> 
        : 
        null
      }
    </div>
  )
}

export default BuyProduct