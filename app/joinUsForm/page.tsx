import { Separator } from "@/components/ui/separator";
import RegistrationForm from "@/app/pages/joinUsForm";
import RetroGrid from "@/components/ui/retro-grid";
import EcellLogo from "@/app/images/EcellREClogo.png";
import Image from "next/image";


const FormPage = () => {
  return (
    <div className="relative overflow-hidden">
      <RetroGrid/>
      <div className="relative space-y-6 max-w-[640px] mx-auto my-10 p-4 bg-white rounded-lg">
        <div>
            <div className="flex items-center mb-4">
            <Image
              src={EcellLogo}
              alt="Ecell REC Logo"
              width={100}
              height={100}
              className="mr-4"
            />
            <h2 className="text-xl -ml-3 font-bold text-blue-600"> E-CELL REC</h2>
            </div>
          <h2 className="text-xl font-semibold my-2">
            Register as a member of E-Cell REC
          </h2>
          <p className="mb-4">
            Join the biggest community of student entrepreneurs in the region. Get news to exclusive events, workshops, and resources to help you start your entrepreneurial journey.
          </p>
          <p className="text-sm text-muted-foreground">
            Fill out this form to register as a member of the{" "}
            <span className="text-foreground">E-Cell REC</span>, the
            community for student entrepreneurs.
          </p>
        </div>
        <Separator />
        <RegistrationForm />
      </div>
    </div>
  );
};

export default FormPage;