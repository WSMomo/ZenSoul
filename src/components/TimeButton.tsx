type Props = {
  children: React.ReactNode;
  handleClick: () => void;
};

export default function TimeButton({ children, handleClick }: Props) {
  return (
    <button
      className={`bg-blue-200 m-2 md:m-10  aspect-square rounded-full h-16 transition-all duration-200 hover:bg-teal-900 hover:text-blue-200 `}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
