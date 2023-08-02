type Props = {
  children: React.ReactNode;
  handleClick: () => void;
};

export function ActionButton({ children, handleClick }: Props) {
  return (
    <button
      className="bg-blue-300 m-10 w-40 h-20 rounded-md"
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
