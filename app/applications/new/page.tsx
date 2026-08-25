"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const STATUS_OPTIONS = [
  "Applied",
  "Interview",
  "Offer",
  "Accepted",
  "Rejected",
] as const;

type Status = (typeof STATUS_OPTIONS)[number];

type FieldErrors = {
  company?: string;
  position?: string;
};

export default function NewApplication() {
  const router = useRouter();

  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [status, setStatus] = useState<Status>("Applied");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const next: FieldErrors = {};
    if (!company.trim()) next.company = "Enter a company name.";
    if (!position.trim()) next.position = "Enter a position.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ company, position, status }),
      });

      if (!response.ok) {
        throw new Error("Couldn't save that application. Try again.");
      }

      router.push("/");
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : "Something went wrong. Try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page">
      <nav>
        <Link href="/" className="wordmark">
          <span className="dot" />
          Ledger
        </Link>
        <Link href="/" className="nav-cta">
          ← Back to dashboard
        </Link>
      </nav>

      <div className="wrap form-page">
        <div className="form-page-head">
          <Link href="/" className="back-link">
            ← Dashboard
          </Link>
          <h1 className="form-page-title">Add an application</h1>
          <p className="form-page-sub">
            Log the company, the role, and where things stand. You can
            update the status any time as it moves along.
          </p>
        </div>

        <div className="form-preview-grid">
          <form className="paper-card" onSubmit={handleSubmit} noValidate>
            <p className="card-label">New application</p>

            <div className="fake-field">
              <label className="field-label" htmlFor="company">
                Company
              </label>
              <input
                id="company"
                type="text"
                className={`field-input${errors.company ? " has-error" : ""}`}
                placeholder="Northwind Robotics"
                value={company}
                onChange={(e) => {
                  setCompany(e.target.value);
                  if (errors.company) {
                    setErrors((prev) => ({ ...prev, company: undefined }));
                  }
                }}
                aria-invalid={Boolean(errors.company)}
                aria-describedby={errors.company ? "company-error" : undefined}
              />
              {errors.company && (
                <p className="field-error" id="company-error">
                  {errors.company}
                </p>
              )}
            </div>

            <div className="fake-field">
              <label className="field-label" htmlFor="position">
                Position
              </label>
              <input
                id="position"
                type="text"
                className={`field-input${errors.position ? " has-error" : ""}`}
                placeholder="Frontend Engineer"
                value={position}
                onChange={(e) => {
                  setPosition(e.target.value);
                  if (errors.position) {
                    setErrors((prev) => ({ ...prev, position: undefined }));
                  }
                }}
                aria-invalid={Boolean(errors.position)}
                aria-describedby={errors.position ? "position-error" : undefined}
              />
              {errors.position && (
                <p className="field-error" id="position-error">
                  {errors.position}
                </p>
              )}
            </div>

            <div className="fake-field">
              <span className="field-label">Status</span>
              <div className="status-picker" role="radiogroup" aria-label="Status">
                {STATUS_OPTIONS.map((option) => (
                  <button
                    key={option}
                    type="button"
                    role="radio"
                    aria-checked={status === option}
                    className={`status-option ${option.toLowerCase()}${
                      status === option ? " active" : ""
                    }`}
                    onClick={() => setStatus(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div className="submit-row">
              <button type="submit" className="btn-primary" disabled={isSubmitting}>
                {isSubmitting ? "Adding…" : "Add application →"}
              </button>
              {submitError && <span className="form-status">{submitError}</span>}
            </div>
          </form>

          <div className="paper-card preview-card">
            <p className="card-label">Your card</p>
            {company || position ? (
              <>
                <div className="preview-company">{company || "Company name"}</div>
                <div className="preview-position">{position || "Position"}</div>
                <div className={`preview-badge ${status.toLowerCase()}`}>
                  {status}
                </div>
                <div className="sync-note">
                  <span className="pulse-dot" />
                  this is what shows up on your dashboard
                </div>
              </>
            ) : (
              <p className="preview-empty">
                Start typing and your card takes shape here.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}