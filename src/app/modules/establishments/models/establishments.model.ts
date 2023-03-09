export interface EstablishmentsModel {
  id: number;
  imgUrl: string;
  coverImgUrl?: string;
  name: string;
  noBrand: boolean;
  open: string;
  close: string;
  businessType: {
    id: number;
    name: string;
  };
  kitchenType: string;
  freeDelivery: true;
  shippingCost: number;
  deliveryTime: number;
  opened: true;
}
