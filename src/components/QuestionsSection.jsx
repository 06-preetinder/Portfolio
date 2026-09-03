import { useState } from "react";

export default function QuestionsSection() {
  const [inputVal, setInputVal] = useState("");
  const [questions, setQuestions] = useState([
    {
      q: "what model architecture are you using for hypersonic prediction?",
      a: "spatio-temporal neural ode with adaptive numerical solver. details under NDA, but stability bounds matter more than loss.",
    },
    {
      q: "how can i contribute to The Epoch?",
      a: "dm me on twitter or email with a paper preprint and the counter-argument for why it might fail in production.",
    },
  ]);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    setQuestions([
      {
        q: inputVal,
        a: "received. i usually respond day of.",
      },
      ...questions,
    ]);
    setInputVal("");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div id="questions" className="relative z-10 flex justify-center px-4 md:px-16 lg:px-24 pb-16 font-serif">
      <div className="max-w-4xl w-full p-4 md:p-12">
        <div className="text-white text-sm md:text-base leading-relaxed w-full p-4 border-hairline">
          <div className="flex items-start justify-between gap-4 mb-2">
            <span className="text-white lowercase text-base">questions</span>
            <a
              href="mailto:singhpreetinder229@gmail.com"
              className="font-mono text-xs underline hover:opacity-80 text-white/70"
            >
              email directly
            </a>
          </div>

          <p className="text-white/70 text-xs md:text-sm lowercase mb-3">
            i usually respond day of.
          </p>

          <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
            <input
              type="text"
              placeholder="ask me whatever your heart desires. can be anon or u can say ur name"
              maxLength={500}
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              className="flex-1 bg-transparent text-white p-2 text-sm placeholder-white/40 focus:outline-none border-hairline-dim focus:border-white font-serif"
            />
            <button
              type="submit"
              disabled={!inputVal.trim()}
              className="px-4 py-2 border-hairline text-sm lowercase hover:bg-white hover:text-black transition-all disabled:opacity-40 cursor-pointer"
            >
              ask
            </button>
          </form>

          {submitted && (
            <p className="text-xs font-mono text-[#c4a7e7] mb-3">
              question noted!
            </p>
          )}

          <div
            className="space-y-3 thoughts-scroll overflow-y-scroll pr-1 mt-4"
            style={{ maxHeight: "320px" }}
          >
            {questions.map((item, i) => (
              <div key={i} className="p-3 border-hairline-dim bg-black/40">
                <p className="text-white/90 text-sm font-medium lowercase">
                  q: {item.q}
                </p>
                <p className="mt-1 text-white/70 text-xs md:text-sm lowercase">
                  a: {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
