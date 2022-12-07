import Styles from './Signup.module.css'
import {useState} from 'react';
import {UseSignup} from '../../hooks/useSignup';


const Signup = () => {
    const [email, setEmail] = useState('');   
    const [password, setPassword] = useState(''); 
    const [displayName , setDisplayName]=useState('')
    const {signup , isPending , error}= UseSignup()
    const handleSubmit=(e)=>{
        e.preventDefault()
      
        signup(email.trim(), password ,displayName)
    }
    return (
        <form className={Styles['signup-form']} onSubmit={handleSubmit}>
            <h2>Signup</h2>
            <label >
                <span>name:</span>
                <input 
                            type="text"  
                            onChange={(e)=>setDisplayName(e.target.value)}
                            value={displayName}
                 />
            </label>
            <label >
                <span>email:</span>
                <input 
                            type="email"  
                            onChange={(e)=>setEmail(e.target.value)}
                            value={email}
                 />
            </label>
            <label >
                <span>password:</span>
                <input 
                            type="password"
                            onChange={(e)=>setPassword(e.target.value)}
                            value={password}
                 />
            </label>
         
            {isPending && <button className="btn" disabled>Loading...</button>}
            {!isPending &&    <button className='btn'>Signup</button>}
            {error && <p className="error">{error}</p>}
        </form>
    );
}

export default Signup;
