import Link from "next/link";
import { prisma } from "@/lib/prisma";
import ApplicationCard from "@/components/ApplicationCard";

export default async function ApplicationsPage() {
  const applications = await prisma.application.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="page">
      <nav>
        <Link href="/" className="wordmark">
          <span className="dot" />
          Ledger
        </Link>
        <Link href="/applications/new" className="nav-cta">
          + Add application
        </Link>
      </nav>

      <div className="wrap dashboard">
        <div className="dash-header">
          <div>
            <h1 className="dash-title">My applications</h1>
            <p className="dash-sub">
              {applications.length === 0
                ? "NOTHING TRACKED YET"
                : `${applications.length} APPLICATION${
                    applications.length === 1 ? "" : "S"
                  } · NEWEST FIRST`}
            </p>
          </div>
        </div>

        {applications.length === 0 ? (
          <div className="empty-state">
            <p className="empty-state-title">Nothing here yet</p>
            <p className="empty-state-desc">
              Add the first role you&apos;ve applied to and it&apos;ll show up
              here, ready to update as things move along.
            </p>
            <Link href="/applications/new" className="btn-primary">
              Add your first application →
            </Link>
          </div>
        ) : (
          <div className="applications-grid">
            {applications.map((application) => (
              <ApplicationCard
                key={application.id}
                id={application.id}
                company={application.company}
                position={application.position}
                status={application.status}
                createdAt={application.createdAt}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}