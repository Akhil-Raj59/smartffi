import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./layouts/root-layout";
import { HomePage } from "@/features/home";
import { ProgramsPage } from "@/features/programs";
import { AssessmentPage } from "@/features/assessment";
import { CorporateTrainingPage } from "@/features/corporate";
import { DashboardPage } from "@/features/dashboard";
import { TeamPage } from "@/features/team";
import { WebinarsPage } from "@/features/webinars";
import { EventsPage } from "@/features/events";
import { BlogPage } from "@/features/blog";
import { CareersPage } from "@/features/careers";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "programs", Component: ProgramsPage },
      { path: "assessment", Component: AssessmentPage },
      { path: "corporate-training", Component: CorporateTrainingPage },
      { path: "dashboard", Component: DashboardPage },
      { path: "team", Component: TeamPage },
      { path: "webinars", Component: WebinarsPage },
      { path: "events", Component: EventsPage },
      { path: "blog", Component: BlogPage },
      { path: "careers", Component: CareersPage },
    ],
  },
]);