import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "../Tabs.css";
import ExperienceCards from "../components/ExperienceCards";

function HomeTabs() {
  return (
    <div class="fluid-container">
      <Tabs>
        <TabList>
          <Tab>About Me</Tab>
          <Tab>Projects/Experience</Tab>
          <Tab>Achievements</Tab>
          <Tab>Contact</Tab>
        </TabList>

        <TabPanel>
          <div> About Section</div>
        </TabPanel>
        <TabPanel>
          <ExperienceCards />
        </TabPanel>
        <TabPanel>
          <div>Achievements Section!</div>
        </TabPanel>
        <TabPanel>
          <div>Contact details here</div>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default HomeTabs;
