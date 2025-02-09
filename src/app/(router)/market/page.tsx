import BestProduct from "@/src/components/market/BestProduct";
import SellingProductHeader from "@/src/components/market/SellingProductHeader";

export default function Market() {
  return (
    <div className="w-[1200px] mx-auto">
      <BestProduct />
      <SellingProductHeader />
    </div>
  );
}
