import { orders } from "../db";

const OrdersTable = () => {
  return (
    <div className="bg-white w-1/2 p-4 rounded-xl shadow-md">
      <h2 className="text-lg font-bold mb-3">Recent Orders</h2>

      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-600">
            <th>ID</th>
            <th>User</th>
            <th>Product</th>
            <th>Status</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order, index) => (
            <tr key={index} className="border-t">
              <td>{order.id}</td>
              <td>{order.user}</td>
              <td>{order.product}</td>
              <td
                className={
                  order.status === "Delivered"
                    ? "text-green-500"
                    : "text-yellow-500"
                }
              >
                {order.status}
              </td>
              <td>₹{order.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable;
