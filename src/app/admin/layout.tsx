import { Header } from "@/components/globalComponents/header";
import { Footer } from "@/components/globalComponents/footer";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
      <main className="flex-1 w-full px-4 xl:px-12 flex flex-col justify-center items-center py-8">
        {children}
      </main>
        <Footer />
    </div>
  );
}