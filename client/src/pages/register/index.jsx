import { useFormik, FormikProvider } from 'formik';
import * as Yup from 'yup';
import Input from '../../components/Input';
import { registerClient } from '../../lib/actions';

function Register() {

  const formik = useFormik({
    initialValues: {
      document: '',
      name: '',
      email: '',
      phone: '',
    },
    validateOnBlur: true,
    validationSchema: Yup.object({
      document: Yup.string().required('El Documento es requerido'),
      name: Yup.string().required('El Nombre es requerido'),
      email: Yup.string().email('Debe ser un email valido').required('El Email es requerido'),
      phone: Yup.number('El teléfono debe ser un Número').required('El Teléfono es requerido'),
    }),
    onSubmit: async(values, { resetForm }) => {
      await registerClient(values);
      resetForm();
    }
  })

  return (
    <div className='flex justify-center items-center h-full p-1'>
      <div className='p-4 rounded-md border border-white w-full md:w-1/2 lg:w-1/3 mt-8'>
        <h1 className='text-white text-center text-2xl'>
          Registro de Cliente
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
                  label={'Nombre'}
                  onChange={formik.handleChange} 
                  name={'name'} 
                  value={formik.values.name} 
                  placeholder={'Indica tu Nombre'}
                  error={formik.errors.name && formik.touched.name}
                  errorMessage={formik.errors.name}
                />
              </div>
              <div className='w-full'>
                <Input 
                  label={'Email'}
                  type='email' 
                  onChange={formik.handleChange} 
                  name={'email'} 
                  value={formik.values.email} 
                  placeholder={'Indica tu Email'} 
                  error={formik.errors.email && formik.touched.email}
                  errorMessage={formik.errors.email}
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
                    Registrar
                </button>
              </div>
            </div>
          </form>
        </FormikProvider>
      </div>
    </div>
  )
}

export default Register