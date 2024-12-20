import OrderSummary from '@/components/organisms/OrderSummary';
import DashboardLayout from '@/components/templates/DashboardLayout';

const Orders = () => {
  return (
    <DashboardLayout>
      <OrderSummary />
    </DashboardLayout>
  );
};

export default Orders;
