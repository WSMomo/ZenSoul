type Props = {
  image: string;
};

export function PreviewImage({ image }: Props) {
  return (
    <div className="rounded-full h-32 md:h-48 aspect-square flex items-center">
      <div className="rounded-full h-32 md:h-48 aspect-square flex items-center">
        <img
          className="w-32 md:w-40 aspect-square rounded-full"
          src={image}
          alt="exercise-icon"
        />
      </div>
    </div>
  );
}
