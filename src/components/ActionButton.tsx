export type Props = {
  children: React.ReactNode;
  handleClick: () => void;
  color: string;
};

export function ActionButton({ children, handleClick, color }: Props) {
  return (
    <button
      className={`${color} w-32 m-2 md:m-10 rounded-3xl h-12 transition-all duration-200 md:hover:bg-cyan-950 md:hover:text-blue-200`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
