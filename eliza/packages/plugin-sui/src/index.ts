import { Plugin } from "@elizaos/core";
import transferToken from "./actions/transfer.ts";
import { WalletProvider, walletProvider } from "./providers/wallet.ts";
import { SuiService } from "./services/sui.ts";
import swapToken from "./actions/swap.ts";
import depositToNavi from "./actions/depositToNavi.ts";
import getNaviPortfolio from "./actions/getNaviPortfolio.ts";
import withdrawFromNavi from "./actions/withdrawFromNavi.ts";

export { WalletProvider, transferToken as TransferSuiToken };

export const suiPlugin: Plugin = {
    name: "sui",
    description: "Sui Plugin for Eliza",
    actions: [transferToken, swapToken, depositToNavi, getNaviPortfolio, withdrawFromNavi],
    evaluators: [],
    providers: [walletProvider],
    services: [new SuiService()],
};

export default suiPlugin;
