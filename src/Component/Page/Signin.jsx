import {Formik,Form,Field, ErrorMessage} from 'formik';
import * as Yup from 'Yup';
import "./Si.css";
function Signin(){
    const SignupSchema = Yup.object({
        name1: Yup.string()
          .min(6, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        mobileno:Yup.number().min(10,'error').required('Required'),
        pass:Yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\/$%\&\*])(?=.{8,})/,'not strong password').required('Required'),
      });
    return(
       
        <div className='scontainer'>
            <div className='containersign'>
            <h1 className='headsign'> Get Started With Your Account</h1>
                <p className='signpara'>find Your favourite food on 'Our Platform'
                    Just one step to order Your food.
                </p>
            </div>
      <div className='containersign csignright'>
      <Formik 
      
      validationSchema = {SignupSchema}
     
      initialValues={{name1:'',
      email:'',
      
      mobileno:'',
      pass:'',
      }}
      onSubmit = {(values) => {
       alert(JSON.stringify(values, null, 2));
       alert("values"+values);
       console.log(values);
      }}>
       <Form >
        <h1 className='headsign'>Sign Up</h1>
        <br />
           <div><label htmlFor="name1" className='labelname'>Full Name: </label></div>
           <div> <Field type="text" name='name1' className='fields'></Field> </div>
          <ErrorMessage name='name1'className='ce' style={{color:'red'}} ></ErrorMessage>
  <br /> <br />
           <div> <label htmlFor="email" className='labelname'>Email: </label> </div>
           <div> <Field type="email" name='email'className='fields'></Field> </div>
           <ErrorMessage name='email' className='ce'/>
<br /> <br />

<div> <label htmlFor="mobileno" className='labelname'>Mobile Number: </label> </div>
         <div><Field type="number" name='mobileno' className='fields'></Field></div> 
           <ErrorMessage name='mobileno' className='ce'/>
             
           <br /> <br />
          <div> <label htmlFor="pass" className='labelname'>Password: </label>   </div> 
           <div><Field type="password" name='pass'className='fields'></Field> </div>
           <ErrorMessage name='pass' className='ce'/>
           <br /> <br />
           <button type="submit" className='btnsign' >Sign Up</button>
       </Form>
      </Formik>
      </div>
   
       
        </div>
    )
}
export default Signin;