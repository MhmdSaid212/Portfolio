import React from 'react'
import {
  FaCommentDots, FaRobot, FaPlug, FaProjectDiagram, FaMicrophoneAlt, FaEye
} from 'react-icons/fa'

const capabilities = [
  {
    icon: FaCommentDots,
    title: 'Prompt Engineering',
    description:
      'Designing system prompts, few-shot examples, and structured-output (JSON) prompts that make LLM responses reliable, testable, and easy to plug into an app.'
  },
  {
    icon: FaRobot,
    title: 'AI Agents',
    description:
      'Building agent-style workflows where an LLM plans steps, calls tools and APIs, and returns results, with guardrails and clear fallbacks when things go wrong.'
  },
  {
    icon: FaPlug,
    title: 'LLM & API Integration',
    description:
      'Wiring LLM and Cognitive APIs into full-stack apps through secure backend routes: auth, validation, streaming, error handling, and rate-limit awareness.'
  },
  {
    icon: FaProjectDiagram,
    title: 'RAG Pipelines',
    description:
      'Grounding answers in your own data with retrieval-augmented generation, so responses stay relevant and based on real documents rather than guesses.'
  },
  {
    icon: FaEye,
    title: 'Screen & Vision AI',
    description:
      'Multimodal features such as my Smart Screen Assistant, which interprets what is on screen in real time and answers contextual questions about it.'
  },
  {
    icon: FaMicrophoneAlt,
    title: 'Speech AI',
    description:
      'Phoneme-level pronunciation analysis with Whisper and wav2vec 2.0, powering SAWT, an AI-assisted speech therapy companion for children.'
  }
]

const examplePrompt = `# system
You are a friendly speech-therapy practice assistant for children.

## Rules
- Give ONE short, encouraging correction at a time
- Reply in the child's language (Arabic or English)
- Never diagnose. Suggest the therapist for anything clinical

## Output (JSON only)
{ "word": string, "score": 0-100, "tip": string }`

const AIEngineering = () => {
  return (
    <section id="ai" className="py-24 px-6 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-indigo-400 mb-3 justify-center">
            <div className="w-6 h-0.5 bg-indigo-400 rounded-full"></div>
            AI Engineering
            <div className="w-6 h-0.5 bg-indigo-400 rounded-full"></div>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight">
            Building with AI, not just around it
          </h2>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
            Prompts, agents, and APIs: how I turn LLMs into dependable features inside real products
          </p>
        </div>

        {/* Capabilities */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, idx) => (
            <div
              key={cap.title}
              data-aos="dramatic-pop"
              data-aos-duration="800"
              data-aos-delay={(idx % 3) * 100}
              className="rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-200 hover:border-indigo-400/60 hover:bg-white/10"
            >
              <div className="w-11 h-11 rounded-lg bg-indigo-500/20 flex items-center justify-center mb-4">
                <cap.icon className="text-xl text-indigo-300" />
              </div>
              <h3 className="font-semibold mb-2">{cap.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{cap.description}</p>
            </div>
          ))}
        </div>

        {/* Prompt example + workflow */}
        <div className="mt-14 grid lg:grid-cols-2 gap-8 items-start">
          <div data-aos="fade-right">
            <div className="rounded-xl border border-white/10 bg-black/40 overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
                <span className="w-3 h-3 rounded-full bg-red-400/80"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-400/80"></span>
                <span className="w-3 h-3 rounded-full bg-green-400/80"></span>
                <span className="ml-3 text-xs text-gray-400">sawt-feedback.prompt</span>
              </div>
              <pre className="p-5 text-sm text-indigo-100 overflow-x-auto leading-relaxed whitespace-pre-wrap">
                <code>{examplePrompt}</code>
              </pre>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              A simplified example of the structured, rule-based prompts I write for AI features.
            </p>
          </div>

          <div data-aos="fade-left">
            <h3 className="text-xl font-bold mb-5">How I ship an AI feature</h3>
            <ol className="space-y-4">
              {[
                ['Define the task', 'Clear role, constraints, and a strict output schema for the model.'],
                ['Wrap it in an API', 'Secure backend route with auth, input validation, and error handling.'],
                ['Add tools & context', 'Connect APIs, databases, or retrieval (RAG) so the model has real data.'],
                ['Test & iterate', 'Evaluate outputs, handle edge cases, and refine prompts like code.'],
                ['Deploy & monitor', 'Ship to Vercel or Render and keep an eye on cost, latency and quality.']
              ].map(([title, text], i) => (
                <li key={title} className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-500 text-white text-sm font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <div>
                    <div className="font-semibold">{title}</div>
                    <div className="text-sm text-gray-400">{text}</div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AIEngineering
