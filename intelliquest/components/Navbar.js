/**
 * NAVBAR COMPONENT
 * Renders header with active state detection, logo and mobile menu
 */
function Navbar({ activePage = 'home', siteConfig }) {
  const { brand, navigation } = siteConfig;

  const renderNavItems = () => {
    // Exclude Témoignages on homepage navbar as requested by user
    const items = activePage === 'home'
      ? navigation.filter(item => item.key !== 'testimonials')
      : navigation;

    return items.map(item => {
      if (item.dropdown) {
        const isChildActive = item.dropdown.some(child => child.key === activePage);
        const activeParentClass = isChildActive ? ' active active-parent' : '';
        const activeLinkClass = isChildActive ? ' class="active"' : '';
        const dropdownItems = item.dropdown.map(child => {
          const childActiveClass = child.key === activePage ? ' class="active"' : '';
          return `<li><a href="${child.href}"${childActiveClass}>${child.label}</a></li>`;
        }).join('\n                            ');

        return `
                    <li class="has-dropdown${activeParentClass}">
                        <a href="${item.href}"${activeLinkClass}>${item.label} <i class="fas fa-chevron-down nav-chevron"></i></a>
                        <ul class="dropdown-menu simple-dropdown">
                            ${dropdownItems}
                        </ul>
                    </li>`;
      } else {
        const isActive = item.key === activePage;
        const activeClass = isActive ? ' class="active"' : '';
        return `
                    <li><a href="${item.href}"${activeClass}>${item.label}</a></li>`;
      }
    }).join('');
  };

  return `
    <!-- Header / Navbar -->
    <header class="site-header">
        <div class="container header-container">
            <a href="index.html" class="logo">
                <img src="${brand.logo.src}" alt="${brand.logo.alt}" class="logo-img" width="${brand.logo.width}" height="${brand.logo.height}" fetchpriority="high">
            </a>
            
            <button class="mobile-menu-btn" aria-label="Toggle menu">
                <span class="btn-line"></span>
                <span class="btn-line"></span>
                <span class="btn-line"></span>
            </button>
            
            <nav class="main-nav">
                <ul class="nav-list">${renderNavItems()}
                </ul>
            </nav>
        </div>
    </header>
  `.trim();
}

module.exports = Navbar;
