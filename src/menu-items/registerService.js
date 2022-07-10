// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill,IconNotebook,IconSquarePlus  } from '@tabler/icons';

// constant
const icons = {
    IconTypography,
    IconPalette,
    IconShadow,
    IconWindmill,
    IconNotebook,
    IconSquarePlus
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const registerService = {
    id: 'registerService',
    title: 'Quản lý tài nguyên',
    type: 'group',
    children: [
        {
            id: 'mysubscription',
            title: 'Tài nguyên',
            type: 'item',
            url: '/mysubscription',
            icon: icons.IconSquarePlus,
            breadcrumbs: true
        },
        {
            id: 'util-typography',
            title: 'Đăng ký',
            type: 'item',
            url: '/registerservice',
            icon: icons.IconSquarePlus,
            breadcrumbs: true
        }
    ]
};

export default registerService;