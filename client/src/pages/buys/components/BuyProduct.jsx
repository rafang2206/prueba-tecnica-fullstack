import { useFormik, FormikProvider } from 'formik';
import * as Yup from 'yup';
import Input from '../../../components/Input';
import { getCodeOfBuy } from '../../../lib/actions';
import { useState } from 'react';

function BuyProduct() {

  const [getCode, setGetCode] = useState(false);

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
        <form onSubmit={formik.handleSubmit}>
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
                  Obtener Balance
              </button>
            </div>
          </div>
        </form>
      </FormikProvider>
      {getCode ? <p className='text-white mt-4'>Te Hemos enviado un correo para que confirmes tu Compra</p> : null}
    </div>
  )
}

export default BuyProduct