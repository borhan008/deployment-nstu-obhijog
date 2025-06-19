import React from "react";

export default function UserHome() {
  return (
    <div className="mx-auto w-full">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Welcome to Problem Fixer!
      </h1>

      <p className="text-gray-600 mb-6">
        Our Complaint Management System is designed to ensure that your issues
        are heard, tracked, and resolved efficiently. Whether it's a technical
        fault, maintenance need, or service issue — we are here to help you.
      </p>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            How it Works:
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>
              Submit a complaint by selecting the relevant category and
              providing details.
            </li>
            <li>
              Your complaint will be reviewed and assigned to the appropriate
              department or employee.
            </li>
            <li>Our team will work on resolving your complaint promptly.</li>
            <li>
              You will receive updates and notifications about the progress and
              resolution.
            </li>
            <li>
              After the issue is solved, you can mark the complaint as 'Done'.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            What Problems We Solve:
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Computer and IT related issues</li>
            <li>Electrical and AC maintenance</li>
            <li>Cleaning and Hygiene problems</li>
            <li>Classroom, Lab, or Office facility faults</li>
            <li>Other service and administrative complaints</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            Need Help?
          </h2>
          <p className="text-gray-600">
            If you face any issues while submitting a complaint or tracking your
            request, please contact the support team through the provided
            channels. We are committed to making your experience smooth and
            hassle-free.
          </p>
        </section>
      </div>
    </div>
  );
}
