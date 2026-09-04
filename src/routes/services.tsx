import { createFileRoute } from "@tanstack/react-router";

const title = "Services — Sean, Full-Stack Developer";
const description = "Services from Sean, freelance full-stack developer based in Oregon.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return null;
}
