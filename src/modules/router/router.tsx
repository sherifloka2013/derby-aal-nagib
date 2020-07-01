import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Tab2 from "../../pages/Tab2";
import {AppNavBar} from "components/Navbar/AppNavBar";
import {HomePage} from "pages/Home/HomePage";
import {AppFooter} from "components/Footer/AppFooter";
import {TermsAndConditionsPage} from "pages/Terms/TermsAndConditions/TermsAndConditionsPage";
import {Agents} from "pages/Contact/Agents/Agents";
import {Enquiries} from "pages/Contact/Enquiries/Enquiries";
import {LivePage} from "pages/Live/LivePage";

const Tab4 = () => {
  return <div>Tab4</div>;
};

const AppRouter = () => {
  return (
    <Router>
      <AppNavBar />
      <Switch>
        <Route
          path="/terms/terms-and-conditions"
          children={<TermsAndConditionsPage />}
        />
        <Route path="/contact/agents" children={<Agents />} />
        <Route path="/contact/enquiries" children={<Enquiries />} />
        <Route path="/live" children={<LivePage />} />

        <Route path="/about">
          <Tab4 />
        </Route>
        <Route path="/users">
          <Tab2 />
        </Route>
        {/*  the path '/' should be the last one*/}
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
      <AppFooter />
    </Router>
  );
};
export { AppRouter };
