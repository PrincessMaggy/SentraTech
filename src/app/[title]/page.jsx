import { notFound } from "next/navigation";
import { getSinglePage } from "@/lib/utils/helper/contentConverter";

import SeoData from "@/components/common/SeoData";
import PortfolioCard from "@/components/portfolio/card/PortfolioCard";
import PortfolioDetails from "@/components/portfolio/details/PortfolioDetails";
import Related1 from "@/components/related/Related1";

export const generateStaticParams = () => {
  const portfolios = getSinglePage("portfolios");
  const paths = portfolios.map((program) => ({
    title: program.slug,
  }));

  return paths;
};

export default function DevPortfolioDetails({ params }) {
  const portfolios = getSinglePage("portfolios");
  if (!(portfolios && portfolios.length)) {
    notFound();
  }
  const portfolio = portfolios.find((item) => item.slug === params.title);
  const related = portfolios.filter((item) => item.slug !== params.title);

  if (!(portfolio && portfolio.frontmatter)) {
    notFound();
  }

  const { meta_title, meta_description } = portfolio.frontmatter.meta || {};
  return (
    <>
      <SeoData
        title={portfolio.frontmatter.title || "Portfolio details page"}
        meta_title={meta_title || "Portfolio details page"}
        description={meta_description || "Portfolio details page description"}
      />
      <PortfolioDetails
        details={portfolio}
        customPaddingClass={"pt-130 pb-130"}
      />
      {related && related.length && (
        <Related1 section_name="Portfolio" title="Related Work">
          <div className="pd-portfolio">
            <div className="flex">
              {related.slice(0, 3).map((item, i) => (
                <PortfolioCard
                  key={`related_portfolio-card-${i}`}
                  smallItem={true}
                  portfolio={item}
                  rootUrl="/"
                />
              ))}
            </div>
          </div>
        </Related1>
      )}
    </>
  );
}
