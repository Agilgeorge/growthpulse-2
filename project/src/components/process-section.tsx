import React from "react";
import { Timeline } from "./ui/timeline";
import { Search, Lightbulb, Rocket, TrendingUp, BarChart } from "lucide-react";

export const ProcessSection = () => {
  const timelineData = [
    {
      title: "Discover",
      content: (
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-lg">
              <Search className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white">Discovery & Analysis</h3>
          </div>
          <p className="text-neutral-300 text-base mb-4">
            We audit your business, data maturity, and customer journey to understand your current state and identify growth opportunities.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white/5 p-4 rounded-lg border border-white/10">
              <h4 className="text-purple-400 font-semibold mb-2">Business Audit</h4>
              <p className="text-neutral-400 text-sm">Comprehensive analysis of current operations, processes, and performance metrics.</p>
            </div>
            <div className="bg-white/5 p-4 rounded-lg border border-white/10">
              <h4 className="text-cyan-400 font-semibold mb-2">Customer Journey</h4>
              <p className="text-neutral-400 text-sm">Map touchpoints and identify optimization opportunities throughout the funnel.</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Design",
      content: (
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-lg">
              <Lightbulb className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white">Strategic Design</h3>
          </div>
          <p className="text-neutral-300 text-base mb-4">
            Build comprehensive growth architecture across technology and marketing channels tailored to your business objectives.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white/5 p-4 rounded-lg border border-white/10">
              <h4 className="text-purple-400 font-semibold mb-2">Tech Architecture</h4>
              <p className="text-neutral-400 text-sm">Design scalable systems and data infrastructure for sustainable growth.</p>
            </div>
            <div className="bg-white/5 p-4 rounded-lg border border-white/10">
              <h4 className="text-cyan-400 font-semibold mb-2">Marketing Strategy</h4>
              <p className="text-neutral-400 text-sm">Create integrated campaigns across all channels for maximum impact.</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Deliver",
      content: (
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-lg">
              <Rocket className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white">Implementation</h3>
          </div>
          <p className="text-neutral-300 text-base mb-4">
            Deploy campaigns, solutions, and systems with precision execution and continuous monitoring for optimal performance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white/5 p-4 rounded-lg border border-white/10">
              <h4 className="text-purple-400 font-semibold mb-2">System Deployment</h4>
              <p className="text-neutral-400 text-sm">Launch applications, data pipelines, and infrastructure with zero downtime.</p>
            </div>
            <div className="bg-white/5 p-4 rounded-lg border border-white/10">
              <h4 className="text-cyan-400 font-semibold mb-2">Campaign Launch</h4>
              <p className="text-neutral-400 text-sm">Execute marketing campaigns across all channels with real-time tracking.</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Optimize",
      content: (
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-lg">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white">Optimization</h3>
          </div>
          <p className="text-neutral-300 text-base mb-4">
            Improve performance with data-driven insights, A/B testing, and automation to maximize ROI and efficiency.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white/5 p-4 rounded-lg border border-white/10">
              <h4 className="text-purple-400 font-semibold mb-2">Data Analytics</h4>
              <p className="text-neutral-400 text-sm">Monitor KPIs and performance metrics for continuous improvement.</p>
            </div>
            <div className="bg-white/5 p-4 rounded-lg border border-white/10">
              <h4 className="text-cyan-400 font-semibold mb-2">A/B Testing</h4>
              <p className="text-neutral-400 text-sm">Test variations and optimize based on real user behavior and data.</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Scale",
      content: (
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-lg">
              <BarChart className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white">Scaling Success</h3>
          </div>
          <p className="text-neutral-300 text-base mb-4">
            Expand into new markets, platforms, and revenue channels while maintaining quality and performance standards.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white/5 p-4 rounded-lg border border-white/10">
              <h4 className="text-purple-400 font-semibold mb-2">Market Expansion</h4>
              <p className="text-neutral-400 text-sm">Enter new markets with localized strategies and proven methodologies.</p>
            </div>
            <div className="bg-white/5 p-4 rounded-lg border border-white/10">
              <h4 className="text-cyan-400 font-semibold mb-2">Revenue Growth</h4>
              <p className="text-neutral-400 text-sm">Unlock new revenue streams and optimize existing channels for growth.</p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-black">
      <Timeline data={timelineData} />
    </div>
  );
};