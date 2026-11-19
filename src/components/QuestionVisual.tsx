import React from 'react';
import { Question } from '../types';
import { getQuestionVisualDataUri } from '../utils/questionVisuals';

interface QuestionVisualProps {
  question: Pick<Question, 'visualId' | 'imageUrl' | 'imageCaption'>;
  compact?: boolean;
}

export const QuestionVisual: React.FC<QuestionVisualProps> = ({
  question,
  compact = false,
}) => {
  const asset = getQuestionVisualDataUri(question.visualId);
  const src = question.imageUrl || asset?.src;

  if (!src) return null;

  const altText = question.imageCaption || asset?.alt || 'Gambar pendukung soal';

  return (
    <figure
      className={`rounded-2xl border border-slate-200 bg-slate-50/70 overflow-hidden ${
        compact ? 'p-2.5 max-w-md' : 'p-3 sm:p-4 mb-5'
      }`}
    >
      <div className="flex justify-center">
        <img
          src={src}
          alt={altText}
          className={`w-full h-auto object-contain rounded-xl bg-white ${
            compact ? 'max-h-40' : 'max-h-64 sm:max-h-72 max-w-xl'
          }`}
          loading="lazy"
        />
      </div>
      {question.imageCaption && (
        <figcaption className="mt-2 text-center text-[11px] font-medium text-slate-500">
          {question.imageCaption}
        </figcaption>
      )}
    </figure>
  );
};
