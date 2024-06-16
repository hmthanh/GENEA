import HeatmapChart from "@/components/hightchart/HeatmapChart"
import HighChart from "@/components/hightchart/HighChart"
import PairwiseComparisonChart from "@/components/hightchart/PairwiseComparisonChart"
import React from "react"

export default function Page() {
  const evaluationData = [
    { models: ["Model A", "Model B"], scores: [1, -1, 0, 1, -1] },
    { models: ["Model C", "Model D"], scores: [0, 0, 1, -1, 0] },
    { models: ["Model E", "Model F"], scores: [-1, 1, 0, -1, 1] },
    { models: ["Model G", "Model H"], scores: [1, 0, -1, 1, 0] },
    { models: ["Model A", "Model C"], scores: [-1, 1, 0, -1, 0] },
    { models: ["Model B", "Model D"], scores: [1, 0, -1, 1, -1] },
    { models: ["Model E", "Model G"], scores: [0, 1, -1, 0, 1] },
    { models: ["Model F", "Model H"], scores: [1, -1, 0, 1, -1] },
  ]

  const data = [
    [0, 1, 0.8],
    [0, 2, -0.5],
    [0, 3, 0.2],
    [0, 4, 0.6],
    [0, 5, -0.3],
    [0, 6, 0.1],
    [0, 7, 0.9],
    [1, 2, -0.7],
    [1, 3, -0.2],
    [1, 4, 0.4],
    [1, 5, -0.6],
    [1, 6, -0.1],
    [1, 7, 0.7],
    [2, 3, 0.6],
    [2, 4, 0.9],
    [2, 5, 0.2],
    [2, 6, 0.5],
    [2, 7, 0.8],
    [3, 4, 0.3],
    [3, 5, -0.4],
    [3, 6, -0.1],
    [3, 7, 0.5],
    [4, 5, -0.8],
    [4, 6, -0.3],
    [4, 7, 0.2],
    [5, 6, 0.4],
    [5, 7, 0.9],
    [6, 7, 0.6],
  ]

  const heatmapData = [
    { modelPair: "Model A vs Model B", input: "Input 1", score: 1 },
    { modelPair: "Model A vs Model B", input: "Input 2", score: 0 },
    { modelPair: "Model A vs Model B", input: "Input 3", score: -1 },
    { modelPair: "Model C vs Model D", input: "Input 1", score: -1 },
    { modelPair: "Model C vs Model D", input: "Input 2", score: 0 },
    { modelPair: "Model C vs Model D", input: "Input 3", score: 1 },
    { modelPair: "Model E vs Model F", input: "Input 1", score: 0 },
    { modelPair: "Model E vs Model F", input: "Input 2", score: 1 },
    { modelPair: "Model E vs Model F", input: "Input 3", score: -1 },
    { modelPair: "Model G vs Model H", input: "Input 1", score: 1 },
    { modelPair: "Model G vs Model H", input: "Input 2", score: -1 },
    { modelPair: "Model G vs Model H", input: "Input 3", score: 0 },
    // Add more data points here
  ]

  return (
    <div>
      <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
        Evaluation Result
      </h1>
      <h3 class="font-semibold tracking-tight text-slate-900 dark:text-slate-100 mt-8 text-2xl">
        Sample 1
      </h3>
      <p className="mt-6 leading-7 first:mt-0">
        Sample data of Evaluation Result.
      </p>
      <HighChart data={evaluationData} />
      <h3 class="font-semibold tracking-tight text-slate-900 dark:text-slate-100 mt-8 text-2xl">
        Sample 2
      </h3>
      <p className="mt-6 leading-7 first:mt-0">
        Sample data of Evaluation Result.
      </p>
      <PairwiseComparisonChart data={data} />
      <h3 class="font-semibold tracking-tight text-slate-900 dark:text-slate-100 mt-8 text-2xl">
        Sample 3
      </h3>
      <p className="mt-6 leading-7 first:mt-0">
        Sample data of Evaluation Result.
      </p>
      <HeatmapChart data={heatmapData} />
    </div>
  )
}
