import { useForm } from "react-hook-form"
import RequiredError from "../../Components/requiredError/requiredError";
import useAuth from "../../hooks/useAuth";

const Login = () => {

    const {signin} = useAuth();

    const {
        register,
        handleSubmit,
        // formState,
        formState: { errors },
    } = useForm();

    const onSubmit = data => {
       signin(data.email, data.password)
       .then(result => {
        console.log(result)
       })
       .catch(error => console.log(error))
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)} className="form">
                            <label className="fieldset-label">Email</label>
                            <input {...register("email", {required: true})} type="email" className="input" placeholder="Email" />
                            {errors.email && <RequiredError></RequiredError>}
                            <label className="fieldset-label">Password</label>
                            <input {...register("password", {required:true})} type="password" className="input" placeholder="Password" />
                            {errors.password && <RequiredError></RequiredError>}
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;