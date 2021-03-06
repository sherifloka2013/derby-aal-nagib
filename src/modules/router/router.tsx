import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {AppNavBar} from "components/Navbar/AppNavBar";
import {HomePage} from "pages/Home/HomePage";
import {AppFooter} from "components/Footer/AppFooter";
import {TermsAndConditionsPage} from "pages/Terms/TermsAndConditions/TermsAndConditionsPage";
import {Agents} from "pages/Contact/Agents/Agents";
import {Enquiries} from "pages/Contact/Enquiries/Enquiries";
import {LivePage} from "pages/Live/LivePage";
import {GalleryPictureModalProps} from "pages/Gallery_Pictures/GalleyPicturesPage";
import {GalleryVideosPage} from "pages/Gallery_Videos/GalleryVideosPage";
import {AgentLoginPage} from "pages/Login/AgentLogin";
import {FancierLoginPage} from "pages/Login/FancierLogin";
import {FormDownloadsPage} from "pages/FormDownloads/FormDownloadsPage";
import {AboutPage} from "pages/About/AboutPage";
import {EventResults} from "pages/Events/EventResults";
import {AllEvents} from "pages/Events/AllEvents";
import {EventBasketing} from "pages/Events/EventBasketing";
import {PrizeMoneyPage} from "pages/Terms/prize/PrizeMoney";
import {AdminPanel} from "../../AdminPanel/AdminPanelIndex";

const AppRouter = () => {
  const shouldShowHeaderAndFooter = window?.location?.href.indexOf("admin") === -1

  return (
    <Router>

      {shouldShowHeaderAndFooter?<AppNavBar/>:<></>}
      <Switch>
        {/*Basketing Events*/}
        <Route path={"/admin"} children={<AdminPanel/>}/>
        <Route path="/results/events/:id" children={<EventResults />} />
        <Route path="/results/basketing/:id" children={<EventBasketing />} />
        <Route path="/Events/all" children={<AllEvents />} />

        <Route
          path="/gallery/pictures"
          children={<GalleryPictureModalProps />}
        />
        <Route path="/gallery/videos" children={<GalleryVideosPage />} />

        <Route
          path="/terms/terms-and-conditions"
          children={<TermsAndConditionsPage />}
        />
        <Route path="/terms/prize" children={<PrizeMoneyPage />} />
        <Route path="/terms/forms" children={<FormDownloadsPage />} />
        <Route path="/contact/agents" children={<Agents />} />
        <Route path="/contact/enquiries" children={<Enquiries />} />
        <Route path="/live" children={<LivePage />} />

        <Route path="/login/agent" children={<AgentLoginPage />} />
        <Route path="/login/fancier" children={<FancierLoginPage />} />
        <Route path="/about" children={<AboutPage />} />

        {/*  the path '/' should be the last one*/}
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
      {shouldShowHeaderAndFooter?<AppFooter/>:<></>}
    </Router>
  );
};
export { AppRouter };
