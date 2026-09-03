import { useState, useEffect } from "react";
import { initialQuestions } from "../data/content";

export default function QuestionsSection() {
  const [inputVal, setInputVal] = useState("");
  const [questions, setQuestions] = useState(initialQuestions);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState(null);

  // Load persistent user questions from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("indra_submitted_questions");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          // Merge user questions ahead of initial questions
          setQuestions([...parsed, ...initialQuestions]);
        }
      }
    } catch (e) {
      console.warn("Could not load local questions:", e);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmed = inputVal.trim();
    if (!trimmed || isSubmitting) return;

    setIsSubmitting(true);
    setFeedback(null);

    const now = new Date();
    const timeFormatted = now.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });

    const newQuestionEntry = {
      id: `q-user-${Date.now()}`,
      q: trimmed,
      a: "delivered to indra's inbox (singhpreetinder229@gmail.com). i usually respond day of.",
      time: timeFormatted,
      status: "pending",
      isUserSubmitted: true,
    };

    // 1. Dispatch directly to Preetinder's email via FormSubmit API
    try {
      await fetch("https://formsubmit.co/ajax/singhpreetinder229@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `New Question from Portfolio: "${trimmed.slice(0, 50)}..."`,
          Question: trimmed,
          SubmittedAt: now.toISOString(),
          TimeFormatted: timeFormatted,
          _template: "box",
        }),
      });
    } catch (err) {
      console.warn("Email webhook dispatch notice:", err);
    }

    // 2. Add question to visible list immediately
    const updatedUserList = [
      newQuestionEntry,
      ...questions.filter((item) => item.isUserSubmitted),
    ];
    setQuestions([newQuestionEntry, ...questions]);

    // 3. Persist in localStorage so it remains visible upon reload
    try {
      localStorage.setItem(
        "indra_submitted_questions",
        JSON.stringify(updatedUserList)
      );
    } catch (err) {
      console.warn("Could not save to localStorage:", err);
    }

    setInputVal("");
    setIsSubmitting(false);
    setFeedback("question delivered to indra's inbox and added below.");
    setTimeout(() => setFeedback(null), 5000);
  };

  return (
    <div
      id="questions"
      className="relative z-10 flex justify-center px-4 md:px-16 lg:px-24 pb-16 font-serif"
    >
      <div className="max-w-4xl w-full p-4 md:p-12">
        <div className="text-white text-sm md:text-base leading-relaxed w-full p-4 border-hairline bg-black/50">
          <div className="flex items-start justify-between gap-4 mb-2">
            <span className="text-white lowercase text-base glow-text">
              questions & public q&a
            </span>
            <a
              href="mailto:singhpreetinder229@gmail.com"
              className="font-mono text-xs underline hover:opacity-80 text-white/70"
            >
              email directly →
            </a>
          </div>

          <p className="text-white/70 text-xs md:text-sm lowercase mb-3">
            questions asked here are delivered directly to indra's inbox and displayed live in this log. i usually respond day of.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 mb-3">
            <input
              type="text"
              placeholder="ask me whatever your heart desires. can be anon or u can say ur name"
              maxLength={500}
              value={inputVal}
              disabled={isSubmitting}
              onChange={(e) => setInputVal(e.target.value)}
              className="flex-1 bg-transparent text-white p-2.5 text-sm placeholder-white/40 focus:outline-none border-hairline-dim focus:border-white font-serif"
            />
            <button
              type="submit"
              disabled={!inputVal.trim() || isSubmitting}
              className="px-6 py-2.5 border-hairline text-sm lowercase hover:bg-white hover:text-black transition-all disabled:opacity-40 cursor-pointer flex items-center justify-center gap-2 shrink-0 font-mono"
            >
              {isSubmitting ? (
                <>
                  <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                  sending...
                </>
              ) : (
                "ask"
              )}
            </button>
          </form>

          {feedback && (
            <p className="text-xs font-mono text-[#c4a7e7] mb-3 flex items-center gap-1.5">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#c4a7e7]" />
              {feedback}
            </p>
          )}

          {/* Live Questions List */}
          <div
            className="space-y-3 thoughts-scroll overflow-y-scroll pr-1 mt-4"
            style={{ maxHeight: "360px" }}
          >
            {questions.map((item, i) => (
              <div
                key={item.id || i}
                className={`p-3.5 border-hairline-dim transition-all ${
                  item.isUserSubmitted
                    ? "bg-[#c4a7e7]/5 border-[#c4a7e7]/40"
                    : "bg-black/40"
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="font-mono text-[10px] text-white/40 lowercase">
                    {item.time}
                  </span>
                  {item.isUserSubmitted ? (
                    <span className="font-mono text-[9px] px-1.5 py-0.5 border border-[#c4a7e7]/50 text-[#c4a7e7] tracking-wider lowercase">
                      [ sent to inbox · pending reply ]
                    </span>
                  ) : (
                    <span className="font-mono text-[9px] px-1.5 py-0.5 border border-white/20 text-white/60 tracking-wider lowercase">
                      [ answered ]
                    </span>
                  )}
                </div>

                <p className="text-white/95 text-sm font-medium lowercase">
                  q: {item.q}
                </p>
                <p className="mt-1.5 text-white/70 text-xs md:text-sm lowercase leading-relaxed">
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
