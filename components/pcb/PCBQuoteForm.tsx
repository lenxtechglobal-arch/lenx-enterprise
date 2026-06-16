"use client";

import { useState } from "react";

import Container from "@/components/shared/Container";

export default function PCBQuoteForm() {
  const [assembly, setAssembly] = useState("yes");
  const [sourcing, setSourcing] = useState("yes");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const formData = new FormData(e.currentTarget);

      const response = await fetch("/api/pcb-quote", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      setSuccess(
        "Thank you. Your PCB quote request has been submitted successfully. Our team will contact you shortly."
      );

      e.currentTarget.reset();

      setAssembly("yes");
      setSourcing("yes");
    } catch (err) {
      setError(
        "Failed to submit PCB quote request. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <section
      id="pcb-quote"
      className="bg-slate-50 py-24"
    >
      <Container>
        <div className="mx-auto max-w-5xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF6B00]">
            PCB Quote Request
          </span>

          <h2 className="mt-4 text-5xl font-bold text-[#071B4D]">
            Submit Your PCB Requirements
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Share your PCB specifications, BOM and project details.
            Our team will review your requirements and provide a
            customized quotation.
          </p>
        </div>

        <div
          className="
            mx-auto
            mt-16
            max-w-6xl
            rounded-[40px]
            border
            border-slate-200
            bg-white
            p-8
            shadow-xl
            lg:p-12
          "
        >
          <form
            onSubmit={handleSubmit}
            encType="multipart/form-data"
            className="space-y-12"
          >
            {/* Contact Info */}
            <div>
              <h3 className="mb-6 text-2xl font-bold text-[#071B4D]">
                Contact Information
              </h3>

              <div className="grid gap-6 md:grid-cols-2">
                <input
                  name="fullName"
                  type="text"
                  required
                  placeholder="Full Name *"
                  className="h-14 rounded-xl border border-slate-300 px-5 outline-none focus:border-[#0066FF]"
                />

                <input
                  name="company"
                  type="text"
                  required
                  placeholder="Company Name *"
                  className="h-14 rounded-xl border border-slate-300 px-5 outline-none focus:border-[#0066FF]"
                />

                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Email Address *"
                  className="h-14 rounded-xl border border-slate-300 px-5 outline-none focus:border-[#0066FF]"
                />

                <input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  className="h-14 rounded-xl border border-slate-300 px-5 outline-none focus:border-[#0066FF]"
                />
              </div>
            </div>

            {/* PCB Specs */}
            <div>
              <h3 className="mb-6 text-2xl font-bold text-[#071B4D]">
                PCB Specifications
              </h3>

              <div className="grid gap-6 md:grid-cols-2">
                <select
                  name="pcbType"
                  required
                  className="h-14 rounded-xl border border-slate-300 px-5 outline-none focus:border-[#0066FF]"
                >
                  <option value="">PCB Type</option>
                  <option>Single Layer PCB</option>
                  <option>Double Layer PCB</option>
                  <option>Multi Layer PCB</option>
                </select>

                <input
                  name="quantity"
                  type="number"
                  required
                  placeholder="Quantity"
                  className="h-14 rounded-xl border border-slate-300 px-5 outline-none focus:border-[#0066FF]"
                />

                <input
                  name="boardSize"
                  type="text"
                  placeholder="Board Size (mm)"
                  className="h-14 rounded-xl border border-slate-300 px-5 outline-none focus:border-[#0066FF]"
                />

                <input
                  name="layers"
                  type="number"
                  placeholder="Number of Layers"
                  className="h-14 rounded-xl border border-slate-300 px-5 outline-none focus:border-[#0066FF]"
                />
              </div>
            </div>

            {/* Requirements */}
            <div>
              <h3 className="mb-6 text-2xl font-bold text-[#071B4D]">
                Additional Requirements
              </h3>

              <div className="grid gap-8 lg:grid-cols-2">
                <div>
                  <p className="mb-4 font-medium text-slate-700">
                    PCB Assembly Required?
                  </p>

                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setAssembly("yes")}
                      className={`rounded-xl px-6 py-3 font-medium transition ${assembly === "yes"
                        ? "bg-[#0066FF] text-white"
                        : "border border-slate-300"
                        }`}
                    >
                      Yes
                    </button>

                    <button
                      type="button"
                      onClick={() => setAssembly("no")}
                      className={`rounded-xl px-6 py-3 font-medium transition ${assembly === "no"
                        ? "bg-[#0066FF] text-white"
                        : "border border-slate-300"
                        }`}
                    >
                      No
                    </button>
                  </div>
                </div>

                <div>
                  <p className="mb-4 font-medium text-slate-700">
                    Component Sourcing Required?
                  </p>

                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setSourcing("yes")}
                      className={`rounded-xl px-6 py-3 font-medium transition ${sourcing === "yes"
                        ? "bg-[#0066FF] text-white"
                        : "border border-slate-300"
                        }`}
                    >
                      Yes
                    </button>

                    <button
                      type="button"
                      onClick={() => setSourcing("no")}
                      className={`rounded-xl px-6 py-3 font-medium transition ${sourcing === "no"
                        ? "bg-[#0066FF] text-white"
                        : "border border-slate-300"
                        }`}
                    >
                      No
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Upload Files */}
            <div>
              <h3 className="mb-6 text-2xl font-bold text-[#071B4D]">
                Upload Files
              </h3>

              <div className="grid gap-6 md:grid-cols-2">
                <input
                  name="gerberFile"
                  type="file"
                  accept=".zip,.rar,.7z,.gbr,.gerber"
                  className="rounded-xl border border-slate-300 p-4"
                />

                <input
                  name="bomFile"
                  type="file"
                  accept=".pdf,.xlsx,.xls,.csv,.zip"
                  className="rounded-xl border border-slate-300 p-4"
                />
              </div>

              <div className="mt-3 text-sm text-slate-500">
                Upload Gerber Files, BOM Files, Drawings or Other Documents.
              </div>
            </div>

            {/* Notes */}
            <div>
              <h3 className="mb-6 text-2xl font-bold text-[#071B4D]">
                Project Requirements
              </h3>

              <textarea
                name="requirements"
                rows={6}
                placeholder="Describe your PCB project requirements..."
                className="w-full rounded-2xl border border-slate-300 p-5 outline-none focus:border-[#0066FF]"
              />
            </div>
            {success && (
              <div
                className="
      rounded-xl
      border
      border-green-200
      bg-green-50
      p-4
      text-green-700
    "
              >
                {success}
              </div>
            )}

            {error && (
              <div
                className="
      rounded-xl
      border
      border-red-200
      bg-red-50
      p-4
      text-red-700
    "
              >
                {error}
              </div>
            )}

            {/* Submit */}
            <div className="text-center">
              <button
                type="submit"
                disabled={loading}
                className="
    rounded-xl
    bg-[#0066FF]
    px-10
    py-4
    text-lg
    font-semibold
    text-white
    transition
    hover:bg-[#0052cc]
    disabled:cursor-not-allowed
    disabled:opacity-70
  "
              >
                {loading
                  ? "Submitting..."
                  : "Request PCB Quote"}
              </button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}