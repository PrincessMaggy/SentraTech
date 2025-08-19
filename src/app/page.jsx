import {
  getListPage,
  getSinglePage,
} from "@/lib/utils/helper/contentConverter";

import SeoData from "@/components/common/SeoData";
import HomeBrand from "@/components/brand/HomeBrand";
import HomeHero from "@/components/hero/HomeHero";
import HomePortfolio from "@/components/portfolio/HomePortfolio";
import HomeService from "@/components/service/HomeService";
import HomeSkill from "@/components/skill/HomeSkill";
import PortfolioInnerPage from "@/components/portfolio/PortfolioInnerPage";

export default function Home() {
  const hero = getListPage("/heros/hero.md");
  const skill = getListPage("/skills/skill.md");
  const portfolio = getListPage("/portfolios/_index.md");
  const portfolios = getSinglePage("/portfolios");
  const service = getListPage("/services/_index.md");
  const services = getSinglePage("/services");
  const brand = getListPage("/brands/brand.md");

  return (
    <main>
      <SeoData title="Home" meta_title="Home" description="Description" />
      <HomeHero hero={hero} />
      <HomeSkill skill={skill} />
      <HomePortfolio
        portfolio={portfolio}
        portfolios={portfolios}
        rootUrl="/"
      />
      <HomeService
        service={service}
        services={services.slice(0, 4)}
        home={true}
        rootUrl="/"
      />

      <HomeBrand brand={brand} />

      <PortfolioInnerPage
        portfolio={portfolio}
        portfolios={portfolios}
        rootUrl="/"
      />
    </main>
  );
}
