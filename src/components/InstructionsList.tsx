import { AnalyzedInstruction } from '@/types';

interface InstructionsListProps {
  instructions: AnalyzedInstruction[];
}

export default function InstructionsList({ instructions }: InstructionsListProps) {
  if (!instructions || instructions.length === 0) {
    return null;
  }

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Instructions
      </h2>
      <div className="space-y-4">
        {instructions[0]?.steps.map((step) => (
          <div key={step.number} className="flex">
            <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-semibold text-sm mr-4">
              {step.number}
            </div>
            <div className="flex-1">
              <p className="text-gray-700 leading-relaxed">
                {step.step}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 