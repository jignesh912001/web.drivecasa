import { useMemo } from 'react';
import { useTranslate } from 'src/locales';
import { paths } from 'src/routes/paths';
import Label from 'src/components/label';
import Iconify from 'src/components/iconify';
import SvgColor from 'src/components/svg-color';

// Define icons
const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const ICONS = {
  job: icon('ic_job'),
  blog: icon('ic_blog'),
  chat: icon('ic_chat'),
  mail: icon('ic_mail'),
  user: icon('ic_user'),
  file: icon('ic_file'),
  lock: icon('ic_lock'),
  tour: icon('ic_tour'),
  order: icon('ic_order'),
  label: icon('ic_label'),
  blank: icon('ic_blank'),
  kanban: icon('ic_kanban'),
  folder: icon('ic_folder'),
  banking: icon('ic_banking'),
  booking: icon('ic_booking'),
  invoice: icon('ic_invoice'),
  product: icon('ic_product'),
  calendar: icon('ic_calendar'),
  disabled: icon('ic_disabled'),
  external: icon('ic_external'),
  menuItem: icon('ic_menu_item'),
  ecommerce: icon('ic_ecommerce'),
  analytics: icon('ic_analytics'),
  dashboard: icon('ic_dashboard'),
};

// Fetch user role from authentication context or hook
const useUserRole = () => {
  // This function should return the user's role(s). For example:
  // return ['employee']; // or ['superAdmin', 'Hr']
  // Implement your logic to get the user's role(s) here.
  return ['employee']; // Example role; replace with actual implementation
};

export function useNavData() {
  const { t } = useTranslate();
  const userRoles = useUserRole(); // Get user roles

  const data = useMemo(() => {
    const allItems = [
      // OVERVIEW
      {
        subheader: t('overview'),
        items: [
          {
            title: t('dashboard'),
            path: paths.dashboard.root,
            icon: ICONS.dashboard,
            roles: ['employee', 'superAdmin', 'Hr'], // Specify roles that can see this item
          },
        ],
      },

      // MANAGEMENT
      {
        subheader: t('management'),
        items: [
          {
            title: t('user'),
            path: paths.dashboard.user.root,
            icon: ICONS.user,
            roles: ['superAdmin', 'Hr'], // Example roles
            children: [
              { title: t('profile'), path: paths.dashboard.user.root },
              { title: t('cards'), path: paths.dashboard.user.cards },
              { title: t('list'), path: paths.dashboard.user.list },
              { title: t('create'), path: paths.dashboard.user.new },
              { title: t('edit'), path: paths.dashboard.user.demo.edit },
              { title: t('account'), path: paths.dashboard.user.account },
            ],
          },
          {
            title: t('product'),
            path: paths.dashboard.product.root,
            icon: ICONS.product,
            roles: ['superAdmin'], // Example role
            children: [
              { title: t('list'), path: paths.dashboard.product.root },
              {
                title: t('details'),
                path: paths.dashboard.product.demo.details,
              },
              { title: t('create'), path: paths.dashboard.product.new },
              { title: t('edit'), path: paths.dashboard.product.demo.edit },
            ],
          },
          // Add other items with roles here...
        ],
      },
    ];

    // Filter items based on user roles
    const filterItemsByRole = (items) => {
      return items
        .filter((item) =>
          !item.roles || item.roles.some((role) => userRoles.includes(role))
        )
        .map((item) => ({
          ...item,
          children: item.children ? filterItemsByRole(item.children) : undefined,
        }));
    };

    return allItems.map((section) => ({
      ...section,
      items: filterItemsByRole(section.items),
    }));
  }, [t, userRoles]);

  return data;
}
