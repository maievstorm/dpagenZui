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
    title: 'Mở rộng',
    type: 'group',
    children: [
        {
            id: 'util-typography',
            title: 'Đăng ký tài nguyên',
            type: 'item',
            url: '/register-service',
            icon: icons.IconSquarePlus,
            breadcrumbs: true
        }
    ]
};

export default registerService;