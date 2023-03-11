const pluginConfig = {
    current_lang: 'en',
    autoclear_cookies: true,
    page_scripts: true,
    cookie_name: 'cookies',

    languages: {
        en: {
            consent_modal: {
                title: 'We value your privacy!',
                description:
                    'We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept all", you consent to our use of cookies. You can <button type="button" data-cc="c-settings" class="cc-link">change your cookie settings</button> at any time.',
                primary_btn: {
                    text: 'Accept all',
                    role: 'accept_all',
                },
                secondary_btn: {
                    text: 'Reject all',
                    role: 'accept_necessary',
                },
            },
            settings_modal: {
                title: 'Cookie Settings',
                save_settings_btn: 'Save settings & Accept',
                accept_all_btn: 'Accept all',
                reject_all_btn: 'Reject all',
                close_btn_label: 'Close',
                blocks: [
                    {
                        title: 'Cookie usage',
                        description:
                            'Cookies help us deliver the best experience on our website. You can choose for each category to opt-in/out whenever you want. For more details relative to cookies and other sensitive data, please read the full <a href="https://weirdorconfusing.com/privacy/" class="cc-link" target="_blank">privacy policy</a>.',
                    },
                    {
                        title: 'Right of access to personal data',
                        description:
                            'This right gives you the opportunity to find out what types of data are collected and processed by the website using cookies, and how this data is used. You can request access to this data and receive a copy of this information.',
                        toggle: {
                            value: 'right of access',
                            enabled: true,
                            readonly: false,
                        },
                    },
                    {
                        title: 'Right to rectification',
                        description:
                            'This right allows you to correct any inaccurate or incomplete data that is being collected and processed by the website through the use of cookies. You can request necessary changes to this data and confirmation that it has been rectified.',
                        toggle: {
                            value: 'right to rectification',
                            enabled: true,
                            readonly: false,
                        },
                    },
                    {
                        title: 'Right to erasure (\'Right to be forgotten\')',
                        description:
                            'This right allows you to delete your personal data that has been collected and processed by the website through the use of cookies. You can request to have your personal information deleted and receive confirmation that the data has been erased.',
                        toggle: {
                            value: 'right to erasure',
                            enabled: true,
                            readonly: false,
                        },
                    },
                    {
                        title: 'Right to restriction of processing',
                        description:
                            'This right allows you to limit how your personal data is processed by the website or application.',
                        toggle: {
                            value: 'right to restriction of processing',
                            enabled: true,
                            readonly: false,
                        },
                    },
                    {
                        title: 'Right to data portability',
                        description:
                            'This right allows you to obtain and reuse your personal data for your own purposes across different services.',
                        toggle: {
                            value: 'right to data portability',
                            enabled: true,
                            readonly: false,
                        },
                    },
                    {
                        title: 'More information',
                        description:
                            'For any queries in relation to our policy on cookies and your choices, please contact us by email <a class="cc-link" href="mailto:timothy.w.holman@gmail.com">timothy.w.holman@gmail.com</a>.',
                    },
                ],
            },
        },
    },

    gui_options: {
        consent_modal: {
            layout: 'cloud',
            position: 'bottom center',
            transition: 'slide',
            swap_buttons: false
        },
        settings_modal: {
            layout: 'box',
            transition: 'slide'
        }
    }
};

export default pluginConfig;