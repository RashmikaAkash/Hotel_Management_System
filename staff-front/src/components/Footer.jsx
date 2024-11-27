import React from 'react';

function Footer() {
    return React.createElement(
        'footer',
        { className: 'text-center text-lg-start text-white bg-dark' },
        React.createElement(
            'div',
            { className: 'container p-4 pb-0' },
            React.createElement(
                'section',
                null,
                React.createElement(
                    'div',
                    { className: 'row' },
                    React.createElement(
                        'div',
                        { className: 'col-md-3 col-lg-3 col-xl-3 mx-auto mt-3' },
                        React.createElement(
                            'h6',
                            { className: 'text-uppercase mb-4 font-weight-bold' },
                            'Dhananjana hotel'
                        ),
                        React.createElement(
                            'p',
                            null,
                            'Welcome to Dhananjana hotel, where culinary excellence meets warm hospitality.'
                        )
                    ),
                    React.createElement('hr', { className: 'w-100 clearfix d-md-none' }),
                    React.createElement(
                        'div',
                        { className: 'col-md-2 col-lg-2 col-xl-2 mx-auto mt-3' },
                        React.createElement(
                            'h6',
                            { className: 'text-uppercase mb-4 font-weight-bold' },
                            'Products'
                        ),
                        React.createElement(
                            'p',
                            null,
                            React.createElement(
                                'a',
                                { style: { textDecoration: 'none' }, className: 'text-white', href: '/orderMenuHome' },
                                'Menu'
                            )
                        ),
                        React.createElement(
                            'p',
                            null,
                            React.createElement(
                                'a',
                                { className: 'text-white', href: '/reservation' },
                                'Reservations'
                            )
                        ),
                        React.createElement(
                            'p',
                            null,
                            React.createElement(
                                'a',
                                { style: { textDecoration: 'none' }, className: 'text-white' },
                                'Specials'
                            )
                        ),
                        React.createElement(
                            'p',
                            null,
                            React.createElement(
                                'a',
                                { style: { textDecoration: 'none' }, className: 'text-white' },
                                'Events'
                            )
                        )
                    ),
                    React.createElement('hr', { className: 'w-100 clearfix d-md-none' }),
                    React.createElement(
                        'div',
                        { className: 'col-md-3 col-lg-2 col-xl-2 mx-auto mt-3' },
                        React.createElement(
                            'h6',
                            { className: 'text-uppercase mb-4 font-weight-bold' },
                            'Useful links'
                        ),
                        React.createElement(
                            'p',
                            null,
                            React.createElement(
                                'a',
                                { style: { textDecoration: 'none' }, className: 'text-white' },
                                'About Us'
                            )
                        ),
                        React.createElement(
                            'p',
                            null,
                            React.createElement(
                                'a',
                                { style: { textDecoration: 'none' }, className: 'text-white', href: '/contact' },
                                'Contact Us'
                            )
                        ),
                        React.createElement(
                            'p',
                            null,
                            React.createElement(
                                'a',
                                { style: { textDecoration: 'none' }, className: 'text-white' },
                                'Privacy Policy'
                            )
                        ),
                        React.createElement(
                            'p',
                            null,
                            React.createElement(
                                'a',
                                { style: { textDecoration: 'none' }, className: 'text-white' },
                                'Terms & Conditions'
                            )
                        )
                    ),
                    React.createElement('hr', { className: 'w-100 clearfix d-md-none' }),
                    React.createElement(
                        'div',
                        { className: 'col-md-4 col-lg-3 col-xl-3 mx-auto mt-3' },
                        React.createElement(
                            'h6',
                            { className: 'text-uppercase mb-4 font-weight-bold' },
                            'Contact'
                        ),
                        React.createElement(
                            'p',
                            null,
                            React.createElement('i', { className: 'fas fa-home mr-3' }),
                            ' 173/1/B Kandy Rd, Mudungoda'
                        ),
                        React.createElement(
                            'p',
                            null,
                            React.createElement('i', { className: 'fas fa-envelope mr-3' }),
                            ' dhananjanahotel@gmail.com'
                        ),
                        React.createElement(
                            'p',
                            null,
                            React.createElement('i', { className: 'fas fa-phone mr-3' }),
                            ' +94 123456789'
                        )
                    )
                )
            ),
            React.createElement('hr', { className: 'my-3' }),
            React.createElement(
                'section',
                { className: 'p-3 pt-0' },
                React.createElement(
                    'div',
                    { className: 'row d-flex align-items-center' },
                    React.createElement(
                        'div',
                        { className: 'col-md-7 col-lg-8 text-center text-md-start' },
                        React.createElement(
                            'div',
                            { className: 'p-3' },
                            `© ${new Date().getFullYear()} Dhananjana hotel. All rights reserved.`
                        )
                    )
                )
            )
        )
    );
}

export default Footer;
