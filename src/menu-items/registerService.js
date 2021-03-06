// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill,IconNotebook,IconListCheck  ,IconTextWrapDisabled } from '@tabler/icons';

 
// constant
const icons = {
    IconTypography,
    IconPalette,
    IconShadow,
    IconWindmill,
    IconNotebook,
    IconListCheck,
    IconTextWrapDisabled
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
            icon: icons.IconListCheck,
            breadcrumbs: true
        },
        {
            id: 'util-typography',
            title: 'Đăng ký',
            type: 'item',
            url: '/registerservice',
            icon: icons.IconTextWrapDisabled,
            breadcrumbs: true
        }
    ]
};

export default registerService;