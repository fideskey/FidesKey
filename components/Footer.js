import React from 'react';
import { useTranslation } from 'react-i18next';
import { FidesKeyIcon, Twitter, Facebook, Instagram, Linkedin, Github, Threads, Youtube } from './Icons.js';
import { sidebarData } from '../data/demoData.js';

const socialLinks = [
    { Icon: Twitter, href: '#', name: 'Twitter' },
    { Icon: Facebook, href: '#', name: 'Facebook' },
    { Icon: Instagram, href: '#', name: 'Instagram' },
    { Icon: Linkedin, href: '#', name: 'LinkedIn' },
    { Icon: Github, href: '#', name: 'GitHub' },
    { Icon: Threads, href: '#', name: 'Threads' },
    { Icon: Youtube, href: '#', name: 'YouTube' },
];

const Logo = () => {
    const { t } = useTranslation();
    return (
        React.createElement('div', { className: "flex flex-col items-start gap-2" },
            React.createElement('div', { className: "flex items-center gap-3" },
                React.createElement(FidesKeyIcon, { className: "h-10 w-auto" }),
                React.createElement('div', { className: "flex items-baseline" },
                    React.createElement('span', { className: "text-2xl font-bold text-gray-300" }, "Fides"),
                    React.createElement('span', { className: "text-2xl font-bold text-primary" }, "Key")
                )
            ),
            React.createElement('p', { className: "text-sm opacity-80 max-w-xs" }, t('header.tagline'))
        )
    );
};

const FooterLink = ({ href = '#', children }) => {
    return (
        React.createElement('span', { className: "text-gray-400 opacity-75" }, children)
    );
};

const Footer = () => {
    const { t } = useTranslation();
    
    const exploreLinks = sidebarData.slice(0, 4).map(cat => ({ key: cat.titleKey, href: '#' }));
    const legalLinks = [
        { key: 'footer.privacy', href: '#' },
        { key: 'footer.terms', href: '#' },
        { key: 'footer.cookies', href: '#' }
    ];

    return (
        React.createElement('footer', { className: "bg-night-blue text-white border-t border-white/10" },
            React.createElement('div', { className: "container mx-auto px-5 py-16" },
                React.createElement('div', { className: "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10" },
                    React.createElement('div', { className: "col-span-2 lg:col-span-2 pr-10" },
                        React.createElement(Logo, null)
                    ),
                    
                    React.createElement('div', { className: "col-span-2 md:col-span-1" },
                         React.createElement('h5', { className: "font-bold tracking-wider uppercase mb-4 text-sm text-gray-500" }, t('footer.connect')),
                         React.createElement('ul', { className: "space-y-3 text-sm" },
                            React.createElement('li', null, React.createElement(FooterLink, null, "info@fideskey.com")),
                            React.createElement('li', null, React.createElement(FooterLink, null, t('footer.help_center'))),
                            React.createElement('li', null, React.createElement(FooterLink, null, t('footer.careers')))
                        )
                    ),

                    React.createElement('div', null,
                        React.createElement('h5', { className: "font-bold tracking-wider uppercase mb-4 text-sm text-gray-500" }, t('footer.explore')),
                        React.createElement('ul', { className: "space-y-3 text-sm" },
                            exploreLinks.map(link => React.createElement('li', { key: link.key }, React.createElement(FooterLink, null, t(link.key))))
                        )
                    ),
                    
                    React.createElement('div', null,
                        React.createElement('h5', { className: "font-bold tracking-wider uppercase mb-4 text-sm text-gray-500" }, t('footer.legal')),
                        React.createElement('ul', { className: "space-y-3 text-sm" },
                            legalLinks.map(link => React.createElement('li', { key: link.key }, React.createElement(FooterLink, null, t(link.key))))
                        )
                    )
                ),
                
                React.createElement('div', { className: "border-t border-white/10 mt-12 pt-8 flex flex-col md:grid md:grid-cols-3 md:items-center text-sm text-gray-400 gap-8" },
                    React.createElement('div', { className: "text-center md:text-left" },
                        React.createElement('h6', { className: "font-semibold text-gray-300 text-sm mb-2" }, t('footer.follow_us')),
                        React.createElement('div', { className: "flex justify-center md:justify-start space-x-4" },
                            socialLinks.map(({ Icon, name }) => (
                                React.createElement('span', { key: name, className: "text-gray-400 opacity-75" },
                                    React.createElement(Icon, { className: "w-6 h-6" })
                                )
                            ))
                        ),
                        React.createElement('p', { className: "font-bold text-primary text-sm mt-3" }, "@fideskey")
                    ),
                    React.createElement('p', { className: "text-center md:col-start-2" }, t('footer.copyright'))
                )
            )
        )
    );
}

export default Footer;
