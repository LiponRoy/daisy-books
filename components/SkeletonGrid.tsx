"use client";

export default function SkeletonGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="animate-pulse rounded-2xl border border-gray-200 bg-white p-4 shadow"
        >
          {/* Image placeholder */}
          <div className="mb-4 h-40 w-full rounded-xl bg-gray-200" />

          {/* Title lines */}
          <div className="space-y-3">
            <div className="h-4 w-3/4 rounded bg-gray-200" />
            <div className="h-4 w-1/2 rounded bg-gray-200" />
          </div>

          {/* Footer buttons */}
          <div className="mt-5 flex items-center justify-between">
            <div className="h-8 w-24 rounded-lg bg-gray-200" />
            <div className="h-8 w-16 rounded-lg bg-gray-200" />
          </div>
        </div>
      ))}
    </div>
  );
}
