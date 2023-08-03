type Props = {
  link: string;
  title: string;
  icon: string;
};
export default function FooterIcon({ link, title, icon }: Props) {
  return (
    <a href={link} target="_blank" title={title}>
      <img
        className="icons m-5 h-12 md:h-20 rounded-[10%] border-none"
        src={icon}
        alt={title}
      />
    </a>
  );
}
