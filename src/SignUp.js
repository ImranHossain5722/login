import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "./login.css";
const SignUp = () => {
  const [signInWithEmailAndPassword, error] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  if (error) {
    toast(`Error: ${error?.message}`);
  }
  const onSubmit = async (data) => {
    await signInWithEmailAndPassword(data.email, data.password);
  };
  return (
    <div>
      <div className="from-wrap min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <img className="mx-auto h-12 w-auto" src="images/logo.png" alt="" />
            <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
              Entrar na sua conta
            </h2>
            <p className="mt-2 text-center text-base leading-5 text-gray-600">
              ou
              <Link
                to="/"
                class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
              >
                entrar na sua conta existente
              </Link>
            </p>
          </div>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <form
              className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="form-control w-full max-w-sm pt-9 pb-1">
                <label className="text-left block text-sm font-medium leading-5 mb-1 text-gray-700">
                  E-mail
                </label>
                <input
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Esse campo é obrigatório",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Provide a valid Email",
                    },
                  })}
                  type="text"
                  placeholder="Enter Your Email"
                  className=" block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-2xl focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full"
                />
                <label className="label">
                  <span className="label-text-alt text-red-500 text-left">
                    {errors.email?.type === "required" &&
                      `${errors?.email?.message}`}
                  </span>
                  <span className="label-text-alt text-red-500 text-left">
                    {errors.email?.type === "pattern" &&
                      `${errors?.email?.message}`}
                  </span>
                </label>
              </div>
              <div className="reenter-email w-full max-w-sm pt-9 pb-1">
                <label className="text-left block text-sm font-medium leading-5 mb-1 text-gray-700 capitalize">
                  Repetir e-mail
                </label>
                <input
                  {...register("email", {
                    required: {
                      value: true,
                      message:
                        "Os dois e-mails devem ser iguaiEsse campo é obrigatório",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Provide a valid Email",
                    },
                  })}
                  type="text"
                  placeholder="Enter Your Email"
                  className=" block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-2xl focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full"
                />
                <label className="label">
                  <span className="label-text-alt text-red-500 text-left">
                    {errors.email?.type === "required" &&
                      `${errors?.email?.message}`}
                  </span>
                  <span className="label-text-alt text-red-500 text-left">
                    {errors.email?.type === "pattern" &&
                      `${errors?.email?.message}`}
                  </span>
                </label>
              </div>
              <div className="form-control w-full max-w-sm pt-9 pb-1">
                <label className="text-left block text-sm font-medium leading-5 mb-1 text-gray-700">
                  Senha
                </label>
                <input
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Esse campo é obrigatório",
                    },
                    minLength: {
                      value: 6,
                      message: "Must be 6 characters or longer",
                    },
                  })}
                  type="password"
                  placeholder="Enter Your Password"
                  className="form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full "
                />
                <label className="label text-">
                  <span className="label-text-alt text-red-500 text-left">
                    {errors.password?.type === "required" &&
                      `${errors?.password?.message}`}
                  </span>
                  <span className="label-text-alt text-red-500 text-left">
                    {errors.password?.type === "minLength" &&
                      `${errors?.password?.message}`}
                  </span>
                </label>
              </div>
              <div className="checkbox flex justify-center">
                <label class="main text-16">
                  <Link className="text-[12px]">
                    Eu li e aceito os termos de uso, termos de licença de uso de
                    software, política de conteúdo da Kiwify
                  </Link>
                  <input type="checkbox" />
                  <span class="mx-2 md:mx-0 geekmark"></span>
                </label>
              </div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                value="Login"
              >
                {" "}
                Criar conta
              </button>
            </form>
            <div className="lg:hidden sm:flex "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
