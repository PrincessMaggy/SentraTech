import SeoData from "@/components/common/SeoData";
import MainContact from "@/components/contact/MainContact";

export default function DevContact() {
  return (
    <main>
      <SeoData
        title="Contact SentraTech"
        meta_title="Contact SentraTech"
        description="Contact SentraTech Description"
      />
      <MainContact customPaddingClass={"pt-90"} />
    </main>
  );
}
