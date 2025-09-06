export default function Navigation() {
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
      <nav>
        <div className="nav-container">
          <div className="logo">Ashok Kumar</div>
            <ul className="nav-links">
              {navItems.map((item) => (
              <li key={item.name}>
                <a href={item.href}>
                  {item.name}
                  </a>
              </li>
            ))}
            </ul>
        </div>
    </nav>
  );
}