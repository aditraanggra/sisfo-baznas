export const menuItems = [
  {
    isHeadr: true,
    title: 'menu',
  },

  {
    title: 'Dashboard',
    icon: 'heroicons-outline:home',
    isOpen: true,
    isHide: true,
    child: [
      {
        childtitle: 'Analytics Dashboard',
        childlink: 'analytics',
      },
      {
        childtitle: 'Banking Dashboard',
        childlink: 'banking',
      },
      {
        childtitle: 'Pendistribusian',
        childlink: 'pendistribusian',
      },
    ],
  },
  {
    isHeadr: true,
    title: 'Entry Data',
  },
  {
    title: 'Data Pendistribusian',
    isHide: true,
    icon: 'heroicons-outline:circle-stack',
    link: 'entry-pendis',
  },

  {
    title: 'Data Mustahik',
    isHide: true,
    icon: 'heroicons-outline:circle-stack',
    link: 'entry-mustahik',
  },
  {
    isHeadr: true,
    title: 'Utility',
  },
  {
    title: 'Laporan Kinerja',
    isHide: true,
    icon: 'heroicons-outline:document-chart-bar',
    link: 'pendis-laporan-kinerja',
  },
  {
    isHeadr: true,
    title: 'administrator',
  },
  {
    title: 'Data User',
    isHide: true,
    icon: 'heroicons-outline:user',
    link: 'user',
  },
  {
    isHeadr: true,
    title: 'apps',
  },

  {
    title: 'Chat',
    isHide: true,
    icon: 'heroicons-outline:chat',
    link: 'chat',
  },

  {
    title: 'Email',
    isHide: true,
    icon: 'heroicons-outline:mail',
    link: 'email',
  },

  {
    title: 'Kanban',
    isHide: true,
    icon: 'heroicons-outline:view-boards',
    link: 'kanban',
  },
  {
    title: 'Calender',
    isHide: true,
    icon: 'heroicons-outline:calendar',
    link: 'calender',
  },

  {
    title: 'Todo',
    isHide: true,
    icon: 'heroicons-outline:clipboard-check',
    link: 'todo',
  },

  {
    title: 'Projects',
    icon: 'heroicons-outline:document',
    link: '#',
    isHide: true,
    child: [
      {
        childtitle: 'Projects',
        childlink: 'projects',
      },
      {
        childtitle: 'Project Details',
        childlink: 'project-details',
      },
    ],
  },
  {
    isHeadr: true,
    title: 'Pages',
  },
  {
    title: 'Authentication',
    icon: 'heroicons-outline:lock-closed',
    link: '#',
    child: [
      {
        childtitle: 'Signin One',
        childlink: '/',
      },
      {
        childtitle: 'Signin Two',
        childlink: '/login2',
      },
      {
        childtitle: 'Signin Three',
        childlink: '/login3',
      },
      {
        childtitle: 'Signup One',
        childlink: '/reg',
      },
      {
        childtitle: 'Signup Two',
        childlink: '/reg2',
      },
      {
        childtitle: 'Signup Three',
        childlink: '/reg3',
      },
      {
        childtitle: 'Forget Password One',
        childlink: '/forgot-password',
      },
      {
        childtitle: 'Forget Password Two',
        childlink: '/forgot-password2',
      },
      {
        childtitle: 'Forget Password Three',
        childlink: '/forgot-password3',
      },
      {
        childtitle: 'Lock Screen One',
        childlink: '/lock-screen',
      },
      {
        childtitle: 'Lock Screen Two',
        childlink: '/lock-screen2',
      },
      {
        childtitle: 'Lock Screen Three',
        childlink: '/lock-screen3',
      },
    ],
  },
  {
    title: 'Utility',
    icon: 'heroicons-outline:view-boards',
    link: '#',
    isHide: false,
    child: [
      {
        childtitle: 'Invoice',
        childlink: 'invoice',
      },
      {
        childtitle: 'Pricing',
        childlink: 'pricing',
      },
      // {
      //   childtitle: "Testimonial",
      //   childlink: "testimonial",
      // },
      {
        childtitle: 'FAQ',
        childlink: 'faq',
      },
      {
        childtitle: 'Blog',
        childlink: 'blog',
      },
      {
        childtitle: 'Blank page',
        childlink: 'blank-page',
      },
      {
        childtitle: 'Prfoile',
        childlink: 'profile',
      },
      {
        childtitle: 'Settings',
        childlink: 'settings',
      },
      {
        childtitle: '404 page',
        childlink: 'error-page',
      },

      {
        childtitle: 'Coming Soon',
        childlink: 'coming-soon',
      },
      {
        childtitle: 'Under Maintanance page',
        childlink: 'under-construction',
      },
    ],
  },
  {
    isHeadr: true,
    title: 'Elements',
  },
  {
    title: 'Widgets',
    icon: 'heroicons-outline:view-grid-add',
    link: '#',
    child: [
      {
        childtitle: 'Basic',
        childlink: 'basic',
      },
      {
        childtitle: 'Statistic',
        childlink: 'statistic',
      },
    ],
  },
  {
    title: 'Components',
    icon: 'heroicons-outline:collection',
    link: '#',
    child: [
      {
        childtitle: 'Typography',
        childlink: 'typography',
      },
      {
        childtitle: 'Colors',
        childlink: 'colors',
      },
      {
        childtitle: 'Alert',
        childlink: 'alert',
      },
      {
        childtitle: 'Button',
        childlink: 'button',
      },
      {
        childtitle: 'Card',
        childlink: 'card',
      },
      {
        childtitle: 'Carousel',
        childlink: 'carousel',
      },
      {
        childtitle: 'Dropdown',
        childlink: 'dropdown',
      },

      {
        childtitle: 'Modal',
        childlink: 'modal',
      },
      {
        childtitle: 'Progress bar',
        childlink: 'progress-bar',
      },
      {
        childtitle: 'Placeholder',
        childlink: 'placeholder',
      },
      {
        childtitle: 'Tab & Accordion',
        childlink: 'tab-accordion',
      },
      {
        childtitle: 'Badges',
        childlink: 'badges',
      },
      {
        childtitle: 'Paginatins',
        childlink: 'paginations',
      },
      {
        childtitle: 'Video',
        childlink: 'video',
      },
      {
        childtitle: 'Tooltip & Popover',
        childlink: 'tooltip-popover',
      },
    ],
  },
  {
    title: 'Forms',
    icon: 'heroicons-outline:clipboard-list',
    link: '#',
    child: [
      {
        childtitle: 'Input',
        childlink: 'input',
      },
      {
        childtitle: 'Input group',
        childlink: 'input-group',
      },
      {
        childtitle: 'Input layout',
        childlink: 'input-layout',
      },
      {
        childtitle: 'Form validation',
        childlink: 'form-validation',
      },
      {
        childtitle: 'Wizard',
        childlink: 'form-wizard',
      },
      {
        childtitle: 'Input mask',
        childlink: 'input-mask',
      },
      {
        childtitle: 'File input',
        childlink: 'file-input',
      },
      {
        childtitle: 'Form repeater',
        childlink: 'form-repeater',
      },
      {
        childtitle: 'Textarea',
        childlink: 'textarea',
      },
      {
        childtitle: 'Checkbox',
        childlink: 'checkbox',
      },
      {
        childtitle: 'Radio button',
        childlink: 'radio-button',
      },
      {
        childtitle: 'Switch',
        childlink: 'switch',
      },
      {
        childtitle: 'Select & Vue select',
        childlink: 'select',
      },
      {
        childtitle: 'Date time picker',
        childlink: 'date-time-picker',
      },
    ],
  },
  {
    title: 'Table',
    icon: 'heroicons-outline:table',
    link: '#',
    child: [
      {
        childtitle: 'Basic Table',
        childlink: 'table-basic',
      },
      {
        childtitle: 'React Table',
        childlink: 'react-table',
      },
    ],
  },
  {
    title: 'Chart',
    icon: 'heroicons-outline:chart-bar',
    link: '#',
    child: [
      {
        childtitle: 'Apex chart',
        childlink: 'appex-chart',
      },
      {
        childtitle: 'Chart js',
        childlink: 'chartjs',
      },
      {
        childtitle: 'Recharts',
        childlink: 'recharts',
      },
    ],
  },
  {
    title: 'Map',
    icon: 'heroicons-outline:map',
    link: 'map',
  },
  {
    title: 'Icons',
    icon: 'heroicons-outline:emoji-happy',
    link: 'icons',
  },
  {
    title: 'Multi Level',
    icon: 'heroicons:share',
    link: '#',
    child: [
      {
        childtitle: 'Level 1.1',
        childlink: 'icons',
      },
      {
        childtitle: 'Level 1.2',
        childlink: 'Level-1',
        multi_menu: [
          {
            multiTitle: 'Level 2.1',
            multiLink: 'Level-2',
          },
          {
            multiTitle: 'Level 2.2',
            multiLink: 'Level-2.3',
          },
        ],
      },
    ],
  },
]
