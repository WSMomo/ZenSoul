import GithubIcon from "../assets/contact/gitHub.png";
import LinkedinIcon from "../assets/contact/linkedin.png";
import WebsiteIcon from "../assets/contact/marcoMomoHome.png";
import FooterIcon from "./FooterIcon";

export default function Footer() {
  return (
    <footer className="bg-slate-700 flex flex-col items-center justify-center text-center w-full min-h-fit p-4 mt-24">
      <div className="text-blue-200">A project by Marco Momo</div>
      <div className="social flex justify-center items-center">
        <FooterIcon
          link="https://wsmomo.github.io/Portfolio-Marco-Momo/"
          title="website"
          icon={WebsiteIcon}
        />
        <FooterIcon
          link="https://github.com/wsmomo/"
          title="github"
          icon={GithubIcon}
        />
        <FooterIcon
          link="https://www.linkedin.com/in/marco-momo-61b08a159/?original_referer=https%3A%2F%2Fwsmomo.github.io%2F"
          title="linkedin"
          icon={LinkedinIcon}
        />
      </div>
    </footer>
  );
}
