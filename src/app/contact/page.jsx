import SeoData from "@/components/common/SeoData";
import MainContact from "@/components/contact/MainContact";

export default function DevContact() {
  return (
    <main>
      <SeoData
        title="Contact page"
        meta_title="Contact page"
        description="Contact page description"
      />
      <MainContact customPaddingClass={"pt-90"} />
    </main>
  );
}
