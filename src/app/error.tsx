"use client";
export default function Error(error: Error) {
  console.log(error);
  return (
    <main>
      <h2>Upps</h2>
      <p>Ein Fehler ist aufgetreten.</p>
      <p>Das kann vorkommen.</p>
      <p>
        Morgen startet der Admin den Server neu, dann gibt es wieder Kartoffeln.
      </p>
    </main>
  );
}
