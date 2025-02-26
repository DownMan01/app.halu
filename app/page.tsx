"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';

type FormData = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        {/* Logo Section */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-indigo-600">NoteDrop</h1>
          <h2 className="mt-4 text-2xl font-bold text-gray-900">
            Welcome back
          </h2>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-lg shadow-xl p-8">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  {...register('password', {
                    required: 'Password is required',
                    minLength: {
                      value: 8,
                      message: 'Password must be at least 8 characters',
                    },
                  })}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-indigo-600"
                >
                  {showPassword ? '👁️' : '👁️'}
                </button>
                {errors.password && (
                  <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
            >
              Sign in
            </button>
          </form>

          {/* Links */}
          <div className="mt-6 text-center text-sm">
            <Link
              href="#"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Forgot password?
            </Link>
          </div>
          <div className="mt-2 text-center text-sm text-gray-600">
            <span>Don't have an account? </span>
            <Link
              href="#"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Sign up
            </Link>
          </div>
        </div>

             
            {/* Social Login Section */}
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-gray-50 text-gray-500">Or continue with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {/* Google */}
                <button
                  type="button"
                  className="w-full flex items-center justify-center p-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"/>
                  </svg>
                  <span className="ml-2 text-sm font-medium text-gray-700">Google</span>
                </button>

                {/* Facebook */}
                <button
                  type="button"
                  className="w-full flex items-center justify-center p-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
                >
                  <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.124-5.864 10.124-11.853z"/>
                  </svg>
                  <span className="ml-2 text-sm font-medium text-gray-700">Facebook</span>
                </button>

                {/* Twitter/X */}
                <button
                  type="button"
                  className="w-full flex items-center justify-center p-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
                >
                  <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  <span className="ml-2 text-sm font-medium text-gray-700">X</span>
                </button>

                {/* Privy.io */}
                <button
                  type="button"
                  className="w-full flex items-center justify-center p-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm6-10V4m0 4l2-2m-2 2l-2-2"/>
                  </svg>
                  <span className="ml-2 text-sm font-medium">Privy</span>
                </button>
              </div>
            </div>

      </div>
    </div>
  );
}