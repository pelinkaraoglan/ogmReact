import "./App.css";
import {
  FormattedMessage,
  IntlProvider,
} from "react-intl";
import messages from "./messages";
import { useEffect, useState } from "react";


function App() {
  const [locale, setLocale] = useState("tr-TR");


  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <div className="App">
        <select value={locale} onChange={(e) => setLocale(e.target.value)}>
          <option value="tr-TR">tr-TR</option>
          <option value="en-US">en-US</option>
          <option value="de-DE">de-DE</option>
        </select>

        <h1>
          <FormattedMessage id="title" />
        </h1>



      </div>
    </IntlProvider>
  );
}

export default App;