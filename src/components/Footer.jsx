const Footer = () => {
  return (
    <section className="flex">
      <div className="">
        <ul>
          <li className="text-white font-bold italic">Company</li>
          <li className="text-white  italic">Careers</li>
          <li className="text-white  italic">Team</li>
          <li className="text-white  italic">Swiggy One</li>
          <li className="text-white italic">Swiggy Instamart</li>
          <li className="text-white italic">Swiggy Genie</li>
          <li className="text-white  italic"></li>
        </ul>
      </div>
      <div className="flex flex-col ml-[20px]">
        <div>
            <ul>
                <li className="text-white font-bold italic">Contact Us</li>
                <li className="text-white italic">Help & Support</li>
                <li className="text-white italic">Partner with us</li>
                <li className="text-white italic">Ride with us</li>
            </ul>
        </div>
        <div className="mt-[10px]">
          <ul>
            <li className="text-white font-bold italic">Terms & Conditions</li>
            <li className="text-white italic">Cookie Policy</li>
            <li className="text-white italic">Privacy Policy</li>
            <li className="text-white italic">Investor Relations</li>
          </ul>
        </div>
      </div>
      <div></div>
      <div></div>
    </section>
  );
};

export default Footer;
