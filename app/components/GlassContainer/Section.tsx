import type { ReactNode } from 'react';

interface Props {
  right?: boolean;
  opacity?: any;
  children: ReactNode;
}

export const Section = ({ right, opacity, children }: Props) => {
  return (
    <section
      className={`h-screen flex flex-col justify-center p-10 ${
        right ? 'items-end' : 'items-start'
      }`}
      style={{
        opacity,
      }}
    >
      <div className="w-1/2 flex items-center justify-center">
        <div className="max-w-sm w-full">
          <div className="bg-white  rounded-lg px-8 py-12">{children}</div>
        </div>
      </div>
    </section>
  );
};
