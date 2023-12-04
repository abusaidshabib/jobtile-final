import CategorySection from "../../Features/HomePage/CategorySection/CategorySection";
import HeroSection from "../../Features/HomePage/HeroSection/HeroSection";
import JobSections from "../../Features/HomePage/JobSections/JobSections";
import SearchSection from "../../Features/HomePage/SearchSection/SearchSection";
import TrustProves from "../../Features/HomePage/TrustProves/TrustProves";

const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <SearchSection />
      <JobSections />
      <CategorySection />
      <TrustProves />
    </div>
  );
};

export default Homepage;
