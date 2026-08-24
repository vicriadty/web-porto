import { ContactSection } from "@/components/ContactSection";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with Vicri Aditiya — projects, collaborations, or just saying hi.",
};

export default function ContactPage() {
  return (
    <>
      <div className="mx-auto max-w-5xl px-6 pt-24">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-100">
          Contact
        </h1>
        <p className="mt-3 max-w-xl text-zinc-400">
          Reach me directly or use the form below.
        </p>
      </div>
      <ContactSection />
    </>
  );
}
