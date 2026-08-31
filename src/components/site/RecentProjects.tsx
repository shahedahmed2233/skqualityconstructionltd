import { Play } from "lucide-react";
import { projects } from "@/data/site";
import { Reveal, Section, SectionHeading } from "./primitives";

export function RecentProjects() {
  return (
    <Section id="projects" className="bg-ink">
      <SectionHeading
        eyebrow="Our Work"
        title="Recent Projects"
        subtitle="A look at some of our latest roofing and exterior work."
        light
      />

      <div className="mt-12 grid gap-8">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 0.06}>
            <article className="overflow-hidden rounded-lg border border-ink-foreground/12 bg-ink-foreground/[0.04]">
              <div className="relative aspect-video w-full bg-ink-foreground/[0.06]">
                {project.video ? (
                  <video
                    src={project.video}
                    controls
                    playsInline
                    preload="metadata"
                    className="size-full object-cover"
                  />
                ) : (
                  /* VIDEO PLACEHOLDER — add a path to `video` in src/data/site.ts */
                  <div className="flex size-full flex-col items-center justify-center gap-4 text-center">
                    <span className="flex size-16 items-center justify-center rounded-full border border-bronze/50 bg-bronze/10">
                      <Play className="ml-0.5 size-6 text-bronze" aria-hidden />
                    </span>
                    <span className="text-xs tracking-[0.22em] text-ink-foreground/50 uppercase">
                      Video Placeholder
                    </span>
                  </div>
                )}
              </div>
              <div className="flex flex-wrap items-end justify-between gap-4 border-t border-ink-foreground/10 px-6 py-5 sm:px-8">
                <div>
                  <p className="eyebrow">{`0${i + 1}`}</p>
                  <h3 className="mt-2 text-2xl text-ink-foreground">{project.title}</h3>
                  <p className="mt-1.5 text-sm text-ink-foreground/60">{project.description}</p>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
