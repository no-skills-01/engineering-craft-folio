import { createFileRoute } from "@tanstack/react-router";
import Portfolio from "@/components/portfolio/Portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Darshan Atkari — Cloud, DevOps & Platform Engineer" },
      {
        name: "description",
        content:
          "Darshan Atkari builds production-grade cloud platforms, DevSecOps pipelines, and cloud-native infrastructure. Automating the present. Scaling the future.",
      },
      { property: "og:title", content: "Darshan Atkari — Cloud, DevOps & Platform Engineer" },
      {
        property: "og:description",
        content: "Production-grade cloud platforms, DevSecOps pipelines, and cloud-native infrastructure.",
      },
    ],
  }),
  component: Portfolio,
});
