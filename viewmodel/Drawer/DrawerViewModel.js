import RouteConstant from '../../utilities/Constants/RouteConstant';
import * as ImgConstant from '../../utilities/Constants/ImageConstant';
const DrawerViewModel = {
  GetMenuItems: () => {
    return [
      {
        title: 'My Home',
        id: '1',
        icon: ImgConstant.SD_IMG_HOME,
        page: RouteConstant.Home,
      },
      {
        title: 'My Cart',
        id: '2',
        icon: ImgConstant.SD_IMG_CART,
        page: RouteConstant.Cart,
      },
      {
        title: 'Tables',
        id: '3',
        icon: ImgConstant.SD_IMG_TABLE,
        page: RouteConstant.Product,
      },
      {
        title: 'Sofas',
        id: '4',
        icon: ImgConstant.SD_IMG_SOFA,
        page: RouteConstant.Product,
      },
      {
        title: 'Chairs',
        id: '5',
        icon: ImgConstant.SD_IMG_CHAIR,
        page: RouteConstant.Product,
      },
      {
        title: 'Cupboards',
        id: '6',
        icon: ImgConstant.SD_IMG_CUPBOARD,
        page: RouteConstant.Product,
      },
      {
        title: 'My Account',
        id: '7',
        icon: ImgConstant.RP_IMG_USERNAME,
        page: RouteConstant.Account,
      },
      {
        title: 'Store Locator',
        id: '8',
        icon: ImgConstant.SD_IMG_STORE,
        page: RouteConstant.Store,
      },
      {
        title: 'My Orders',
        id: '9',
        icon: ImgConstant.SD_IMG_ORDER,
        page: RouteConstant.Order,
      },
      {
        title: 'Logout',
        id: '10',
        icon: ImgConstant.SD_IMG_LOGOUT,
        page: RouteConstant.Logout,
      },
    ];
  },
  OnItemSelected: (itemId) => {
    const Items = DrawerViewModel.GetMenuItems();
    const Module = Items.filter((Obj) => Obj.id == itemId)[0];
    if (Module != undefined) {
      let returnItem = {};
      switch (Module.id) {
        case '3':
          returnItem = {page: Module.page, id: '1', title: 'Tables'};
          break;
        case '4':
          returnItem = {page: Module.page, id: '3', title: 'Sofa'};
          break;
        case '5':
          returnItem = {page: Module.page, id: '2', title: 'Chair'};
          break;
        case '6':
          returnItem = {page: Module.page, id: '4', title: 'Cupboard'};
          break;
        case '7':
          returnItem = {page: Module.page, id: '7', title: 'My Account'};
          break;
        case '10':
          returnItem = {id: '10'};
          break;
        default:
          returnItem = {page: Module.page};
          break;
      }

      return returnItem;
    }
  },
};
export default DrawerViewModel;
