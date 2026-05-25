import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex flex-col pt-14 ">
      <Header />
      {children}
      <Footer />
    </section>
  );
}
