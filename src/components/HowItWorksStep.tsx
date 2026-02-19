import Image from "next/image";

interface HowItWorksStepProps {
  stepNumber: number;
  emoji: string;
  title: string;
  description: string;
  illustration: string;
}

export default function HowItWorksStep({
  stepNumber,
  emoji,
  title,
  description,
  illustration,
}: HowItWorksStepProps) {
  const isEven = stepNumber % 2 === 0;

  return (
    <div
      className={`flex w-full flex-col items-center md:w-[48%] ${
        isEven ? "md:ml-auto md:mt-16" : "md:mr-auto"
      }`}
    >
      <div className="w-full rounded-[20px] bg-warm-white p-6 shadow-[0_4px_16px_rgba(0,0,0,0.06)] md:p-8">
        <div className="mb-4 flex justify-center">
          <Image
            src={illustration}
            alt={title}
            width={160}
            height={120}
            className="h-[120px] w-auto object-contain"
          />
        </div>
        <h3 className="mb-2 text-lg font-bold text-forest">
          {emoji} {title}
        </h3>
        <p className="text-sm leading-relaxed text-charcoal">{description}</p>
      </div>
    </div>
  );
}
