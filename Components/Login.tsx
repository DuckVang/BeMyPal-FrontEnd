import Link from "next/link";

export default function Login() {
  function handleLogin() {}

  return (
    <Link href={`/Register`}>
      <button className="h-8 w-16 rounded-md bg-[#303030]">Login</button>
    </Link>
  );
}
