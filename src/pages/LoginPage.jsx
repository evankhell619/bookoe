import { Link } from "react-router-dom";
import Button from "../components/elements/Button";

export const LoginPage = () => {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-purp">Login Woy</h1>
        <p className="font-medium text-red-500 mb-8">Fill the form</p>
        <form action="">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-slate-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="text"
              className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-50"
              placeholder="hehe@mail.com"
              id="email"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-slate-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-50"
              placeholder="*****"
              id="password"
            />
          </div>
          <Button variant="bg-blue-500 w-full">Login</Button>
        </form>
        <div>
          <p className="text-center text-sm mt-5">
            Don't have an account?
            <Link to="/register" className="font-bold text-blue-600">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
