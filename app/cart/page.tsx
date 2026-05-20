import toast, { Toaster } from "react-hot-toast";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const page = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 text-slate-900">
      <Toaster position="top-center" />
      <div className="mx-auto max-w-6xl rounded-3xl bg-white p-6 shadow-lg">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-semibold">Savatcha</h1>
            <p className="text-sm text-slate-500">
              Buyurtma ma&apos;lumotlarini kiritib, savatchangizni tasdiqlang.
            </p>
          </div>
          <Link href="/">
            <Button variant="outline">Pizza sahifasiga qaytish</Button>
          </Link>
        </div>


      </div>
    </div>
  );
}

export default page