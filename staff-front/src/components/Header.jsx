import React from "react";
import logo from "C:/Users/rashm/OneDrive/Desktop/staff management/staff management/staff-front/src/assets/logo.png"; // Import the logo

function Header() {
    return React.createElement(
        'nav',
        { className: 'navbar navbar-expand-lg bg-dark navbar-dark' },
        React.createElement(
            'div',
            { className: 'container-fluid' },
            React.createElement(
                'a',
                { className: 'navbar-brand', href: '#' },
                React.createElement('img', {
                    src: logo,  // Use the imported logo here
                    alt: 'Company Logo',
                    width: '30',
                    height: '30',
                    className: 'd-inline-block align-text-top'
                }),
                ' Dhananjana hotel'
            ),
            React.createElement(
                'button',
                {
                    className: 'navbar-toggler',
                    type: 'button',
                    'data-bs-toggle': 'collapse',
                    'data-bs-target': '#navbarSupportedContent',
                    'aria-controls': 'navbarSupportedContent',
                    'aria-expanded': 'false',
                    'aria-label': 'Toggle navigation'
                },
                React.createElement('span', { className: 'navbar-toggler-icon' })
            ),
            React.createElement(
                'div',
                { className: 'collapse navbar-collapse', id: 'navbarSupportedContent' },
                React.createElement(
                    'ul',
                    { className: 'navbar-nav me-auto mb-2 mb-lg-0' },
                    React.createElement(
                        'li',
                        { className: 'nav-item' },
                        React.createElement(
                            'a',
                            { className: 'nav-link active', 'aria-current': 'page', href: '/sm_dashboard' },
                            'Home'
                        )
                    ),
                    React.createElement(
                        'li',
                        { className: 'nav-item' },
                        React.createElement(
                            'a',
                            { className: 'nav-link', href: '/addemp' },
                            'Add Employee'
                        )
                    ),
                    
                    React.createElement(
                        'li',
                        { className: 'nav-item' },
                        React.createElement(
                            'a',
                            { className: 'nav-link', href: '/DetailsEmp' },
                            'Staff Details'
                        )
                    ),
                    React.createElement(
                        'li',
                        { className: 'nav-item' },
                        React.createElement(
                            'a',
                            { className: 'nav-link', href: '/AssignSalary' },
                            'Assign Salary'
                        )
                    ),
                    React.createElement(
                        'li',
                        { className: 'nav-item' },
                        React.createElement(
                            'a',
                            { className: 'nav-link', href: '/SalaryDetails' },
                            'Salary Details'
                        )
                    ),
                ),
                
            )
        )
    );
}

export default Header;
