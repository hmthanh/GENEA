"use client"

import { signup } from './actions'

export default function RegisterPage() {
    function handleSubmit(event) {
        event.preventDefault();
        event.stopPropagation();
        throw new Error("A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you're trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().");
    }

    return (
            <div className="flex h-screen w-screen items-center justify-center bg-gray-50">
                <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl border border-gray-100 shadow-xl">
                    <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center sm:px-16">
                        <h3 className="text-xl font-semibold">Sign Up</h3>
                        <p className="text-sm text-gray-500">Create an account with your email and password</p>
                    </div>
                    <form action={handleSubmit} className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 sm:px-16" enctype="multipart/form-data" method="POST">
                        {/* <form onSubmit={handleSubmit} className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 sm:px-16" enctype="multipart/form-data" method="POST"> */}
                        <input type="hidden" name="$ACTION_ID_701a4455ede9e1ad6f73c225388290b1fa671339" />
                        <div>
                            <label htmlFor="email" className="block text-xs text-gray-600 uppercase">Email Address</label>
                            <input id="email" type="email" placeholder="user@acme.com" autoComplete="email" required="" className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm" name="email" />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-xs text-gray-600 uppercase">Password</label>
                            <input id="password" type="password" required="" className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm" name="password" />
                        </div>
                        <button type="submit" formAction={signup} aria-disabled="false" className="flex h-10 w-full items-center justify-center rounded-md border text-sm transition-all focus:outline-none">Sign Up<span aria-live="polite" className="sr-only" role="status">Submit form</span>
                        </button>
                        <p className="text-center text-sm text-gray-600">Already have an account? <a className="font-semibold text-gray-800" href="/login">Sign in</a> instead.</p>
                    </form>
                </div>
            </div>
    )
}

{/* <form>
                <label htmlFor="email">Email:</label>
                <input id="email" name="email" type="email" required />
                <label htmlFor="password">Password:</label>
                <input id="password" name="password" type="password" required />
                <button formAction={login}>Log in</button>
                <button formAction={signup}>Sign up</button>
            </form> */}