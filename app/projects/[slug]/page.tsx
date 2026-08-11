import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { ProjectPageContent } from "@/components/project-page-content";
import { getProjectBySlug, projects } from "@/lib/project-data";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  return <><SiteHeader /><ProjectPageContent project={project} /></>;
}
