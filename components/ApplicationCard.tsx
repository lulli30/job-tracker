"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const STATUS_OPTIONS = [
  "Applied",
  "Interview",
  "Offer",
  "Accepted",
  "Rejected",
] as const;

type ApplicationCardProps = {
  id: number;
  company: string;
  position: string;
  status: string;
  createdAt?: Date | string;
};

export default function ApplicationCard({
  id,
  company,
  position,
  status,
  createdAt,
}: ApplicationCardProps) {
  const [currentStatus, setCurrentStatus] = useState(status);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleStatusChange = async (newStatus: string) => {
    if (newStatus === currentStatus || isUpdating) return;

    setError("");
    const previousStatus = currentStatus;
    setCurrentStatus(newStatus);
    setIsUpdating(true);

    try {
      const response = await fetch(`/api/applications/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!response.ok) {
        throw new Error("Couldn't update the status. Try again.");
      }
    } catch (err) {
      // Revert the UI if the database update failed
      setCurrentStatus(previousStatus);
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setIsUpdating(false);
    }
  };

  const handleDelete = async () => {
    setError("");
    setIsDeleting(true);

    try {
      const response = await fetch(`/api/applications/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Couldn't remove that one. Try again.");
      }

      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setIsDeleting(false);
    }
  };

  const appliedOn = createdAt
    ? new Date(createdAt).toLocaleDateString(undefined, {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : null;

  return (
    <div className="paper-card app-card">
      <div className="app-card-top">
        <p className="card-label">{position}</p>
        <button
          type="button"
          className="delete-btn"
          onClick={handleDelete}
          disabled={isDeleting}
          aria-label={`Remove ${company} — ${position}`}
          title="Remove application"
        >
          {isDeleting ? "…" : "✕"}
        </button>
      </div>

      <div className="preview-company">{company}</div>
      <div className="preview-position">{position}</div>

      <div
        className="status-picker card-status-picker"
        role="radiogroup"
        aria-label={`Status for ${company}`}
      >
        {STATUS_OPTIONS.map((option) => (
          <button
            key={option}
            type="button"
            role="radio"
            aria-checked={currentStatus === option}
            className={`status-option ${option.toLowerCase()}${
              currentStatus === option ? " active" : ""
            }`}
            onClick={() => handleStatusChange(option)}
            disabled={isUpdating}
          >
            {option}
          </button>
        ))}
      </div>

      {appliedOn && <div className="app-card-meta">Applied {appliedOn}</div>}
      {error && <p className="field-error">{error}</p>}
    </div>
  );
}