import { ContactForm } from "./components/ContactForm";
import { Header } from "./components/Header";
import { IntroSection } from "./components/IntroSection";
import { ScheduleForm } from "./components/ScheduleForm";
import { WorkSection } from "./components/WorkSection";
import { Footer } from "./components/Footer";
import "./index.css"


export const App = () => (
  <div className="app-main">
  <Header className="header" />
  <aside className="aside">
      <ContactForm />
      <ScheduleForm />
  </aside>
  <IntroSection />
  <WorkSection />
  <Footer />
</div>
);




