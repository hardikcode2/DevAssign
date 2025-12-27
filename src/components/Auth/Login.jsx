import React,{useState} from 'react'

const Login = ({handleLogin}) => {

    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');

    const submitHandler = (e)=>{
    e.preventDefault();
        
        handleLogin(email, password);
        setEmail('');
        setpassword('');
    }


  return (
    <div className='flex h-screen w-screen items-center justify-center bg-gradient-to-br from-gray-950 via-black to-gray-950'>
        <div className='border border-emerald-500/30 rounded-2xl p-12 bg-gray-800/50 backdrop-blur-sm shadow-2xl shadow-emerald-500/10 w-full max-w-md'>
            <div className='text-center mb-8 overflow-visible'>
                <h1 className='text-4xl font-bold mb-2 bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent leading-tight py-1'>
                    DevAssign
                </h1>
                <p className='text-gray-400 text-sm mt-2'>Welcome back! Please login to continue</p>
            </div>
            <form 
            onSubmit={(e)=>{
                submitHandler(e)
            }}
            className='flex flex-col gap-5'>
                <div className='relative'>
                    <input
                    value={email}
                    onChange={(e)=>{
                        setEmail(e.target.value)
                    }}
                    required 
                    className='w-full outline-none bg-gray-900/50 border border-emerald-500/30 text-lg py-3.5 px-5 rounded-xl placeholder:text-gray-500 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300' 
                    type='email' 
                    placeholder='Enter your email'
                    />
                </div>
                <div className='relative'>
                    <input
                    value={password}
                    onChange={(e)=>{
                        setpassword(e.target.value)
                    }}
                    required 
                    className='w-full outline-none bg-gray-900/50 border border-emerald-500/30 text-lg py-3.5 px-5 rounded-xl placeholder:text-gray-500 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300' 
                    type='password' 
                    placeholder='Enter Password'
                    />
                </div>
                <button 
                className='mt-2 text-white border-none outline-none bg-gradient-to-r from-emerald-600 to-emerald-500 text-lg font-medium py-3.5 px-5 rounded-xl hover:from-emerald-500 hover:to-emerald-400 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]' 
                type='submit'
                >
                    Log in
                </button>
            </form>
        </div>
    </div>
  )
}

export default Login