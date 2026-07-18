import { useApp } from "../context/AppContext.jsx";
import { useLang } from "../hooks/useLang.js";
import { BLUE } from "../data/constants.js";
import { t } from "../data/strings.js";
import { getTodayKey } from "../data/constants.js";

export function DailyChallengeBanner() {
  const { state, dispatch } = useApp();
  const { S } = useLang();
  const { dailyChallenge } = state;
  const todayKey = getTodayKey();
  const isToday = dailyChallenge.dateKey === todayKey;
  const foundToday = isToday ? dailyChallenge.foundToday : 0;
  const goal = dailyChallenge.goal || 1;
  const done = foundToday >= goal;

  return (
    <div style={{ margin: "0 16px 12px", borderRadius: 20, overflow: "hidden", border: done ? `2px solid ${BLUE.gold}` : `2px solid ${BLUE.light}`, boxShadow: done ? `0 4px 20px ${BLUE.gold}30` : "0 2px 10px rgba(13,45,79,0.08)" }}>
      <div style={{ background: done ? `linear-gradient(135deg,${BLUE.gold},${BLUE.goldDark})` : `linear-gradient(135deg,${BLUE.pale},white)`, padding: "14px 16px", display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ fontSize: 28, flexShrink: 0 }}>{done ? "🏆" : "🎯"}</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: "'Luckiest Guy',cursive", fontSize: 13, color: done ? BLUE.deepest : BLUE.dark, letterSpacing: 1 }}>{S.todaysChallenge}</div>
          <div style={{ fontFamily: "'Patrick Hand',cursive", fontSize: 14, color: done ? BLUE.deepest : BLUE.mid, marginTop: 2 }}>
{done ? t(S.challengeDone, {n: foundToday, s: foundToday > 1 ? (state.lang==="es" ? "s" : "s") : ""}) : t(S.challengeGoal, {goal, s: goal > 1 ? "s" : "", left: Math.max(0, goal - foundToday)})}
          </div>
        </div>
        <div style={{ display: "flex", gap: 4 }}>
          {[...Array(goal)].map((_, i) => (
            <div key={i} style={{ width: 20, height: 20, borderRadius: "50%", background: i < foundToday ? (done ? BLUE.deepest : BLUE.bright) : "rgba(0,0,0,0.12)", border: `2px solid ${i < foundToday ? (done ? BLUE.deepest : BLUE.bright) : "rgba(0,0,0,0.15)"}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: "white" }}>
              {i < foundToday ? "✓" : ""}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

