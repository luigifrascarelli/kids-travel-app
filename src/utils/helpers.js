export function shuffle(arr) { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }

export function getDecoys(correctItem, pack) {
  if (correctItem.category) {
    const same = pack.bonusWords.filter(i => i.category === correctItem.category && i.id !== correctItem.id);
    const other = pack.bonusWords.filter(i => i.id !== correctItem.id);
    return shuffle(same.length >= 2 ? same : other).slice(0, 2);
  }
  const zone = pack.zones.find(z => z.items.some(i => i.id === correctItem.id));
  const sameZone = zone.items.filter(i => i.id !== correctItem.id);
  const other = pack.zones.flatMap(z => z.id !== zone.id ? z.items : []);
  return shuffle([...sameZone, ...other]).slice(0, 2);
}
