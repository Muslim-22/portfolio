
"use client";

import dynamic from "next/dynamic";

const Sandpack = dynamic(
  () =>
    import("@codesandbox/sandpack-react").then(
      (mod) => mod.Sandpack
    ),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[220px] items-center justify-center bg-[#151515] text-sm text-white/60">
        Editor yuklanmoqda...
      </div>
    ),
  }
);

export default function CodePlayground() {
  return (
    <section
      id="playground"
      className="mx-auto w-full max-w-2xl px-3 py-3 sm:px-4 sm:py-4 md:py-0"
    >
      <div className="w-full overflow-hidden rounded-lg border border-border">
        <Sandpack
          template="react-ts"
          theme="dark"
          options={{
            showNavigator: false,
            showTabs: true,
            showLineNumbers: true,
            showConsole: false,
            editorHeight: 280,
            editorWidthPercentage: 55,
          }}
          customSetup={{
            dependencies: {},
          }}
        />
      </div>
    </section>
  );
}
