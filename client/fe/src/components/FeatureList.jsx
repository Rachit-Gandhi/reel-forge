const features = [
  "Natural-language media retrieval from personal archives",
  "Agent-guided scene planning and composition",
  "Audio-aware sequencing and polished final render",
];

export default function FeatureList() {
  return (
    <ul className="features">
      {features.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
