import { Layout, Menu, Drawer, Button, Spin } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { Link, router, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';

const { Header, Sider, Content } = Layout;

export default function AuthenticatedLayout({ children, header }) {
    const { url } = usePage();
    const [collapsed, setCollapsed] = useState(false);
    const [drawerVisible, setDrawerVisible] = useState(false);

    const navItems = [
        { label: 'Dashboard', href: '/dashboard' },
        { label: 'Projects', href: '/admin/projects' },
        { label: 'Units', href: '/admin/units' },
        { label: 'Amenities', href: '/admin/amenities' },
        { label: 'Construction Updates', href: '/admin/construction-updates' },
    ];

    const selectedKey = navItems.find(item => url.startsWith(item.href))?.href;

    const renderMenu = () => (
        <Menu
            mode="inline"
            selectedKeys={[selectedKey]}
            className="h-full border-r-0"
        >
            {navItems.map(item => (
                <Menu.Item key={item.href}>
                    <Link href={item.href}>{item.label}</Link>
                </Menu.Item>
            ))}
        </Menu>
    );

    const [loading, setLoading] = useState(false);
      const [delayed, setDelayed] = useState(false);

      useEffect(() => {
        let timeout;

        // Handle splash screen only on first visit
        const hasSeenSplash = localStorage.getItem('hasSeenSplash');
        const splash = document.getElementById('splash-screen');

        if (!hasSeenSplash && splash) {
          // Mark splash as seen for future visits
          localStorage.setItem('hasSeenSplash', 'true');

          // Delay hiding for dramatic effect (optional)
          setTimeout(() => {
            splash.classList.add('hidden');
            setTimeout(() => splash.remove(), 1500); // allow transition
          }, 1500); // 1.5s splash screen
        } else if (splash) {
          splash.remove(); // Skip immediately if already seen
        }

        // Inertia progress loading
        router.on('start', () => {
          timeout = setTimeout(() => {
            setDelayed(true);
            setLoading(true);
          }, 250);
        });

        router.on('finish', () => {
          clearTimeout(timeout);
          setLoading(false);
          setTimeout(() => setDelayed(false), 300);
        });

        return () => {
          router.on('start');
          router.on('finish');
        };
      }, []);

    return (
        <Layout className="min-h-screen ">
            {/* Mobile Drawer */}
            <Drawer
                title={<img src='logo.png' className='w-full h-32 object-cover' />}
                className=''
                placement="left"
                onClose={() => setDrawerVisible(false)}
                open={drawerVisible}
                bodyStyle={{ padding: 0 }}
            >
                {renderMenu()}
            </Drawer>

            {/* Desktop Sidebar */}
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                className="hidden lg:block !bg-gray-50"
                width={220}
            >
                <div className="text-center py-4 font-bold text-lg flex justify-center items-center"><img src='/logo_dark.png' className='w-24 object-contain ' /></div>
                {renderMenu()}
            </Sider>

            {/* Main Layout */}
            <Layout>
                <Header className="bg-white shadow px-4 flex justify-between items-center">
                    <div className="block lg:hidden">
                        <Button
                            icon={<MenuOutlined />}
                            onClick={() => setDrawerVisible(true)}
                        />
                    </div>
                    <div className="text-xl font-semibold text-gray-800">
                        {header}
                    </div>
                </Header>

                <Content className="p-6 bg-gray-50">
                    {children}
                </Content>
            </Layout>
             {delayed && loading && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white bg-opacity-70">
          <Spin size="large" tip="Loading..." />
        </div>
      )}
        </Layout>
    );
}
