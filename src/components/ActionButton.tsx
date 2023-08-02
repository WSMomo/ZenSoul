type Props = {
  children: React.ReactNode;
  handleClick: () => void;
  color: string;
};

export function ActionButton({ children, handleClick, color }: Props) {
  return (
    <button
      className={`${color} m-2 md:m-10 w-32 md:w-40 h-20 rounded-md`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
