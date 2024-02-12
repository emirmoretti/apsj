import React, { ChangeEvent, FormEvent, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { signInUser } from '../../firebase'
import { toast } from 'react-toastify';

const defaultFormFields = {
    email: '',
    password: '',
}

const Login = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password } = formFields
    const navigate = useNavigate();
    const notifySuccess = (user) => toast.success("Usuario logeado: " + user);
    const notifyError = () => toast.error("Usuario y/o password invalido");

    const resetFormFields = () => {
        return (
            setFormFields(defaultFormFields)
        );
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const userCredential = await signInUser(email, password)
            if (userCredential) {
                resetFormFields()
                notifySuccess(email);
                navigate('/dashboard')
            }
        } catch (error) {
            console.log('User Sign In Failed', error.message);
            notifyError(error.message);
            //alert('User Sign In Failed', error.message);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormFields({ ...formFields, [name]: value })
    }


    return (
        <>
            <main >
                <section>
                    <div className="container">
                        <div className="row" data-aos="zoom-in" data-aos-duration="3000">
                            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                                <div className="card border-0 shadow rounded-3 my-5">
                                    <div className="card-body p-4 p-sm-5">
                                        <h5 className="card-title text-center mb-5 fw-light fs-5">Iniciar sesión</h5>
                                        <form onSubmit={handleSubmit}>
                                            <div className="form-floating mb-3">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="floatingInput"
                                                    placeholder="name@example.com"
                                                    name="email"
                                                    value={email}
                                                    onChange={handleChange}
                                                    required
                                                />
                                                <label htmlFor="floatingInput">Email</label>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    id="floatingPassword"
                                                    placeholder="Password"
                                                    name='password'
                                                    value={password}
                                                    onChange={handleChange}
                                                    required />
                                                <label htmlFor="floatingPassword">Password</label>
                                            </div>
                                            <div className="d-grid">
                                                <button className="btn btn-primary btn-login text-uppercase fw-bold">Entrar</button>
                                            </div>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Login