"use client";

import { SliceSimulator } from "@slicemachine/adapter-next/simulator";
import { SliceZone } from "@prismicio/react";

import { components as commonComponents } from "@/slices/common";
import { components as navComponents } from "@/slices/navigation";
import { components as resourcesComponents } from "@/slices/resources";
import { components as slidesComponents } from "@/slices/slides";

export default function SliceSimulatorPage() {
  return (
    <SliceSimulator
      sliceZone={(props) => (
        <SliceZone
          {...props}
          components={{
            ...commonComponents,
            ...navComponents,
            ...resourcesComponents,
            ...slidesComponents,
          }}
        />
      )}
    />
  );
}
