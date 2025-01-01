import RetroGrid from '@/components/ui/retro-grid';
const Result = () => {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold text-gray-700 mb-4">
        Thank you for being a member of ecell rec!
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        you&apos;ll get news about exclusive events, workshops, and resources to help you start your entrepreneurial journey in ECELL REC.
      </p>
      <RetroGrid />
    </div>
  );
};

export default Result;
