export function countWords(text: string, locale: string = "en-US"): number {
  if (!text) return 0;

  const segmenter = new Intl.Segmenter(locale, { granularity: "word" });
  const segments = segmenter.segment(text);

  let wordCount = 0;
  for (const segment of segments) {
    // The isWordLike property is true to indicate that the segment is a "word"
    // It excludes non-word characters such as spaces and punctuation marks
    if (segment.isWordLike) {
      wordCount++;
    }
  }

  return wordCount;
}
