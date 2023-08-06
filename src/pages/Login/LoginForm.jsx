import React, { useContext, useEffect } from 'react'
import Header from '../../components/Header'
import { useFormik } from 'formik'
import { shema } from './shema'
import userContext from '../../context/userContext'
import { useNavigate } from 'react-router-dom'


const LoginForm = () => {
    //usercontext yapısını kullan sana obje şeklinde veri gelecek
    const { user, signUser } = useContext(userContext)

    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate('/coins')
            console.log(user);
        }
    }, [user])// burada bağimlılık verdik user geldiğinde çalışacak
    //alttaki inputa onchange ve id değeri vererek yazılanı alabiliyoruz
    console.log(user);
    const formik = useFormik({
        initialValues: {//başlangıç değeri
            email: "",
            age: "",
            password: "",
            confirmPassword: "",
            terms: false
        },
        //oluşturduğumuz  shemayı burada tanıttık
        validationSchema: shema,
        //formun gönderilme olayında çalışır
        onSubmit: async (values, actions) => { //burada 2 sn bekle diyoruz
            await new Promise((resolve) => setTimeout(resolve, 2000));
            signUser(values);//burada verileri  contexte atıyoruz
            actions.resetForm(); //formu temizler

            //navigate('/coins')
        }
    })
    //handleBlur dışarıya tıklanınca çalışır
    return (
        <div className=' bg-slate-800 text-white h-[100vh]'>
            <Header />
            <div className='grid place-items-center h-[80vh]'>
                <form className="p-1 flex flex-col"
                    onSubmit={formik.handleSubmit}
                >
                    <label >E-Mail</label>
                    <input
                        className={formik.errors.email ? 'w-[400px] border-2 rounded py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 outline-red-400'
                            : "w-[400px] border-2 rounded py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 outline-none"}
                        type="email"
                        value={formik.values.email}
                        id='email'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {/* burada error varsa ve dışarı tıklanınca hata mesajı basılır */}
                    {formik.errors.email && formik.touched.email ? <p className='text-red-400 text-sm'>{formik.errors.email}</p> : <p className='p-2'></p>}

                    <label >Age</label>
                    <input
                        className={formik.errors.age ? 'w-[400px] border-2 rounded outline-red-400 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400'
                            : "w-[400px] border-2 rounded outline-none py-1.5 pl-1 text-gray-900 placeholder:text-gray-400"}
                        type="number"
                        value={formik.values.age}
                        onChange={formik.handleChange}
                        id='age'
                        onBlur={formik.handleBlur}
                    />
                    {formik.errors.age && formik.touched.age ? <p className='text-red-400 text-sm'>{formik.errors.age}</p> : <p className='p-2'></p>}

                    <label >Password</label>
                    <input
                        className={formik.errors.password ? 'w-[400px] border-2 rounded outline-red-400 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400'
                            : "w-[400px] border-2 rounded outline-none py-1.5 pl-1 text-gray-900 placeholder:text-gray-400"}
                        type="Password"
                        value={formik.values.password}
                        id='password'
                        onChange={formik.handleChange}
                    />
                    {formik.errors.password ? <p className='text-red-400 text-sm'>{formik.errors.password}</p> : <p className='p-2'></p>}

                    <label >Confirm Password</label>
                    <input
                        className={formik.errors.confirmPassword ? 'w-[400px] border-2 rounded outline-red-400 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400'
                            : "w-[400px] border-2 rounded outline-none py-1.5 pl-1 text-gray-900 placeholder:text-gray-400"}
                        type="Password"
                        value={formik.values.confirmPassword}
                        id='confirmPassword'
                        onChange={formik.handleChange}
                    />
                    {formik.errors.confirmPassword ? <p className='text-red-400 text-sm'>{formik.errors.confirmPassword}</p> : <p className='p-2'></p>}

                    <div className='flex'>
                        <input
                            type="checkbox"
                            onChange={formik.handleChange}
                            id='terms'
                            value={formik.values.terms}
                        />
                        <label className='m-3'>I accept</label>
                        {formik.errors.terms ? <p className='text-red-400 text-sm m-3'>{formik.errors.terms}</p> : <p className='text-slate-800 m-3'>.</p>}

                    </div>

                    <button disabled={formik.isSubmitting} type='submit' className=' w-[200px] rounded-3xl text-white bg-gradient-to-r from-teal-400 via-teal-600 to-teal-800 hover:bg-gradient-to-br focus:ring-1 focus:outline-none  px-5 py-2.5 text-center '>Send</button>
                </form>
            </div>

        </div>
    )
}

export default LoginForm