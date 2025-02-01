export interface MenuItem {
  menu_id: number;
  menu_name: string;
  menu_option: string[];
  quantity: number;
}

export interface Order {
  order_id: number;
  created_at: string;
  menus: MenuItem[];
  status: "Pending" | "Cooking" | "Completed";
}

export interface StoreOrder {
  store_id: number;
  store_name: string;
  orders: Order[];
}
