import { getLatestStockData } from "@/actions/stock/stockTrend";
import { getStockAbbreviation } from "@/actions/stock/stockAbbrevation";
import Layout from "@/components/common/Layout";
import LandingPageComponent from "@/components/core/LandingPageComponent";

async function Dashboard() {
  const latestStockList = await getLatestStockData();
  const latestStockAbbreviation = await getStockAbbreviation();

  return (
    <div className="bg-gray-50 dark:bg-gray-800">
      <Layout>
        <LandingPageComponent
          latestStockList={latestStockList}
          latestStockAbbreviation={latestStockAbbreviation}
        />
      </Layout>
    </div>
  );
}

export default Dashboard;
