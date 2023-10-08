import { getStockAbbrevation } from "@/actions/stock/stockAbbrevation";
import { getLatestStockData } from "@/actions/stock/stockTrend";
import LandingPage from "@/components/core/LandingPage";
import Layout from "@/components/common/Layout";

async function Dashboard() {
  const latestStockList = await getLatestStockData();
  const latestStockAbbreviation = await getStockAbbrevation();

  return (
    <div id="view" className="h-full w-screen flex flex-row">
      <Layout>
        <LandingPage
          latestStockList={latestStockList}
          latestStockAbbreviation={latestStockAbbreviation}
        />
      </Layout>
    </div>
  );
}

export default Dashboard;
