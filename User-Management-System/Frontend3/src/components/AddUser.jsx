import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

function AddUser() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(null);

  let navigate = useNavigate();

  //form submit
  const onUserCreate = async (newUser) => {
    //console.log(newUser);
    setLoading(true);
    // make HTTP POST req to create new user
    try {
      let res = await fetch("http://localhost:4000/user-api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      if (res.status === 201) {
        //user created it shd navigate to users list
        navigate("/users-list");
      } else {
        console.log(res);
        throw new Error("error occurred");
      }
    } catch (err) {
      console.log(err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <p className="text-center text-gray-600 text-2xl mt-20">
        Loading...
      </p>
    );
  }

  if (error) {
    return (
      <p className="text-center text-red-500 text-2xl mt-20">
        {error.message}
      </p>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md">
        <h1 className="text-4xl font-semibold text-gray-800 text-center mb-8">
          Add New User
        </h1>

        {/* Create user form */}
        <form onSubmit={handleSubmit(onUserCreate)} className="space-y-5">
          <input
            type="text"
            {...register("name")}
            placeholder="Name"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
          />

          <input
            type="email"
            {...register("email")}
            placeholder="Email"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
          />

          <input
            type="date"
            {...register("dateOfBirth")}
            placeholder="Date of birth"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
          />

          <input
            type="number"
            {...register("mobileNumber")}
            placeholder="Mobile number"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
          />

          <button
            type="submit"
            className="w-full bg-black text-white text-lg font-medium py-3 rounded-lg hover:bg-gray-800 transition duration-200"
          >
            Add User
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddUser;