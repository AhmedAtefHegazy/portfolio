import { useEffect, useState } from "react";

// Add type definitions
interface Metrics {
  fcp: number;
  lcp: number;
  cls: number;
}

interface LayoutShiftEntry extends PerformanceEntry {
  hadRecentInput: boolean;
  value: number;
}

const PerformanceMetrics = () => {
  // Remove metrics state since we only need the setter
  const [, setMetrics] = useState<Metrics>({
    fcp: 0,
    lcp: 0,
    cls: 0,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      // First Contentful Paint
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        if (entries.length > 0) {
          setMetrics((prev: Metrics) => ({
            ...prev,
            fcp: entries[0].startTime,
          }));
        }
      }).observe({ entryTypes: ["paint"] });

      // Largest Contentful Paint
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        if (entries.length > 0) {
          setMetrics((prev: Metrics) => ({
            ...prev,
            lcp: entries[0].startTime,
          }));
        }
      }).observe({ entryTypes: ["largest-contentful-paint"] });

      // Cumulative Layout Shift
      new PerformanceObserver((entryList) => {
        let cls = 0;
        for (const entry of entryList.getEntries()) {
          const layoutShiftEntry = entry as LayoutShiftEntry;
          if (!layoutShiftEntry.hadRecentInput) {
            cls += layoutShiftEntry.value;
          }
        }
        setMetrics((prev: Metrics) => ({ ...prev, cls }));
      }).observe({ entryTypes: ["layout-shift"] });
    }
  }, []);

  return null; // This component doesn't render anything, just collects metrics
};

export default PerformanceMetrics;
