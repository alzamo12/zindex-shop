import { useForm } from "react-hook-form";
import RequiredError from "../../Components/requiredError/requiredError";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const SignUp = () => {

    const {createUser, updateUserProfile} = useAuth();
    const axiosSecure = useAxiosSecure();

    const {
        register,
        handleSubmit,
        // formState,
        formState: { errors },
    } = useForm();

    const onSubmit = data => {
        createUser(data.email, data.password)
        .then( result => {
            const loggedUser = result.user;
            updateUserProfile(data.name, data.photo)
            .then(async(result) => {
                const userInfo = {
                    name: data.name,
                    email: data.email,
                    uid: loggedUser.uid 
                }
              const res = await axiosSecure.post('/user', userInfo);
              if(res.data.insertedId){
                Swal.fire({
                    title: "User created Successfully",
                    icon: "success",
                    draggable: true
                  });
              }
              console.log(res.data)
            })
            .catch(error => {
                console.log(error)
            })
        })
        .catch(error => {
            console.log(error)
        })
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
                            {/* Name */}
                            <label className="fieldset-label">Your Name</label>
                            <input {...register("name", { required: true })} type="text" className="input" placeholder="Your Name" />
                            {errors.name && <RequiredError></RequiredError>}
                            {/* Photo */}
                            <label className="fieldset-label">Photo URL</label>
                            <input {...register("photo", { required: true })} type="text" className="input" placeholder="Photo URL" />
                            {errors.photo && <RequiredError></RequiredError>}
                            {/* email */}
                            <label className="fieldset-label">Email</label>
                            <input {...register("email", { required: true })} type="email" className="input" placeholder="Email" />
                            {errors.email && <RequiredError></RequiredError>}
                            {/* password */}
                            <label className="fieldset-label">Password</label>
                            <input {...register("password", { required: true })} type="password" className="input" placeholder="Password" />
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

export default SignUp;