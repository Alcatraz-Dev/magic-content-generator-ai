// AIUsageServer.tsx
import { db } from "@/lib/db"; // Adjust import path as needed
import { auth } from "@clerk/nextjs/server";
import AIUsageChart from "./AIUsageChart"; // Import your chart component

export const AIUsage = async () => {
  const { userId } = auth();

  if (!userId) {
    return null; // Or handle redirect here
  }

  // Fetch user's total available credits
  const userRecord = await db.purchase.findMany({
    where: { userId : userId },
  });

  // Fetch user's AI outputs
  const userAIOutputs = await db.aIOutput.findMany({
    where: { userId },
  });

  const totalUsage = userAIOutputs.reduce((acc, output) => {
    return acc + (output.description?.length || 0);
  }, 0);
 const availableCredit = userRecord?.filter((record) => record.credit > 0).reduce((acc, record) => acc + record.credit, 0) || 10000;

  return (
    <div>
    <AIUsageChart avalibaleCredit={availableCredit} totalUsage={totalUsage} />
    </div>
  );
};

export default AIUsage;
