import { createFileRoute } from "@tanstack/react-router";

const title = "Work — Sean, Full-Stack Developer";
const description = "Selected work from Sean, freelance full-stack developer based in Oregon.";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  return null;
}
