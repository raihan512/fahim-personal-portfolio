import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Main from "../../Layout/Main/Main";
import AllProjects from "../../Pages/AllProjects/AllProjects";
import ProjectItem from "../../Pages/ProjectItem";
import LeaderShip from "../../Pages/LeaderShip/LeaderShip";
import LeaderShipDetails from "../../Pages/LeaderShipDetails/LeaderShipDetails";
import Certificates from "../../Pages/Certificates/Certificates";
import CertificateDetails from "../../Pages/CertificateDetails/CertificateDetails";
import Acheivements from "../../Pages/Acheivements/Acheivements";
import AcheivementDetails from "../../Pages/AcheivementDetails/AcheivementDetails";
import Works from "../../Pages/Works/Works";
import WorkDetails from "../../Pages/WorkDetails/WorkDetails";
import Contact from "../../Pages/Contact/Contact";

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/projects",
        element: <AllProjects />,
      },
      {
        path: "/projects/project/:id",
        element: <ProjectItem />,
        loader: ({ params }) =>
          fetch(
            `https://qfahim-server-raihan512.vercel.app/project/${params.id}`
          ),
      },
      {
        path: "/leaderships",
        element: <LeaderShip />,
      },
      {
        path: "/leaderships/leadership/:id",
        element: <LeaderShipDetails />,
        loader: ({ params }) =>
          fetch(
            `https://qfahim-server-raihan512.vercel.app/leadership/${params.id}`
          ),
      },
      {
        path: "/certificates",
        element: <Certificates />,
      },
      {
        path: "/certificates/certificate/:id",
        element: <CertificateDetails />,
        loader: ({ params }) =>
          fetch(
            `https://qfahim-server-raihan512.vercel.app/certificate/${params.id}`
          ),
      },
      {
        path: "/acheivements",
        element: <Acheivements />,
      },
      {
        path: "/acheivements/acheivement/:id",
        element: <AcheivementDetails />,
        loader: ({ params }) =>
          fetch(
            `https://qfahim-server-raihan512.vercel.app/acheivement/${params.id}`
          ),
      },
      {
        path: "/works",
        element: <Works />,
      },
      {
        path: "/works/work/:id",
        element: <WorkDetails />,
        loader: ({ params }) =>
          fetch(`https://qfahim-server-raihan512.vercel.app/work/${params.id}`),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
