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
    items: [
      { name: "About Us", url: "https://careers.swiggy.com/#/" },
      { name: "Swiggy Corporate", url: "https://www.swiggy.com/corporate/" },
      { name: "Careers", url: "https://careers.swiggy.com/#/" },
      { name: "Team", url: "https://careers.swiggy.com/#/" },
      { name: "Swiggy One", url: "https://www.swiggy.com/swiggy-super" },
      { name: "Swiggy Instamart", url: "https://www.swiggy.com/instamart" },
      { name: "Swiggy Dineout", url: "https://www.swiggy.com/dineout" },
      { name: "Swiggy Genie", url: "https://www.swiggy.com/swiggy-genie" },
      { name: "Minis", url: "https://mini.store/" }
    ],
  },
  {
    title: "Contact Us",
    items: [
      { name: "Help & Support", url: "https://www.swiggy.com/support" },
      { name: "Partner With Us", url: "https://partner.swiggy.com/login#/swiggy" },
      { name: "Ride With Us", url: "https://ride.swiggy.com/" }
    ],
    additional: [
      { name: "Terms & Conditions", url: "https://www.swiggy.com/terms-and-conditions" },
      { name: "Cookie Policy", url: "https://www.swiggy.com/cookie-policy" },
      { name: "Privacy Policy", url: "https://www.swiggy.com/privacy-policy" }
    ],
  },
  {
    title: "Available in:",
    items: [
      { name: "Bangalore", url: "https://www.swiggy.com/city/bangalore" },
      { name: "Gurgaon", url: "https://www.swiggy.com/city/gurgaon" },
      { name: "Hyderabad", url: "https://www.swiggy.com/city/hyderabad" },
      { name: "Delhi", url: "https://www.swiggy.com/city/delhi" },
      { name: "Mumbai", url: "https://www.swiggy.com/city/mumbai" },
      { name: "Pune", url: "https://www.swiggy.com/city/pune" }
    ],
    additional: [
      { name: "Explore with Swiggy", url: "https://blog.swiggy.com/" },
      { name: "Swiggy News", url: "https://blog.swiggy.com/category/swiggy-restaurant-awards/" },
      { name: "Snackables", url: "https://blog.swiggy.com/category/snackables/campaigns/" }
    ],
  },
].map((section, index) => (
  <div key={index} className="mb-8 md:mb-0 min-w-0" style={{ fontFamily: "Nunito, sans-serif" }}>
    <h4 className="text-xl font-semibold text-[#02060CEB] mb-4">{section.title}</h4>
    <div className="space-y-2 text-left leading-relaxed">
      {section.items.map((item, i) => (
        <a
          key={i}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-base text-[#02060C99] hover:text-orange-500 cursor-pointer font-bold no-underline block"
          style={{ textDecoration: "none", color: "#02060C99" }}
        >
          {item.name}
        </a>
      ))}
    </div>
    {section.additional && (
      <>
        <h4 className="text-xl font-semibold text-[#02060CEB] mt-4 mb-2">
          {index === 1 ? "Legal" : "Life at Swiggy"}
        </h4>
        <div className="space-y-2 text-left leading-relaxed">
          {section.additional.map((item, i) => (
            <a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-[#02060C99] hover:text-orange-500 cursor-pointer font-bold no-underline block"
              style={{ textDecoration: "none", color: "#02060C99" }}
            >
              {item.name}
            </a>
          ))}
        </div>
      </>
    )}
  </div>
))
}

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

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 px-4 sm:px-6 lg:px-8">
  {/* Heading */}
  <p className="text-lg text-[#02060CBF] text-center md:text-left font-bold" style={{ fontFamily: "Nunito, sans-serif" }}>
    For a better experience, download the Swiggy app now
  </p>

      {/* Download App Section */}
      <div className="flex flex-wrap gap-4 justify-center md:justify-start">
  {/* App Store Link */}
  <a
    href="https://apps.apple.com/in/app/swiggy-food-instamart-dineout/id989540920?referrer=utm_source%3Dswiggy%26utm_medium%3Dhomepage"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:scale-105 transition-transform duration-300"
    aria-label="Download on the App Store"
  >
    <img
      src="https://w7.pngwing.com/pngs/327/888/png-transparent-aivalable-on-the-app-store-hd-logo.png"
      alt="Download on the App Store"
      className="w-36 h-12 sm:w-48 sm:h-16"
    />
  </a>

  {/* Google Play Link */}
  <a
    href="https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheader"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:scale-105 transition-transform duration-300"
    aria-label="Get it on Google Play"
  >
    <img
      src="https://www.pngmart.com/files/23/Google-Play-Logo-PNG-Clipart.png"
      alt="Get it on Google Play"
      className="w-36 h-12 sm:w-48 sm:h-16"
    />
  </a>
</div>
</div>
    </footer>
  );
};

export default Footer;
