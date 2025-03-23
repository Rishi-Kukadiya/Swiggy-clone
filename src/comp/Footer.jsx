import "@fontsource/nunito";
import "@fontsource/nunito/700.css";
import "@fontsource/nunito/900.css";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12" style={{ fontFamily: "Nunito, sans-serif" }}>
      {/* Footer Grid */}
      <div className="mt-16"></div>
      <div className="h-8"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8" style={{ fontFamily: "Nunito, sans-serif" }}>
        {/* Logo Section */}
        <div className="col-span-2 md:col-span-1 flex flex-col items-center md:items-start mb-8 md:mb-0" style={{ fontFamily: "Nunito, sans-serif" }}>
          <img
            src="https://media-assets.swiggy.com/portal/testing/seo-home/Group.svg"
            alt="Swiggy Logo"
            className="w-28 mt-6 md:mt-4 mb-4 hover:scale-105 transition-transform duration-300 cursor-pointer"
          />
          <p className="text-lg text-[#02060CBF] text-center md:text-left font-bold" style={{ fontFamily: "Nunito, sans-serif" }}>
            © {new Date().getFullYear()} Swiggy Limited
          </p>
        </div>

        {/* Section Component */}
        {[
          {
            title: "Company",
            items: ["About Us", "Swiggy Corporate", "Careers", "Team", "Swiggy One", "Swiggy Instamart", "Swiggy Dineout", "Swiggy Genie", "Minis"],
          },
          {
            title: "Contact Us",
            items: ["Help & Support", "Partner With Us", "Ride With Us"],
            additional: ["Terms & Conditions", "Cookie Policy", "Privacy Policy"],
          },
          {
            title: "Available in:",
            items: ["Bangalore", "Gurgaon", "Hyderabad", "Delhi", "Mumbai", "Pune"],
            additional: ["Explore with Swiggy", "Swiggy News", "Snackables"],
          },
        ].map((section, index) => (
          <div key={index} className="mb-8 md:mb-0 min-w-0" style={{ fontFamily: "Nunito, sans-serif" }}>
            <h4 className="text-xl font-semibold text-[#02060CEB] mb-4" style={{ fontFamily: "Nunito, sans-serif" }}>{section.title}</h4>
            <div className="space-y-4 text-left leading-relaxed" style={{ fontFamily: "Nunito, sans-serif" }}>
              {section.items.map((item, i) => (
                <div key={i} className="text-base text-[#02060C99] hover:text-orange-500 cursor-pointer font-bold" style={{ fontFamily: "Nunito, sans-serif" }}>
                  {item}
                </div>
              ))}
            </div>
            {section.additional && (
              <>
                <h4 className="text-xl font-semibold text-[#02060CEB] mt-4 mb-2">
                  {index === 1 ? "Legal" : "Life at Swiggy"}
                </h4>
                <div className="space-y-4 text-left leading-relaxed">
                  {section.additional.map((item, i) => (
                    <div key={i} className="text-base text-[#02060C99] hover:text-orange-500 cursor-pointer font-bold" style={{ fontFamily: "Nunito, sans-serif" }}>
                      {item}
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        ))}

        {/* Social Links Section */}
<div className="mt-8 md:mt-0">
  <h4 className="text-xl font-semibold text-[#02060CEB] mb-4" style={{ fontFamily: "Nunito, sans-serif" }}>Follow Us</h4>
  <div className="flex flex-wrap gap-4">
    {[
      { name: "LinkedIn", icon: "https://media-assets.swiggy.com/portal/testing/seo-home/Linkedin.svg", url: "https://www.linkedin.com/company/swiggy-in/" },
      { name: "Instagram", icon: "https://media-assets.swiggy.com/portal/testing/seo-home/icon-instagram.svg", url: "https://www.instagram.com/swiggyindia/?hl=en" },
      { name: "Facebook", icon: "https://media-assets.swiggy.com/portal/testing/seo-home/icon-facebook.svg", url: "https://www.facebook.com/swiggy.in/" },
      { name: "Pinterest", icon: "https://media-assets.swiggy.com/portal/testing/seo-home/icon-pinterest.svg", url: "https://in.pinterest.com/swiggyindia/" },
      { name: "Twitter", icon: "https://media-assets.swiggy.com/portal/testing/seo-home/Twitter.svg", url: "https://x.com/Swiggy?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" },
    ].map((social, index) => (
      <a 
        key={index} 
        href={social.url} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="hover:text-orange-500"
      >
        <img
          src={social.icon}
          alt={social.name}
          className="w-6 h-6 hover:scale-110 transition-transform duration-300"
        />
      </a>
    ))}
  </div>
</div>
      </div>

      {/* Divider */}
      <hr className="border-gray-300 my-8" />

      {/* Download App Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 px-4 sm:px-6 lg:px-8">
        <p className="text-lg text-[#02060CBF] text-center md:text-left font-bold" style={{ fontFamily: "Nunito, sans-serif" }}>
          For better experience, download the Swiggy app now
        </p>
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <a href="#" className="hover:scale-105 transition-transform duration-300">
            <img
              src="https://w7.pngwing.com/pngs/327/888/png-transparent-aivalable-on-the-app-store-hd-logo.png"
              alt="App Store"
              className="w-36 h-12 sm:w-48 sm:h-16"
            />
          </a>
          <a href="#" className="hover:scale-105 transition-transform duration-300">
            <img
              src="https://www.pngmart.com/files/23/Google-Play-Logo-PNG-Clipart.png"
              alt="Google Play"
              className="w-36 h-12 sm:w-48 sm:h-16"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
