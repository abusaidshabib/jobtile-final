import { Outlet } from "react-router-dom";
import TemplateHero from "../../Features/HomePage/TemplateHero/TemplateHero";

const TemplatePage = () => {
  return (
    <div>
      <TemplateHero />
      <Outlet />
    </div>
  );
};

export default TemplatePage;
