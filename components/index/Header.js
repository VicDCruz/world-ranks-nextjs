import { CodeTwoTone } from '@ant-design/icons';
import { Button, message } from "antd";

function Header() {
  const handleClick = menu => () => {
    const msg = `You clicked ${menu}. A random message, enjoy!`;
    switch (Math.ceil(Math.random() * 4)) {
      case 1:
        message.info(msg);
        break;
      case 2:
        message.success(msg);
        break;
      case 3:
        message.error(msg);
        break;
      case 4:
        message.warning(msg);
        break;
      default:
        break;
    }
  };

  return (
    <header>
      <nav className="flex items-center justify-between p-6 container mx-auto">
        {/* Logo */}
        <CodeTwoTone twoToneColor="#f3bd0d" className="text-4xl" />

        {/* Menu items */}
        <div className="hidden lg:flex">
          <Button type="link" size="large" onClick={handleClick('Home')} className="block mt-4 lg:inline-block lg:mt-0 mr-10">
            Home
          </Button>
          <Button type="link" size="large" onClick={handleClick('Services')} className="block mt-4 lg:inline-block lg:mt-0 mr-10">
            Services
          </Button>
          <Button type="link" size="large" onClick={handleClick('Portfolio')} className="block mt-4 lg:inline-block lg:mt-0 mr-10">
            Portfolio
          </Button>
          <Button type="link" size="large" onClick={handleClick('Company')} className="block mt-4 lg:inline-block lg:mt-0 mr-10">
            Company
          </Button>
          <Button type="link" size="large" onClick={handleClick('Contact')} className="block mt-4 lg:inline-block lg:mt-0">
            Contact
          </Button>
        </div>

        {/* CTA and Hamburger icon */}
        <div className="flex items-center">
          <div className="mr-5 lg:mr-0">
            <Button type="text" className="py-2 px-6 text-lg">Sign in</Button>
            <Button type="primary" className="py-2 px-6 text-lg">Sign up</Button>
          </div>
          <div className="block lg:hidden">
            <button
              className="flex items-center px-4 py-3 border rounded text-yellow-500 border-yellow-500 focus:outline-none">
              <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
