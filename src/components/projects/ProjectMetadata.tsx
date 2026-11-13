import type { Project } from "../../data/projects.ts";
import { disciplineLine } from "../../data/projects.ts";
import { cn } from "../../lib/cn.ts";

export function ProjectMetadata({
  project,
  className,
  compact = false,
}: {
  project: Project;
  className?: string;
  compact?: boolean;
}) {
  return (
    <dl className={cn("grid gap-4 text-[11px] uppercase tracking-[0.16em]", className)}>
      <div>
        <dt className="text-[var(--c-muted)]">Discipline</dt>
        <dd className="mt-1 normal-case tracking-normal text-[15px]">{disciplineLine(project)}</dd>
      </div>
      {compact ? null : (
        <>
          <div>
            <dt className="text-[var(--c-muted)]">Year</dt>
            <dd className="mt-1">{project.year}</dd>
          </div>
          <div>
            <dt className="text-[var(--c-muted)]">Role</dt>
            <dd className="mt-1">{project.role}</dd>
          </div>
        </>
      )}
    </dl>
  );
}
