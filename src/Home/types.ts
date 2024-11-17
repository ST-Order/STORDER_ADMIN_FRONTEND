export interface Order {
  id: string;
  time: string;
  quantity: string;
  menu: string;
  price: string;
  status: "PAID" | "COOKING" | "DONE";
}
