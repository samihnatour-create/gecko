export function RevealWords({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\s+)/).map((word, i) =>
        /\s/.test(word) ? (
          word
        ) : (
          <span className="word-mask" key={i}>
            <span data-word>{word}</span>
          </span>
        ),
      )}
    </>
  );
}
