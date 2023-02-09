import { ThemeProvider } from "styled-components";
import { TransactionsProvider } from "./contexts/transactions-context";
import { Transactions } from "./pages/transactions";
import { GlobalStyles } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <TransactionsProvider>
        <Transactions />
      </TransactionsProvider>
    </ThemeProvider>
  );
}
