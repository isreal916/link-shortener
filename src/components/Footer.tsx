export default function Footer() {
  return (
    <div className="bg-verydarkViolet flex flex-col justify-center md:justify-around md:flex-row text-gray gap-8 py-12 items-center">
      <h1 className="text-2xl font-bold text-white">Shortly</h1>
      <ul>
        <li className="text-white font-bold">Features</li>
        <li>Link shortening</li>
        <li>Branded Links</li>
        <li>Analytics</li>
      </ul>
      <ul>
        <li className="text-white font-bold">Resources</li>
        <li>Blog</li>
        <li>Developers</li>
        <li>Support</li>
      </ul>
      <ul>
        <li className="text-white font-bold">Company</li>
        <li>About</li>
        <li>Our Team</li>
        <li>Careers</li>
        <li>Contact</li>
      </ul>
      <div className="social flex gap-2">
        <img src="/images/icon-facebook.svg" alt="" />
        <img src="/images/icon-twitter.svg" alt="" />
        <img src="/images/icon-pinterest.svg" alt="" />
        <img src="/images/icon-instagram.svg" alt="" />
      </div>
    </div>
  );
}
